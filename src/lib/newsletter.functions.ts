import { createServerFn } from "@tanstack/react-start";
import { newsletterSchema } from "./newsletter-schema";

export const subscribeNewsletter = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => newsletterSchema.parse(input))
  .handler(async ({ data }) => {
    // Deliberately public, insert-only lead capture. No subscriber data is returned.
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("newsletter_subscriptions").insert({ email: data.email, language: data.language, consent: data.consent });
    if (error && error.code !== "23505") return { success: false };
    return { success: true };
  });