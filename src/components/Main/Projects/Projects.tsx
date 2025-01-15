import "./Projects.css";
import { Project } from "./Project/Project";
import { projectsData } from "./projectsData";
import { useContext } from "react";
import { LanguageContext } from "../../../LanguageContext";
import { dataLang } from "../../../assets/language-content/langDependentContent";

const Projects = () => {
  const lang = useContext(LanguageContext);
  return (
    <section className="section projects-section" id="Projects">
      <h2 className="section__heading" data-lang="section-heading">
        {dataLang[lang].sectionHeading[4]}
      </h2>
      <div className="section__content projects-wrapper">
        {projectsData.map((project, index) => (
          <Project
            key={index}
            index={index + 1}
            href={project.href}
            name={project.name}
            largeImg={project.largeImg}
            mediumImg={project.mediumImg}
            smallImg={project.smallImg}
            techs={project.techs}
          />
        ))}
      </div>
    </section>
  );
};

export { Projects };
