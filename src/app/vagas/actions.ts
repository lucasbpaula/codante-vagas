import { fetchValidatedData } from "@/lib/fetch"
import { jobsSchema } from "@/types/job"


export async function getJobs(){
    return await fetchValidatedData("https://apis.codante.io/api/job-board/jobs", jobsSchema)
}