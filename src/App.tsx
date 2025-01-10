import { Burger } from "./components/Header/Burger/Burger";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";
import { useEffect, useRef, useState } from "react";

function App() {
  const [isHeaderIntersecting, setIsHeaderIntersecting] = useState(false);
  const headerRef = useRef(null);
  const arrowRef = useRef(null);
  const [theme, setTheme] = useState("light");

  const handleThemeSwitch = () => {
    console.log("handleThemeSwitch");
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
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
      <Burger />
      <Header ref={headerRef} handleThemeSwitch={handleThemeSwitch} />
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
