import { createServerFn } from "@tanstack/react-start";
import { createHmac, timingSafeEqual } from "node:crypto";
import { z } from "zod";

// Gate condiviso per /registrazioni: un'unica password (spedita via email a chi
// ha comprato il biglietto), niente account individuali, niente database.
//
// Niente cookie: questa pagina viene incorporata via iframe dentro un altro
// dominio (systeme.io), e i browser moderni bloccano o ignorano i cookie
// impostati da un iframe di terze parti (Safari e Firefox sempre, Chrome
// sempre di più). Il token di accesso viaggia quindi esplicitamente nel
// corpo delle richieste e vive in localStorage lato client — non è soggetto
// a quel blocco, che riguarda solo l'attaccamento automatico dei cookie.
// Il token resta comunque firmato con SESSION_SECRET (mai inviato al
// client) e verificato lato server ad ogni controllo: non è falsificabile
// senza conoscere il secret.

export const REGISTRAZIONI_TOKEN_KEY = "rtr_registrazioni_token";

const TOKEN_MAX_AGE_MS = 1000 * 60 * 60 * 24 * 30; // 30 giorni

// Se SESSION_SECRET manca o è troppo corta, nessun token può essere emesso
// o verificato correttamente: torna null invece di lanciare un'eccezione,
// così i chiamanti falliscono in modo pulito (gate chiuso) invece di far
// crashare la pagina.
function getSecret(): string | null {
  const secret = process.env.SESSION_SECRET;
  if (!secret || secret.length < 32) {
    console.error(
      "SESSION_SECRET mancante o troppo corto (minimo 32 caratteri): gate sempre chiuso.",
    );
    return null;
  }
  return secret;
}

function sign(payload: string, secret: string): string {
  return createHmac("sha256", secret).update(payload).digest("base64url");
}

function issueToken(secret: string): string {
  const payload = JSON.stringify({ exp: Date.now() + TOKEN_MAX_AGE_MS });
  const encodedPayload = Buffer.from(payload).toString("base64url");
  return `${encodedPayload}.${sign(encodedPayload, secret)}`;
}

function verifyToken(token: string, secret: string): boolean {
  const [encodedPayload, signature] = token.split(".");
  if (!encodedPayload || !signature) return false;

  const a = Buffer.from(signature);
  const b = Buffer.from(sign(encodedPayload, secret));
  if (a.length !== b.length || !timingSafeEqual(a, b)) return false;

  try {
    const payload = JSON.parse(Buffer.from(encodedPayload, "base64url").toString()) as {
      exp?: unknown;
    };
    return typeof payload.exp === "number" && payload.exp > Date.now();
  } catch {
    return false;
  }
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
    const secret = getSecret();
    if (!secret) {
      return { ok: false as const, error: "Accesso non disponibile al momento." };
    }
    return { ok: true as const, token: issueToken(secret) };
  });

const checkInputSchema = z.object({ token: z.string().min(1) });

export const checkRegistrazioniToken = createServerFn({ method: "POST" })
  .validator((data: unknown) => checkInputSchema.parse(data))
  .handler(async ({ data }) => {
    const secret = getSecret();
    if (!secret) return { granted: false };
    return { granted: verifyToken(data.token, secret) };
  });
