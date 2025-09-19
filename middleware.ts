import createMiddleware from "next-intl/middleware";
import {locales, defaultLocale} from "./i18n";

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: "always" // URLs siempre con /es o /en
});

export const config = {
  // Excluir assets y API; aplicar a todo lo demás
  matcher: ["/((?!_next|.*\\..*|api).*)"]
};
