import Image from "next/image";
import Logo from "../Logo";
import { Button } from "../../button";
import { Separator } from "../../separator";

export default function Footer() {
  return (
    <footer className="flex h-50 flex-col gap-5 bg-black py-10">
      <div className="mx-auto flex w-full max-w-5xl justify-between">
        <div className="flex max-w-[320px] flex-col items-start gap-3">
          <Logo bg="dark" />
          <p className="text-sm text-white">
            O CodanteVagas conecta candidatos a empregos ideais, oferecendo
            funcionalidades intuitivas para busca e gerenciamento de vagas.
          </p>
        </div>
        <div className="flex items-center gap-3 text-white">
          <Button asChild variant="ghost" className="h-fit w-fit p-0">
            <Image
              src="/instagram-icon.svg"
              alt="Instagram logo"
              width={24}
              height={24}
            />
          </Button>
          <Button asChild variant="ghost" className="h-fit w-fit p-0">
            <Image
              src="/github-icon.svg"
              alt="github logo"
              width={24}
              height={24}
            />
          </Button>
          <Button asChild variant="ghost" className="h-fit w-fit p-0">
            <Image
              src="/email-icon.svg"
              alt="email logo"
              width={24}
              height={24}
            />
          </Button>
        </div>
      </div>
      <Separator className="mx-auto max-w-5xl" />
    </footer>
  );
}
