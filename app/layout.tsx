// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cuponized",
  description: "Cupones y descuentos"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Layout raíz simple. El layout con i18n está en app/[locale]/layout.tsx
  return (
    <html lang="es" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}

