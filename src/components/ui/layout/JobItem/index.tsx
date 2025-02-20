import { Job } from "@/types/job";
import { Button } from "../../button";
import Link from "next/link";

interface JobItemProps {
  job: Job;
}

export default function JobItem({
  job: { id, title, company, city, salary },
}: JobItemProps) {
  return (
    <article className="grid max-w-5xl grid-flow-row grid-cols-1 items-center gap-4 rounded-none border border-t-5 border-black border-t-black px-6 py-4 hover:border-blue-400 hover:border-t-blue-400 sm:grid-flow-col sm:grid-cols-6 sm:gap-0">
      <h3 className="font-display col-span-1 text-lg font-bold text-gray-700 sm:col-span-2">
        {title}
      </h3>
      <p className="font-light text-gray-500">{company}</p>
      <p className="font-light text-gray-500">{city}</p>
      <p className="font-light text-gray-500">
        {Intl.NumberFormat("pt-Br", {
          currency: "BRL",
          minimumFractionDigits: 2,
          style: "currency",
        }).format(salary)}
      </p>
      <Button
        variant="outline"
        className="cursor-pointer rounded-none border-neutral-700 px-8 py-3 text-neutral-700"
        asChild
      >
        <Link href={`/vagas/${id}`}>Mais</Link>
      </Button>
    </article>
  );
}
