const Languages = () => {
  return (
    <section className="section main__section langs">
      <h2 className="section__heading" data-lang="section-heading">
        Languages
      </h2>
      <div className="section__content">
        <ul>
          <li className="list-item">
            <div className="bullet" />
            <span data-lang="lang-item">Russian (native)</span>
          </li>
          <li className="list-item">
            <div className="bullet" />
            <span data-lang="lang-item">English (B1-B2)</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export { Languages };
