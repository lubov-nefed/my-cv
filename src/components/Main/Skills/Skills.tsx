import "./Skills.css";
import javascriptImg from "../../../assets/images/main/education&skills/javascript-icon.svg";
import gitImg from "../../../assets/images/main/education&skills/git-icon.svg";
import reactImg from "../../../assets/images/main/education&skills/react-icon.svg";
import { useContext } from "react";
import { LanguageContext } from "../../../LanguageContext";
import { dataLang } from "../../../assets/language-content/langDependentContent";

const Skills = () => {
  const lang = useContext(LanguageContext);
  return (
    <section className="section skills">
      <h2 className="section__heading" data-lang="section-heading">
        {dataLang[lang].sectionHeading[3]}
      </h2>
      <div className="section__content">
        <ul>
          <li className="skills__li skills__li--icon list-item">
            <img
              alt="JavaScript icon"
              className="bullet-img"
              src={javascriptImg}
            />
            <span className="skills__span">JavaScript, HTML, CSS</span>
          </li>
          <li className="skills__li skills__li--icon list-item">
            <img alt="Git icon" className="bullet-img" src={gitImg} />
            <span className="skills__span">Git</span>
          </li>
          <li className="skills__li skills__li--icon list-item">
            <img alt="React icon" className="bullet-img" src={reactImg} />
            <span className="skills__span" data-lang="skills-item">
              React, TypeScript
            </span>
          </li>
          <li className="skills__li skills__li--bullet list-item">
            <div className="bullet" />
            <span className="skills__span" data-lang="skills-item">
              BEM
            </span>
          </li>
          <li className="skills__li skills__li--bullet list-item">
            <div className="bullet" />
            <span className="skills__span">Figma</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export { Skills };
