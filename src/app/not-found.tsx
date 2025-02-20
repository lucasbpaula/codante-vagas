import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import notFoundImg from "@/../public/404.png";

export default function NotFoundPage() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-5 py-10">
      <h1 className="font-display text-4xl font-bold text-gray-600">
        Nada encontrado aqui...
      </h1>
      <Image
        src={notFoundImg}
        alt="2 fotos de criaturas"
        className="h-72 w-72"
      />
      <p className="text-3xl font-light text-gray-500">
        Não foi possível encontrar a página solicitada.
      </p>
      <Button
        variant="outline"
        className="cursor-pointer rounded-none border-neutral-700 px-8 py-3 text-neutral-700"
      >
        <Link href="/">Voltar à Home</Link>
      </Button>
    </div>
  );
}
