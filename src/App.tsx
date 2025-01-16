import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";
import { useEffect, useRef, useState } from "react";
import { dataLang } from "./assets/language-content/langDependentContent";
import { LanguageContext } from "./LanguageContext";

type lang = "en" | "ru";

function App() {
  const [isHeaderIntersecting, setIsHeaderIntersecting] = useState(false);
  const headerRef = useRef(null);
  const arrowRef = useRef<HTMLAnchorElement>(null);
  const [theme, setTheme] = useState("light");
  const [lang, setLang] = useState<lang>("en");

  const handleThemeSwitch = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };
  const handleLangSwitch = () => {
    const nextLang = lang === "en" ? "ru" : "en";
    setLang(nextLang);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsHeaderIntersecting(entry.isIntersecting);
    });
    if (headerRef.current) {
      observer.observe(headerRef.current);
    }
    if (arrowRef.current) {
      if (!isHeaderIntersecting) {
        arrowRef.current.classList.add("visible");
      } else {
        arrowRef.current.classList.remove("visible");
      }
    }
    return () => observer.disconnect();
  }, [isHeaderIntersecting]);

  return (
    <div id="app" className={`app--${theme}-theme`}>
      <LanguageContext.Provider value={lang}>
        {<title>{`${dataLang[lang].pageTitle}`}</title>}
        <Header
          ref={headerRef}
          handleThemeSwitch={handleThemeSwitch}
          handleLangSwitch={handleLangSwitch}
        />
        <a
          ref={arrowRef}
          className="up-arrow-btn up-arrow-btn--theme-styles"
          href="#header"
        />
        <Main />
        <Footer />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
