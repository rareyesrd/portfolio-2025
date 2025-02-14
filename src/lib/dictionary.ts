// import type { Locale } from "../config/i18n";

const dictionaries = {
  es: () => import("../dictionaries/es.json").then((module) => module.default),
};

export const getDictionary = async () => dictionaries.es();
