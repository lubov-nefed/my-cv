import "./Skills.css";
import javascriptImg from "../../../assets/images/main/education&skills/javascript-icon.svg";
import gitImg from "../../../assets/images/main/education&skills/git-icon.svg";
import reactImg from "../../../assets/images/main/education&skills/react-icon.svg";

const Skills = () => {
  return (
    <section className="section skills">
      <h2 className="section__heading" data-lang="section-heading">
        Skills
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
              React
            </span>
          </li>
          <li className="skills__li skills__li--bullet list-item">
            <div className="bullet" />
            <span className="skills__span" data-lang="skills-item">
              BEM (naming and file structure)
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
