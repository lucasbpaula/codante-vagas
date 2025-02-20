import {z} from "zod";

export const jobRegistrationFormSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  company: z.string(),
  company_website: z.string().url().optional(),
  city: z.string(),
  schedule: z.enum(["full time", "part-time"]),
  salary: z.string().optional(),
  description: z.string(),
  requirements: z.string(),
  number_of_positions: z.string(),
});

export const jobSchema = z.object({
  id: z.number(),
  title: z.string(),
  company: z.string(),
  company_website: z.string().url(),
  number_of_positions: z.number(),
  city: z.string(),
  schedule: z.enum(["full-time", "part-time"]),
  salary: z.number(),
  description: z.string(),
  requirements: z.string()
})