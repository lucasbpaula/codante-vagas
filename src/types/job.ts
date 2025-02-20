import {z} from 'zod'

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

export const jobsSchema = z.array(jobSchema)


export type Job = z.infer<typeof jobSchema>