import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// Configuração da Poppins
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins", // Nome mais intuitivo
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Meu Projeto Next.js",
  description: "Usando a fonte Poppins",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${poppins.variable} h-full antialiased`}>
      {/* Aplicamos a classe da fonte aqui no body para ela ser a padrão */}
      <body className={`${poppins.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}