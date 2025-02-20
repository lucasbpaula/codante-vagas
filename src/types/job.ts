import { jobSchema } from '@/schemas'
import {z} from 'zod'

export const jobsSchema = z.array(jobSchema)


export type Job = z.infer<typeof jobSchema>