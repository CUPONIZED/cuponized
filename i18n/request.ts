// i18n/request.ts
import {getRequestConfig} from 'next-intl/server';
import {locales, defaultLocale} from '../i18n';

export default getRequestConfig(async ({locale}) => {
  const loc = (locales as readonly string[]).includes(locale) ? locale : defaultLocale;
  return {
    messages: (await import(`../messages/${loc}.json`)).default
  };
});
