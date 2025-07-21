import React, { createContext, useContext, useState } from "react";
import en from "../i18n/en";
import zh from "../i18n/zh";
import de from "../i18n/de";

const translations = { en, zh, de };
type Lang = keyof typeof translations;

const LanguageContext = createContext<{
    lang: Lang;
    t: typeof en;
    setLang: (lang: Lang) => void;
}>({
    lang: "en",
    t: translations.en,
    setLang: () => { },
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [lang, setLang] = useState<Lang>("en");

    return (
        <LanguageContext.Provider value={{ lang, t: translations[lang], setLang }}>
            {children}
        </LanguageContext.Provider>
    );
};

// 只需要这个 useI18n
export function useI18n() {
    const ctx = useContext(LanguageContext);
    return {
        t: (key: keyof typeof en) => ctx.t[key] || key,
        lang: ctx.lang,
        setLang: ctx.setLang,
    };
}
