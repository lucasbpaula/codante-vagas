"use client";
import Link from "next/link";
import Logo from "../Logo";
import { Button } from "../../button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type NavbarProps = {
  borderBottom?: boolean;
};

export default function Navbar({ borderBottom = false }: NavbarProps) {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "mx-auto flex w-full max-w-5xl items-center justify-between py-6",
        borderBottom ? "border-b-1 border-b-black" : null,
      )}
    >
      <Logo className="flex" />
      <ul className="flex items-center gap-6">
        <Button asChild variant="link" active={pathname === "/"}>
          <Link className="font-display" href="/">
            Home
          </Link>
        </Button>
        <Button asChild variant="link" active={pathname === "/sobre"}>
          <Link className="font-display" href="/sobre">
            Sobre
          </Link>
        </Button>
        <Button asChild variant="link" active={pathname === "/vagas"}>
          <Link className="font-display" href="/vagas">
            Vagas
          </Link>
        </Button>
        <Button asChild variant="link" active={pathname === "/vagas/cadastro"}>
          <Link className="font-display" href="/vagas/cadastro">
            Cadastrar Vagas
          </Link>
        </Button>
      </ul>
    </nav>
  );
}
