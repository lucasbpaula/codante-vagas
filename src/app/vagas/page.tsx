import Vaga from "@/components/ui/layout/JobItem";

export default function VagasPage() {
  return (
    <div>
      <h1 className="pb-12 text-3xl font-black">Todas as Vagas</h1>
      <Vaga city="São Paulo" title="Do Job" company="Onlyfans" salary={1000} />
    </div>
  );
}
