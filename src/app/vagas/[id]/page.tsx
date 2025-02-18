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

type JobPageProps = {
  params: {
    id: string;
  };
};

export default async function JobPage({ params }: JobPageProps) {
  const { id } = await params;
  const {
    title,
    company,
    websiteCompany,
    city,
    workingPeriod,
    salary,
    description,
    requirements,
  } = {
    title: "Web Designer",
    company: "Google boladao",
    websiteCompany: "https://www.google.com.br",
    city: "São Paulo",
    workingPeriod: "full-time",
    salary: "10000",
    description:
      "O Google está em busca de um Web Designer talentoso e experiente para se juntar à sua equipe criativa. O candidato ideal deve possuir habilidades técnicas avançadas e uma forte compreensão das tendências de design modernas, juntamente com a capacidade de transformar conceitos criativos em experiências digitais impactantes e funcionais.",
    requirements: `
    - Experiência em Design: Mínimo de 5 anos de experiência comprovada como Web Designer ou em um cargo similar, preferencialmente em empresas de tecnologia ou agências digitais de grande porte.
    - Portfólio de Trabalhos: Apresentação de um portfólio de design abrangente que demonstre habilidades excepcionais em design de interface
    - Habilidades Técnicas: Proficiência em ferramentas de design e prototipagem como Adobe Creative Suite, Sketch, Figma, InVision, e outras ferramentas relevantes.
    - Conhecimentos de HTML/CSS: Familiaridade com HTML, CSS e frameworks de frontend modernos (como React, Angular ou Vue.js) é altamente desejável.
    - Pensamento Crítico e Criativo: Capacidade de resolver problemas complexos de design de maneira criativa e eficaz, com uma mentalidade centrada no usuário.
    - Trabalho em Equipe: Excelentes habilidades de comunicação e colaboração, com a capacidade de receber e fornecer feedback construtivo.
    - Gestão de Projetos: Habilidade para gerenciar múltiplos projetos simultaneamente, cumprindo prazos e mantendo altos padrões de qualidade.
`,
  };

  return (
    <Card className="p-12">
      <div className="mb-6 flex items-start justify-between">
        <div className="flex-1">
          <h1 className="font-display pb-1 text-3xl font-black">{title}</h1>
          <p className="text-sm font-light text-gray-500">
            Vaga disponível no{" "}
            <a
              href={websiteCompany}
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
          info={
            workingPeriod === "full-time" ? "Período Integral" : "Meio Período"
          }
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
          info="3 vagas"
        />
      </div>

      <h3 className="font-display mb-5 text-lg font-black">
        Descrição da Vaga
      </h3>
      <p className="text-gray-600">{description}</p>

      <Separator className="my-12" />

      <h3 className="font-display mb-5 text-lg font-black">Requisitos</h3>
      <p className="text-gray-600">{requirements}</p>
    </Card>
  );
}
