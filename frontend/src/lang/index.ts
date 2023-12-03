// src/lang/index.ts

import enMessages from "./en_US";
import esMessages from "./es_ES";

interface LocaleConfig {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

const appLocales: LocaleConfig = {
  en: {
    messages: enMessages,
    locale: "en-US",
  },
  es: {
    messages: esMessages,
    locale: "es-ES",
  },
};

export default appLocales;
