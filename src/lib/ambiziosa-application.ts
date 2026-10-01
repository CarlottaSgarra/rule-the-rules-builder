import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

// Form di qualifica per /candidati-ambiziosa: non c'e' nessun checkout qui,
// solo una candidatura. Per ora logghiamo lato server invece di spedire a un
// vero CRM/servizio email — l'integrazione reale arrivera' in un secondo
// momento (Andrea se ne occupera').

const applicationSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  tier: z.enum(["program", "mentorship", "unsure"]),
  message: z.string().min(1),
});

export type AmbiziosaApplicationInput = z.infer<typeof applicationSchema>;

export const submitAmbiziosaApplication = createServerFn({ method: "POST" })
  .validator((data: unknown) => applicationSchema.parse(data))
  .handler(async ({ data }) => {
    // TODO: collegare a un CRM/servizio email reale al posto del semplice log.
    console.log("[Ambiziosa] Nuova candidatura ricevuta:", {
      name: data.name,
      email: data.email,
      tier: data.tier,
      messageLength: data.message.length,
    });
    return { ok: true as const };
  });
