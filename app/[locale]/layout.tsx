// app/[locale]/layout.tsx
import type { Metadata } from "next";
import "../globals.css";
import Footer from "../../components/Footer";
import { unstable_setRequestLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import type { Locale } from "../../i18n";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://cuponized.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Cuponized – Coupons & Discounts",
  description: "Find updated coupons and deals on Cuponized.",
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Cuponized",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }]
  },
  twitter: { card: "summary_large_image", images: ["/og-default.png"] },
  icons: {
    icon: [
      { rel: "icon", url: "/favicon.ico" },
      { rel: "icon", type: "image/png", sizes: "96x96", url: "/favicon-96x96.png" },
      { rel: "icon", type: "image/svg+xml", url: "/favicon.svg" },
      { rel: "apple-touch-icon", sizes: "180x180", url: "/apple-touch-icon.png" }
    ],
    shortcut: "/favicon.ico"
  },
  manifest: "/site.webmanifest"
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const { locale } = params;
  unstable_setRequestLocale(locale);

  // 👇 Ahora sí, esto funciona porque agregamos el plugin + request.ts
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <div className="min-h-screen">{children}</div>
      <Footer />
    </NextIntlClientProvider>
  );
}

