import Vaga from "@/components/ui/layout/Vaga";

export default function VagasPage() {
  return (
    <div>
      <h1 className="bg-amber-900">Vagas Page</h1>;
      <Vaga city="São Paulo" title="Do Job" company="Onlyfans" salary={1000} />
    </div>
  );
}
