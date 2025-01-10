import "./Burger.css"; /* 
import burgerCloseImgLarge from "../../../assets/images/header/close-icon-43px-43px-large.svg"; */
import burgerCloseImgSmall from "../../../assets/images/header/close-icon-30px-30px-small.svg";

const Burger = () => {
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
      <ul className="burger__list">
        <li className="burger__li">
          <a
            className="burger__anchor"
            data-lang="burger-nav-item"
            href="#about"
          >
            About
          </a>
        </li>
        <li className="burger__li">
          <a
            className="burger__anchor"
            data-lang="burger-nav-item"
            href="#education&skills"
          >
            Education & Skills
          </a>
        </li>
        <li className="burger__li">
          <a
            className="burger__anchor"
            data-lang="burger-nav-item"
            href="#projects"
          >
            Projects
          </a>
        </li>
        <li className="burger__li">
          <a
            className="burger__anchor"
            data-lang="burger-nav-item"
            href="#code"
          >
            Code
          </a>
        </li>
        <li className="burger__li">
          <a
            className="burger__anchor"
            data-lang="burger-nav-item"
            href="#contacts"
          >
            Contacts
          </a>
        </li>
      </ul>
    </nav>
  );
};

export { Burger };
