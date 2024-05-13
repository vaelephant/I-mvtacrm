import "server-only";

const dictionaries = {
  en: () => import("./locales/en.json").then((module) => module.default),
  cz: () => import("./locales/cz.json").then((module) => module.default),
  de: () => import("./locales/de.json").then((module) => module.default),
  uk: () => import("./locales/uk.json").then((module) => module.default), 
  cn: () => import("./locales/cn.json").then((module) => module.default),
  hi: () => import("./locales/hi.json").then((module) => module.default)
   
};

export const getDictionary = async (locale: "en" | "cz" | "de" | "uk" | "cn" | "hi") =>
  dictionaries[locale]();
