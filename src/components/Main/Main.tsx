import "./Main.css";
import { Greetings } from "./Greetings/Greetings";
import { About } from "./About/About";
import { Education } from "./Education/Education";
import { Courses } from "./Courses/Courses";
import { Skills } from "./Skills/Skills";
import { Projects } from "./Projects/Projects";
import { Code } from "./Code/Code";
import { Languages } from "./Languages/Languages";
import { Contacts } from "./Contacts/Contacts";

const Main = () => {
  return (
    <main className="main">
      <div className="main__container container">
        <Greetings />
        <About />
        <div
          className="education-skills-wrapper main__section"
          id="Education&Skills"
        >
          <Education />
          <Courses />
          <Skills />
        </div>
        <Projects />
        <Code />
        <Languages />
        <Contacts />
      </div>
    </main>
  );
};

export { Main };
