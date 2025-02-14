"use client";
import Link from "next/link";
import Logo from "../Logo";
import { Button } from "../../button";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="mx-auto flex max-w-5xl items-center justify-between py-6">
      <Logo />
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
