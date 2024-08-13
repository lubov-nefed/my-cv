import javascriptProjectsIcon from "../../../../assets/images/main/javascript-projects-icon.svg";

interface IProjectTechsProps {
  hasJs?: true;
}

const ProjectTechs = (props: IProjectTechsProps) => {
  return (
    <ul className="project__techs">
      {props.hasJs && (
        <li>
          <img alt="javascript" src={javascriptProjectsIcon} />
        </li>
      )}
      <li className="techs__item">html</li>
      <li className="techs__item">css</li>
    </ul>
  );
};

export { ProjectTechs };
