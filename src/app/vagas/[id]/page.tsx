import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import JobItemDescription from "./components/JobItemDescription";
import {
  BriefcaseBusiness,
  CircleDollarSign,
  MapPin,
  Users,
} from "lucide-react";
import { getJobById } from "./actions";

type JobPageProps = {
  params: {
    id: string;
  };
};

export default async function JobPage({ params }: JobPageProps) {
  const { id } = await params;
  const {
    title,
    company_website,
    company,
    city,
    requirements,
    description,
    salary,
    number_of_positions,
    schedule,
  } = await getJobById(id);

  return (
    <Card className="p-12">
      <div className="mb-6 flex items-start justify-between">
        <div className="flex-1">
          <h1 className="font-display pb-1 text-3xl font-black">{title}</h1>
          <p className="text-sm font-light text-gray-500">
            Vaga disponível no{" "}
            <a
              href={company_website}
              target="_noblank"
              className="font-light text-blue-300 hover:text-blue-400"
            >
              {company}
            </a>
          </p>
        </div>
        <div className="flex items-end">
          <Button
            variant="outline"
            className="cursor-pointer rounded-none border-red-400 px-6 py-3 text-red-400 hover:text-red-400"
          >
            Apagar Vaga
          </Button>
        </div>
      </div>

      <div className="mb-15 flex flex-col gap-5">
        <JobItemDescription title="Localização" icon={MapPin} info={city} />

        <JobItemDescription
          title="Regime"
          icon={BriefcaseBusiness}
          info={schedule === "full-time" ? "Período Integral" : "Meio Período"}
        />

        <JobItemDescription
          title="Salário Mensal"
          icon={CircleDollarSign}
          info={Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(Number(salary))}
        />

        <JobItemDescription
          title="Vagas na Empresa"
          icon={Users}
          info={number_of_positions}
        />
      </div>

      <h3 className="font-display mb-5 text-lg font-black">
        Descrição da Vaga
      </h3>
      <p className="text-gray-600">{description}</p>

      <Separator className="my-12" />

      <h3 className="font-display mb-5 text-lg font-black">Requisitos</h3>
      <p
        className="text-gray-600"
        dangerouslySetInnerHTML={{ __html: requirements }}
      />
    </Card>
  );
}
