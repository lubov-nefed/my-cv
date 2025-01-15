import "./Projects.css";
import { Project } from "./Project/Project";
import { projectsData } from "./projectsData";

const Projects = () => {
  return (
    <section className="section projects-section" id="Projects">
      <h2 className="section__heading" data-lang="section-heading">
        Projects
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
