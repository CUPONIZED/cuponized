import "./globals.css";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Cuponized – Cupones y descuentos",
  description: "Encontrá cupones verificados por tienda y categoría.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="min-h-screen bg-gray-50 text-gray-900 dark:bg-neutral-950 dark:text-neutral-100 overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}

