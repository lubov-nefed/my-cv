import "./Courses.css";
import RsSchoolImg from "../../../assets/images/main/education&skills/rs-school-icon.svg";
import FreeCodeCampImg from "../../../assets/images/main/education&skills/free-code-camp-icon.svg";
import MimoApppImg from "../../../assets/images/main/education&skills/mimo-app-icon.svg";

const Courses = () => {
  return (
    <section className="section courses">
      <h2 className="section__heading" data-lang="section-heading">
        Courses
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
              Rs School, Frontend Stage #0 <br />
              May 2022 – September 2022
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
              January 2021 - September 2022 <br />
              251 total points
            </p>
          </li>
          <li className="courses__li">
            <img alt="Mimo App icon" className="bullet-img" src={MimoApppImg} />
            <p className="courses__paragraph" data-lang="courses-item">
              Mimo App <br />
              November 2021 - May 2022 <br />
              84% Web Development
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export { Courses };
