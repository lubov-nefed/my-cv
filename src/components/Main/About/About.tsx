import { useContext } from "react";
import { LanguageContext } from "../../../LanguageContext";
import { dataLang } from "../../../assets/language-content/langDependentContent";

const About = () => {
  const lang = useContext(LanguageContext);
  return (
    <section className="section main__section" id="About">
      <h2 className="section__heading" data-lang="section-heading">
        {dataLang[lang].sectionHeading[0]}
      </h2>
      <div className="section__content">
        <p className="section__paragraph" data-lang="section-paragraph">
          {dataLang[lang].sectionParagraph[1]}
        </p>
      </div>
    </section>
  );
};

export { About };
