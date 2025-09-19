// components/Footer.tsx
"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations("Footer");
  const locale = useLocale();
  const base = `/${locale}`;

  return (
    <footer className="mt-10 border-t border-gray-200 dark:border-neutral-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 text-center">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-[#9333EA] to-[#EC4899] bg-clip-text text-transparent">
          {t("title")}
        </h3>

        <nav className="mt-5 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600 dark:text-neutral-400">
          <Link href={`${base}/sobre-nosotros`} className="hover:underline">
            {t("about")}
          </Link>
          <Link href={`${base}/aviso-legal`} className="hover:underline">
            {t("legal")}
          </Link>
        </nav>

        <p className="mt-6 text-sm text-gray-600 dark:text-neutral-400">{t("copy")}</p>
        <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">{t("origin")}</p>
        <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">{t("love")}</p>
      </div>
    </footer>
  );
}
