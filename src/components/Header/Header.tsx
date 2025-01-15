import "./Header.css";
import burgerImgLarge from "../../assets/images/header/burger-icon-40px-24px-large.svg";
import burgerImgSmall from "../../assets/images/header/burger-icon-25px-19px-small.svg";
import { dataLang } from "../../assets/language-content/langDependentContent";
import { LanguageContext } from "../../LanguageContext";
import { useContext } from "react";

const Header = ({ ref, handleThemeSwitch, handleLangSwitch }) => {
  const lang = useContext(LanguageContext);

  const removeSpaces = (str: string) => {
    const arr = str.split(" ");
    return arr.join("");
  };

  const listItems = dataLang[lang].navItem.map(
    (item: string, index: number) => (
      <li className="header__li" key={item}>
        <a
          className="header__anchor"
          data-lang="header-nav-item"
          href={`#${removeSpaces(dataLang.en.navItem[index])}`}
        >
          {item}
        </a>
      </li>
    )
  );
  return (
    <header ref={ref} className="header header--theme-styles" id="header">
      <div className="header__container container">
        <button className="burger__btn">
          <img
            alt="Open navigation menu"
            className="burger__img"
            sizes="(max-width: 320px) 25px, 40px"
            src={burgerImgLarge}
            srcSet={`${burgerImgSmall} 25w, ${burgerImgLarge} 40w`}
          />
        </button>
        <nav className="header__nav">
          <ul className="header__list">{listItems}</ul>
        </nav>
        <div className="header-btns-container">
          <button
            className="theme-switcher"
            data-current-theme="light"
            title={dataLang[lang].themeSwitcherTooltip}
            onClick={handleThemeSwitch}
          />
          <button
            className="lang-switcher"
            title={dataLang[lang].langSwitcherToopltip}
            onClick={handleLangSwitch}
          >
            <span className="lang-btn-span" data-lang="lang-btn-span">
              {dataLang[lang].langBtnSpan[0]}
            </span>
            <div className="lang-switcher__rectangle">
              <div
                className={`lang-switcher__circle lang-switcher__circle--${lang}`}
              />
            </div>
            <span className="lang-btn-span" data-lang="lang-btn-span">
              {dataLang[lang].langBtnSpan[1]}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export { Header };
