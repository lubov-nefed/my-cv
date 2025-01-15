import "./Courses.css";
import RsSchoolImg from "../../../assets/images/main/education&skills/rs-school-icon.svg";
import FreeCodeCampImg from "../../../assets/images/main/education&skills/free-code-camp-icon.svg";
import MimoApppImg from "../../../assets/images/main/education&skills/mimo-app-icon.svg";
import { useContext } from "react";
import { LanguageContext } from "../../../LanguageContext";
import { dataLang } from "../../../assets/language-content/langDependentContent";

const Courses = () => {
  const lang = useContext(LanguageContext);
  return (
    <section className="section courses">
      <h2 className="section__heading" data-lang="section-heading">
        {dataLang[lang].sectionHeading[2]}
      </h2>
      <div className="section__content">
        <ul className="courses__list">
          <li className="courses__li">
            <img
              alt="Rs School icon"
              className="bullet-img"
              src={RsSchoolImg}
            />
            <p className="courses__paragraph" data-lang="courses-item">
              Rs School, Frontend Stage #0
              <br />
              2022
            </p>
          </li>
          <li className="courses__li">
            <img
              alt="FreeCodeCamp icon"
              className="bullet-img"
              src={FreeCodeCampImg}
            />
            <p className="courses__paragraph" data-lang="courses-item">
              FreeCodeCamp <br />
              2021 - 2022 <br />
            </p>
          </li>
          <li className="courses__li">
            <img alt="Mimo App icon" className="bullet-img" src={MimoApppImg} />
            <p className="courses__paragraph" data-lang="courses-item">
              {dataLang[lang].coursesItem} <br />
              2021 - 2022
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export { Courses };
