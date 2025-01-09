import "./Header.css";
import burgerImgLarge from "../../assets/images/header/burger-icon-40px-24px-large.svg";
import burgerImgSmall from "../../assets/images/header/burger-icon-25px-19px-small.svg";

const Header = ({ ref }) => {
  return (
    <header ref={ref} className="header header--light-theme" id="header">
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
          <ul className="header__list">
            <li className="header__li">
              <a
                className="header__anchor"
                data-lang="header-nav-item"
                href="#about"
              >
                About
              </a>
            </li>
            <li className="header__li">
              <a
                className="header__anchor"
                data-lang="header-nav-item"
                href="#education&skills"
              >
                Education & Skills
              </a>
            </li>
            <li className="header__li">
              <a
                className="header__anchor"
                data-lang="header-nav-item"
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li className="header__li">
              <a
                className="header__anchor"
                data-lang="header-nav-item"
                href="#code"
              >
                Code
              </a>
            </li>
            <li className="header__li">
              <a
                className="header__anchor"
                data-lang="header-nav-item"
                href="#contacts"
              >
                Contacts
              </a>
            </li>
          </ul>
        </nav>
        <div className="header-btns-container">
          <button
            className="theme-switcher"
            data-current-theme="light"
            title="Switch light & dark theme"
          />
          <button className="lang-switcher" title="Switch language">
            <span className="lang-btn-span" data-lang="lang-btn-span">
              en
            </span>
            <div className="lang-switcher__rectangle">
              <div className="lang-switcher__circle" />
            </div>
            <span className="lang-btn-span" data-lang="lang-btn-span">
              ru
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export { Header };
