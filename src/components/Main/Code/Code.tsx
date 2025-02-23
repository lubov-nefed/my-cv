import "./Code.css";
import { useContext } from "react";
import { LanguageContext } from "../../../LanguageContext";
import { dataLang } from "../../../assets/language-content/langDependentContent";

const Code = () => {
  const lang = useContext(LanguageContext);
  return (
    <section className="section main__section" id="Code">
      <h2 className="section__heading" data-lang="section-heading">
        {dataLang[lang].sectionHeading[5]}
      </h2>
      <div className="section__content">
        <p className="code">
          <span className="span--main-color">
            function
            <span className="span--accent-color"> hellloAlert</span>
            ()
          </span>
          {`              {`}
          <span className="span--accent-color">
            <br />
            alert
          </span>
          (<span className="span--code-string-color">'Hey there!'</span>
          );
          <br />
          {`              } `}
          <br />
          <span className="span--main-color">const </span>
          button = document
          <span className="span--accent-color">.querySelector</span>
          <span className="span--main-color">
            (<span className="span--code-string-color">'#clickMe'</span>)
          </span>
          ; <br />
          button
          <span className="span--accent-color">.addEventListener</span>
          <span className="span--main-color">
            (<span className="span--code-string-color">'click'</span>,
            <span className="span--accent-color"> hellloAlert</span>)
          </span>
          ;
        </p>
      </div>
    </section>
  );
};

export { Code };
