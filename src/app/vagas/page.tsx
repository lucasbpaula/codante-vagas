import JobItem from "@components/ui/layout/JobItem";
import { getJobs } from "./actions";

export default async function VagasPage() {
  const jobs = await getJobs();
  return (
    <div>
      <h1 className="pb-12 text-3xl font-black">Todas as Vagas</h1>
      <div className="space-y-8">
        {jobs?.map((job) => <JobItem job={job} key={job.id} />)}
      </div>
    </div>
  );
}
