import { useContext } from "react";
import { LanguageContext } from "../../../LanguageContext";
import { dataLang } from "../../../assets/language-content/langDependentContent";

const Languages = () => {
  const lang = useContext(LanguageContext);
  return (
    <section className="section main__section langs">
      <h2 className="section__heading" data-lang="section-heading">
        {dataLang[lang].sectionHeading[6]}
      </h2>
      <div className="section__content">
        <ul>
          <li className="list-item">
            <div className="bullet" />
            <span data-lang="lang-item">{dataLang[lang].langItem[0]}</span>
          </li>
          <li className="list-item">
            <div className="bullet" />
            <span data-lang="lang-item">{dataLang[lang].langItem[1]}</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export { Languages };
