import { z } from "zod";
export const newsletterSchema = z.object({
  email: z.string().trim().toLowerCase().email().max(254),
  language: z.enum(["en", "ne", "new"]),
  consent: z.literal(true),
  website: z.string().max(0).default(""),
});