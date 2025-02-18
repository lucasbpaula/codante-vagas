import {z} from "zod";

export const jobRegistrationFormSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  company: z.string(),
  websiteCompany: z.string().url().optional(),
  city: z.string(),
  workingPeriod: z.enum(["full-time", "part-time"]),
  salary: z.string().optional(),
  description: z.string(),
  requirements: z.string(),
});