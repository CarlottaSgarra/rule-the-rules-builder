import { createServerFn } from "@tanstack/react-start";
import { getSession, updateSession, type SessionConfig } from "@tanstack/react-start/server";
import { timingSafeEqual } from "node:crypto";
import { z } from "zod";

// Gate condiviso per /registrazioni: un'unica password (spedita via email a chi
// ha comprato il biglietto), niente account individuali, niente database.
// La sessione è un cookie cifrato e firmato gestito da TanStack Start: il
// contenuto non è leggibile né falsificabile senza SESSION_SECRET, che vive
// solo lato server e non finisce mai nel bundle del browser.

const SESSION_NAME = "rtr_registrazioni";
const SESSION_MAX_AGE = 60 * 60 * 24 * 30; // 30 giorni

type RegistrazioniSession = { granted: boolean };

function sessionConfig(): SessionConfig {
  const password = process.env.SESSION_SECRET;
  if (!password || password.length < 32) {
    // Nessun secret valido configurato: nessuna sessione può essere creata o
    // letta correttamente, quindi il gate resta chiuso per tutti (fail closed).
    throw new Error("SESSION_SECRET mancante o troppo corto (minimo 32 caratteri)");
  }
  return {
    password,
    name: SESSION_NAME,
    maxAge: SESSION_MAX_AGE,
    cookie: { secure: true, httpOnly: true, sameSite: "lax", path: "/" },
  };
}

function passwordsMatch(submitted: string, expected: string): boolean {
  const a = Buffer.from(submitted);
  const b = Buffer.from(expected);
  // Le due stringhe devono avere la stessa lunghezza per timingSafeEqual:
  // se non corrisponde, confrontiamo comunque un buffer fittizio della stessa
  // lunghezza di "a" per non rivelare via timing la lunghezza della password vera.
  if (a.length !== b.length) {
    timingSafeEqual(a, a);
    return false;
  }
  return timingSafeEqual(a, b);
}

const verifyInputSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export const verifyRegistrazioniAccess = createServerFn({ method: "POST" })
  .validator((data: unknown) => verifyInputSchema.parse(data))
  .handler(async ({ data }) => {
    const expected = process.env.REGISTRAZIONI_PASSWORD;
    if (!expected) {
      console.error("REGISTRAZIONI_PASSWORD non configurata: gate sempre chiuso.");
      return { ok: false as const, error: "Accesso non disponibile al momento." };
    }
    if (!passwordsMatch(data.password, expected)) {
      return { ok: false as const, error: "Email o password non corrette." };
    }
    await updateSession<RegistrazioniSession>(sessionConfig(), { granted: true });
    return { ok: true as const };
  });

export const checkRegistrazioniAccess = createServerFn({ method: "GET" }).handler(async () => {
  const session = await getSession<RegistrazioniSession>(sessionConfig());
  return { granted: session.data.granted === true };
});
