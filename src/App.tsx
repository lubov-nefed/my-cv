import { Burger } from "./components/Header/Burger/Burger";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";
import { useEffect, useRef, useState } from "react";
import { dataLang } from "./assets/language-content/lang-dependent-content";

function App() {
  const [isHeaderIntersecting, setIsHeaderIntersecting] = useState(false);
  const headerRef = useRef(null);
  const arrowRef = useRef(null);
  const [theme, setTheme] = useState("light");
  const [lang, setLang] = useState("en");

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
    observer.observe(headerRef.current);
    if (!isHeaderIntersecting) {
      arrowRef.current.classList.add("visible");
    } else {
      arrowRef.current.classList.remove("visible");
    }
    return () => observer.disconnect();
  }, [isHeaderIntersecting]);

  return (
    <div id="app" className={`app--${theme}-theme`}>
      {<title>{`${dataLang[lang].pageTitle}`}</title>}
      <Burger />
      <Header
        ref={headerRef}
        handleThemeSwitch={handleThemeSwitch}
        handleLangSwitch={handleLangSwitch}
        lang={lang}
      />
      <a
        ref={arrowRef}
        className="up-arrow-btn up-arrow-btn--theme-styles"
        href="#header"
      />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
