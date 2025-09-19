import "./globals.css";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://cuponized.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Cuponized – Cupones y descuentos",
  description: "Encontrá cupones y descuentos actualizados en Cuponized",
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Cuponized",
    title: "Cuponized – Cupones y descuentos",
    description: "Encontrá cupones y descuentos actualizados en Cuponized",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cuponized – Cupones y descuentos",
    description: "Encontrá cupones y descuentos actualizados en Cuponized",
    images: ["/og-default.png"],
  },
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="bg-gray-50 dark:bg-neutral-950 text-gray-900 dark:text-neutral-100">
        {children}
      </body>
    </html>
  );
}

