import "./Education.css";
import { useContext } from "react";
import { LanguageContext } from "../../../LanguageContext";
import { dataLang } from "../../../assets/language-content/langDependentContent";

const Education = () => {
  const lang = useContext(LanguageContext);
  return (
    <section className="section education">
      <h2 className="section__heading" data-lang="section-heading">
        {dataLang[lang].sectionHeading[1]}
      </h2>
      <div className="section__content">
        <ul>
          <li className="ed-li list-item">
            <div className="bullet" />
            <span data-lang="education-item">
              {dataLang[lang].educationItem[0]} <br />
              2014 - 2018
            </span>
          </li>
          <li className="ed-li list-item">
            <div className="bullet" />
            <span data-lang="education-item">
              {dataLang[lang].educationItem[1]}
              <br />
              2019
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export { Education };
