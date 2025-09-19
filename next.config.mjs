// next.config.mjs
import createNextIntlPlugin from 'next-intl/plugin';

// Le pasamos dónde está la config de request (paso 2)
const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
};

export default withNextIntl(nextConfig);
