// i18n/request.ts
import {getRequestConfig} from 'next-intl/server';
import {locales, defaultLocale} from './i18n';

export default getRequestConfig(async ({locale}) => {
  // Normaliza por si llega un locale raro
  const loc = (locales as readonly string[]).includes(locale) ? locale : defaultLocale;

  return {
    // Carga el JSON correspondiente desde /messages
    messages: (await import(`../messages/${loc}.json`)).default
  };
});
