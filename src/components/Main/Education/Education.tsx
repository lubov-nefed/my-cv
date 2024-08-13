import "./Education.css";

const Education = () => {
  return (
    <section className="section education">
      <h2 className="section__heading" data-lang="section-heading">
        Education & Skills
      </h2>
      <div className="section__content">
        <ul>
          <li className="ed-li list-item">
            <div className="bullet" />
            <span data-lang="education-item">
              Lobachevsky University, B.A. in Psychology <br />
              2014 - 2018
            </span>
          </li>
          <li className="ed-li list-item">
            <div className="bullet" />
            <span data-lang="education-item">
              Lobachevsky University, Physical Culture and Sports
              (short-program)
              <br />
              March 2019 - June 2019
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export { Education };
