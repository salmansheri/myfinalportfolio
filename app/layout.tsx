import type { Metadata } from "next";
import { Archivo, Big_Shoulders_Stencil } from "next/font/google";
import "./globals.css";

const stencil = Big_Shoulders_Stencil({
  variable: "--font-stencil",
  subsets: ["latin"],
  axes: ["opsz"],
});

const archivo = Archivo({
  variable: "--font-form",
  subsets: ["latin"],
  axes: ["wdth"],
});

export const metadata: Metadata = {
  title: "Manifest · Full-stack engineer",
  description: "A full-stack engineer who ships end to end, from schema to screen, with no handoffs.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${stencil.variable} ${archivo.variable}`}>
      <body>{children}</body>
    </html>
  );
}
