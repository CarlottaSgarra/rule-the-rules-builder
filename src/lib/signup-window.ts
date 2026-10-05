import { useEffect, useState } from "react";

// Finestre di iscrizione a Rule The Rules per le pagine A (/) e B (/b), con
// fuso orario: sono gli stessi istanti per tutti i visitatori.
// - fino a lunedì 5 ottobre alle 20:00: iscrizioni aperte
// - dalle 20:00 di lunedì alle 9:00 di martedì 6 ottobre: chiuse
// - martedì 6 ottobre dalle 9:00 alle 18:00: ultimissima possibilità
// - dopo le 18:00 di martedì: di nuovo chiuse
export const SIGNUP_CLOSES_TONIGHT = new Date("2026-10-05T20:00:00+02:00").getTime();
export const SIGNUP_REOPENS = new Date("2026-10-06T09:00:00+02:00").getTime();
export const SIGNUP_FINAL_CLOSE = new Date("2026-10-06T18:00:00+02:00").getTime();

export type SignupPhase = "open" | "closed" | "lastChance";

export function getSignupPhase(now: number): SignupPhase {
  if (now < SIGNUP_CLOSES_TONIGHT) return "open";
  if (now >= SIGNUP_REOPENS && now < SIGNUP_FINAL_CLOSE) return "lastChance";
  return "closed";
}

// Istante a cui punta il countdown nella fase corrente (null se chiuse).
export function getSignupCountdownTarget(phase: SignupPhase): number | null {
  if (phase === "open") return SIGNUP_CLOSES_TONIGHT;
  if (phase === "lastChance") return SIGNUP_FINAL_CLOSE;
  return null;
}

// Fase corrente, ricontrollata ogni 15 secondi: chi ha la pagina aperta vede
// il cambio senza ricaricare. Le pagine sono renderizzate a ogni richiesta,
// quindi server e browser partono dalla stessa fase.
export function useSignupPhase(): SignupPhase {
  const [phase, setPhase] = useState<SignupPhase>(() => getSignupPhase(Date.now()));
  useEffect(() => {
    const tick = () => setPhase(getSignupPhase(Date.now()));
    tick();
    const id = setInterval(tick, 15_000);
    return () => clearInterval(id);
  }, []);
  return phase;
}
