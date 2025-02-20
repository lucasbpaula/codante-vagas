import Navbar from "@/components/ui/layout/Navbar";
import "./globals.css";
import Footer from "@/components/ui/layout/Footer";
import { Metadata } from "next";
import { Maven_Pro } from "next/font/google";

const mavenPro = Maven_Pro({
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-maven-pro",
});

export const metadata: Metadata = {
  title: "CodanteVagas",
  description:
    "O CodanteVagas conecta candidatos a empregos ideias, oferecendo funcionalidades intuitivas para busca e gerenciamento de vagas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={mavenPro.variable}>
      <body>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
