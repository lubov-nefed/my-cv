import { ProjectTechs } from "../ProjectTechs/ProjectTechs";

interface IProjectProps {
  index: number;
  href: string;
  name: string;
  largeImg: string;
  mediumImg: string;
  smallImg: string;
  techs: string[];
}

const Project = (props: IProjectProps) => {
  return (
    <a
      className={`project project${props.index} project--light-theme`}
      href={props.href}
      target="_blank"
    >
      <img
        alt={props.name}
        className="project__img"
        sizes="(max-width: 320px) 260px, (max-width: 768px) and (min-width: 321px) 300px, 350px"
        src={props.largeImg}
        srcSet={`${props.smallImg} 260w, ${props.mediumImg} 300w, ${props.largeImg}  350w`}
      />
      <p className="project__name">{props.name}</p>
      {props.techs.includes("JS") && <ProjectTechs hasJs={true} />}
      {!props.techs.includes("JS") && <ProjectTechs />}
    </a>
  );
};

export { Project };
