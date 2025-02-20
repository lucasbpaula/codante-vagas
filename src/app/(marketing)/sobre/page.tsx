import aboutImg from "@/../public/sobre-img.png";
import Image from "next/image";

export default function SobrePage() {
  return (
    <div className="flex items-start">
      <div className="flex max-w-120 flex-col gap-15">
        <h1 className="font-display text-5xl font-bold text-gray-950">
          O que você procura, <span className="text-blue-400">nós temos</span>!
        </h1>
        <div className="flex max-w-sm flex-col gap-6">
          <p className="text-gray-700">
            O CodanteVagas é a plataforma ideal para profissionais de diversas
            áreas que buscam novas oportunidades e empresas que precisam de
            talentos qualificados.
          </p>
          <p>
            Com uma interface intuitiva e fácil de usar, nosso board de vagas
            conecta profissionais de diferentes setores com as melhores empresas
            do mercado.
          </p>
          <p>
            Seja você um candidato em busca de seu próximo desafio ou uma
            empresa em busca de novos talentos, o CodanteVagas facilita a
            conexão entre candidatos e empregadores, promovendo o crescimento e
            a inovação em diversos setores.
          </p>
        </div>
      </div>

      <Image src={aboutImg} alt="pessoas felizes" />
    </div>
  );
}
