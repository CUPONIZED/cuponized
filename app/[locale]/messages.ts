import {Locale} from "../../i18n";

export async function loadMessages(locale: Locale) {
  const messages = await import(`../../messages/${locale}.json`).then(
    (m) => m.default
  );
  return messages;
}
