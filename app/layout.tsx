import "../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cuponized – Cupones y descuentos",
  description: "Encontrá cupones verificados por tienda y categoría.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
