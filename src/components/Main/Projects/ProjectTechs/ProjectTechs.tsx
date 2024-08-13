import javascriptProjectsIcon from "../../../../assets/images/main/javascript-projects-icon.svg";
import reactProjectsIcon from "../../../../assets/images/main/projects/react-icon.svg";
import typescriptProjectsIcon from "../../../../assets/images/main/projects/typescript-icon.svg";

interface IProjectTechsProps {
  techs: string[];
}

const ProjectTechs = (props: IProjectTechsProps) => {
  return (
    <ul className="project__techs">
      {props.techs.includes("React") && (
        <li>
          <img alt="React" src={reactProjectsIcon} />
        </li>
      )}
      {props.techs.includes("TS") && (
        <li>
          <img alt="TypeScript" src={typescriptProjectsIcon} />
        </li>
      )}
      {props.techs.includes("JS") && (
        <li>
          <img alt="JavaScript" src={javascriptProjectsIcon} />
        </li>
      )}
      <li className="techs__item">html</li>
      <li className="techs__item">css</li>
    </ul>
  );
};

export { ProjectTechs };
