import { Button } from "../../button";

interface JobItemProps {
  title: string;
  company: string;
  city: string;
  salary: number;
}

export default function JobItem({
  title,
  company,
  city,
  salary,
}: JobItemProps) {
  return (
    <article className="rounded-non mx-auto flex max-w-5xl items-center justify-between border border-t-5 border-black border-t-black px-6 py-4 hover:border-blue-400 hover:border-t-blue-400">
      <h3 className="font-display text-lg font-bold text-gray-700">{title}</h3>
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
      >
        Mais
      </Button>
    </article>
  );
}
