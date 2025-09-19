import type {Metadata} from "next";
import "../globals.css";
import Footer from "../../components/Footer";
import {getMessages, unstable_setRequestLocale} from "next-intl/server";
import {NextIntlClientProvider} from "next-intl";
import {Locale} from "../../i18n";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://cuponized.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Cuponized – Coupons & Discounts",
  description: "Find updated coupons and deals on Cuponized.",
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Cuponized",
    images: [{url: "/og-default.png", width: 1200, height: 630}]
  },
  twitter: {card: "summary_large_image", images: ["/og-default.png"]},
  icons: {
    icon: [
      {rel: "icon", url: "/favicon.ico"},
      {rel: "icon", type: "image/png", sizes: "96x96", url: "/favicon-96x96.png"},
      {rel: "icon", type: "image/svg+xml", url: "/favicon.svg"},
      {rel: "apple-touch-icon", sizes: "180x180", url: "/apple-touch-icon.png"}
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
  params: {locale: Locale};
}) {
  const {locale} = params;
  unstable_setRequestLocale(locale);

  // Cargar mensajes del locale
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="bg-gray-50 dark:bg-neutral-950 text-gray-900 dark:text-neutral-100">
        <NextIntlClientProvider messages={messages} locale={locale}>
          <div className="min-h-screen">{children}</div>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
