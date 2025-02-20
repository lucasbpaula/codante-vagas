import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import homeImg from "@/../public/home-img.png";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-display max-w-xl text-center text-5xl font-black text-gray-950">
        Diga adeus às longas buscas para uma vaga
      </h1>
      <Button
        variant="outline"
        className="mt-6 cursor-pointer rounded-none border-neutral-700 px-10 py-3 text-lg font-bold text-neutral-700 capitalize"
        asChild
      >
        <Link href="/vagas">Busque uma vaga</Link>
      </Button>
      <Image src={homeImg} alt="pessoas felizes" />
    </div>
  );
}
