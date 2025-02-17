import { Button } from "../../button";

interface VagaProps {
  title: string;
  company: string;
  city: string;
  salary: number;
}

export default function Vaga({ title, company, city, salary }: VagaProps) {
  return (
    <div className="rounded-non mx-auto flex max-w-5xl items-center justify-between border border-t-5 border-black border-t-black px-6 py-4 hover:border-blue-400 hover:border-t-blue-400">
      <h2 className="text-xl font-bold text-gray-600">{title}</h2>
      <p className="text-sm">{company}</p>
      <p className="text-sm">{city}</p>
      <p className="text-sm">
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
    </div>
  );
}
