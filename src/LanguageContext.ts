import { createContext } from "react";
type ILangContext = "en" | "ru";

export const LanguageContext = createContext<ILangContext>("en");
