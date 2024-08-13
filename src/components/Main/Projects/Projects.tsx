import "./Projects.css";

const Projects = () => {
  return (
    <section className="section projects-section" id="projects">
      <h2 className="section__heading" data-lang="section-heading">
        Projects
      </h2>
      <div className="section__content projects-wrapper">
        <a
          className="project project1 project--light-theme"
          href="https://lubov-nefed.github.io/your-profile-react/"
          target="_blank"
        >
          <img
            alt="Your Profile"
            className="project__img"
            sizes="(max-width: 320px) 260px,                         (max-width: 768px) and (min-width: 321px) 300px,                         350px"
            src="images/main/projects/your-profile-img-350px-210px-large.jpg"
            srcSet="                  images/main/projects/your-profile-img-260px-156px-small.jpg  260w,                  images/main/projects/your-profile-img-300px-180px-medium.jpg 300w,                  images/main/projects/your-profile-img-350px-210px-large.jpg  350w                "
          />
          <p className="project__name">Your Profile</p>
          <ul className="project__techs">
            <li>
              <img
                alt="javascript"
                src="images/main/javascript-projects-icon.svg"
              />
            </li>
            <li className="techs__item">html</li>
            <li className="techs__item">css</li>
          </ul>
        </a>
        <a
          className="project project2 project--light-theme"
          href="https://lubov-nefed.github.io/pizza-market/"
          target="_blank"
        >
          <img
            alt="Pizza Market"
            className="project__img"
            sizes="(max-width: 320px) 260px,                         (max-width: 768px) and (min-width: 321px) 300px,                         350px"
            src="images/main/projects/pizza-market-img-260px-156px-small.jpg"
            srcSet="                  images/main/projects/pizza-market-img-260px-156px-small.jpg 260w,                  images/main/projects/pizza-market-img-300px-180-medium.jpg  300w,                  images/main/projects/pizza-market-img-350px-210-large.jpg   350w                "
          />
          <p className="project__name">Pizza Market</p>
          <ul className="project__techs">
            <li>
              <img
                alt="javascript"
                src="images/main/javascript-projects-icon.svg"
              />
            </li>
            <li className="techs__item">html</li>
            <li className="techs__item">css</li>
          </ul>
        </a>
        <a
          className="project project3 project--light-theme"
          href="https://lubov-nefed.github.io/computer-building-course/"
          target="_blank"
        >
          <img
            alt="Computer Course"
            className="project__img"
            sizes="(max-width: 320px) 260px,                        (max-width: 768px) and (min-width: 321px) 300px,                        350px"
            src="images/main/projects/computer-building-course-img-350px-210px-large.jpg"
            srcSet="                  images/main/projects/computer-building-course-img-260px-156px-small.jpg  260w,                  images/main/projects/computer-building-course-img-300px-180px-medium.jpg 300w,                  images/main/projects/computer-building-course-img-350px-210px-large.jpg  350w                "
          />
          <p className="project__name" data-lang="project-name">
            Computer Course
          </p>
          <ul className="project__techs">
            <li>
              <img
                alt="javascript"
                src="images/main/javascript-projects-icon.svg"
              />
            </li>
            <li className="techs__item">html</li>
            <li className="techs__item">css</li>
          </ul>
        </a>
        <a
          className="project project4 project--light-theme"
          href="https://lubov-nefed.github.io/safari-project/"
          target="_blank"
        >
          <img
            alt="Safari"
            className="project__img"
            sizes="(max-width: 320px) 260px,                        (max-width: 768px) and (min-width: 321px) 300px,                        350px"
            src="images/main/projects/safari-img-350px-210px-large.jpg"
            srcSet="                  images/main/projects/safari-img-260px-156px-small.jpg  260w,                  images/main/projects/safari-img-300px-180px-medium.jpg 300w,                  images/main/projects/safari-img-350px-210px-large.jpg  350w                "
          />
          <p className="project__name" data-lang="project-name">
            Safari
          </p>
          <ul className="project__techs">
            <li className="techs__item">html</li>
            <li className="techs__item">css</li>
          </ul>
        </a>
        <a
          className="project project5 project--light-theme"
          href="https://lubov-nefed.github.io/relvise-project/"
          target="_blank"
        >
          <img
            alt="Relvise"
            className="project__img"
            sizes="(max-width: 320px) 260px,                        (max-width: 768px) and (min-width: 321px) 300px,                        350px"
            src="images/main/projects/relvise-img-350px-210px-large.jpg"
            srcSet="                  images/main/projects/relvise-img-260px-156px-small.jpg  260w,                  images/main/projects/relvise-img-300px-180px-medium.jpg 300w,                  images/main/projects/relvise-img-350px-210px-large.jpg  350w                "
          />
          <p className="project__name">Relvise</p>
          <ul className="project__techs">
            <li className="techs__item">html</li>
            <li className="techs__item">css</li>
          </ul>
        </a>
        <a
          className="project project6 project--light-theme"
          href="https://lubov-nefed.github.io/expoforum/"
          target="_blank"
        >
          <img
            alt="Expoforum"
            className="project__img"
            sizes="(max-width: 320px) 260px,                        (max-width: 768px) and (min-width: 321px) 300px,                        350px"
            src="images/main/projects/expoforum-img-350px-210px-large.jpg"
            srcSet="                  images/main/projects/expoforum-img-260px-156px-small.jpg  260w,                  images/main/projects/expoforum-img-300px-180px-medium.jpg 300w,                  images/main/projects/expoforum-img-350px-210px-large.jpg  350w                "
          />
          <p className="project__name" data-lang="project-name">
            Expoforum
          </p>
          <ul className="project__techs">
            <li className="techs__item">html</li>
            <li className="techs__item">css</li>
          </ul>
        </a>
      </div>
    </section>
  );
};

export { Projects };
