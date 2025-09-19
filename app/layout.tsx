import "./globals.css";
import type { Metadata } from "next";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Cuponized – Cupones y descuentos",
  description: "Encontrá cupones y descuentos actualizados en Cuponized",
  icons: {
    icon: [
      { rel: "icon", url: "/favicon.ico" },
      { rel: "icon", type: "image/png", sizes: "96x96", url: "/favicon-96x96.png" },
      { rel: "icon", type: "image/svg+xml", url: "/favicon.svg" },
      { rel: "apple-touch-icon", sizes: "180x180", url: "/apple-touch-icon.png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-gray-50 dark:bg-neutral-950 text-gray-900 dark:text-neutral-100">
        {children}
        <Footer />
      </body>
    </html>
  );
}

