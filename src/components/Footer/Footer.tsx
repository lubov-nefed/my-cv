import "./Footer.css";
import { useContext } from "react";
import { LanguageContext } from "../../LanguageContext";
import { dataLang } from "../../assets/language-content/langDependentContent";

const Footer = () => {
  const lang = useContext(LanguageContext);
  return (
    <footer className="footer footer--theme-styles">
      <div className="footer__container container">
        <p className="footer__copyright" data-lang="footer-copyright">
          {dataLang[lang].footerCopyright}
        </p>
        <ul className="footer__contacts">
          <li className="footer__li">
            <a
              className="footer__link footer__viber-link"
              href="viber://chat?number=%2B79991394531"
              title="Contact via Viber"
            />
          </li>
          <li className="footer__li">
            <a
              className="footer__link footer__linkedin-link"
              href="https://linkedin.com/in/lubov-nefed"
              target="_blank"
              title="Go to Linkedin profile"
            />
          </li>
          <li className="footer__li">
            <a
              className="footer__link footer__github-link"
              href="https://github.com/lubov-nefed"
              target="_blank"
              title="Go to Github profile"
            />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export { Footer };
