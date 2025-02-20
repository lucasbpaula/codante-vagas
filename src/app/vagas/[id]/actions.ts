'use server'
import { fetchValidatedData } from "@/lib/fetch"
import { jobSchema } from "@/types/job"


export async function getJobById(id: string){
    return await fetchValidatedData(`https://apis.codante.io/api/job-board/jobs/${id}`, jobSchema)
}