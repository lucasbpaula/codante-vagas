import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="text-center">
      <h1 className="font-display text-4xl font-bold text-gray-600">
        Nada encontrado aqui...
      </h1>
      <Image
        src="/404.png"
        alt="2 fotos de criaturas"
        height={400}
        width={500}
        className="mx-auto mt-10 w-lg"
      />
      <p className="text-3xl font-light text-gray-500">
        Não foi possível encontrar a página solicitada.
      </p>
      <Button className="mt-12 px-6 py-8 text-lg">
        <Link href="/">Voltar à Home</Link>
      </Button>
    </main>
  );
}
