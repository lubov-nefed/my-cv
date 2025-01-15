import "./Burger.css"; /* 
import burgerCloseImgLarge from "../../../assets/images/header/close-icon-43px-43px-large.svg"; */
import burgerCloseImgSmall from "../../../assets/images/header/close-icon-30px-30px-small.svg";
import { dataLang } from "../../../assets/language-content/langDependentContent";
import { LanguageContext } from "../../../LanguageContext";
import { useContext } from "react";

const Burger = () => {
  const lang = useContext(LanguageContext);

  const removeSpaces = (str: string) => {
    const arr = str.split(" ");
    return arr.join("");
  };

  const listItems = dataLang[lang].navItem.map(
    (item: string, index: number) => (
      <li className="burger__li" key={item}>
        <a
          className="burger__anchor"
          data-lang="burger-nav-item"
          href={`#${removeSpaces(dataLang.en.navItem[index])}`}
        >
          {item}
        </a>
      </li>
    )
  );
  return (
    <nav className="burger__nav burger__nav--theme-styles">
      <header className="burger__header burger__header--theme-styles">
        <h2 className="burger__heading" data-lang="burger-heading">
          Lyubov Nefyodova
        </h2>
        <button className="burger__close-btn">
          <img alt="Close" src={burgerCloseImgSmall} />
        </button>
      </header>
      <ul className="burger__list">{listItems}</ul>
    </nav>
  );
};

export { Burger };
