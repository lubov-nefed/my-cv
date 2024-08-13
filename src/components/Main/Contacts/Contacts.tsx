const Contacts = () => {
  return (
    <section className="section main__section contacts" id="contacts">
      <h2 className="section__heading" data-lang="section-heading">
        Contacts
      </h2>
      <div className="section__content">
        <ul>
          <li>
            <a href="mailto:love.nefed@gmail.com">
              <img
                alt="Email icon"
                className="bullet-img"
                src="images/main/contacts/email-icon.svg"
              />
              <span data-lang="contacts-item">
                e-mail: love.nefed@gmail.com
              </span>
            </a>
          </li>
          <li>
            <a href="viber://chat?number=%2B79991394531">
              <img
                alt="React icon"
                className="bullet-img"
                src="images/main/contacts/viber-icon.svg"
              />
              <span>Viber: +79991394531</span>
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/lubov-nefed" target="_blank">
              <img
                alt="React icon"
                className="bullet-img"
                src="images/main/contacts/linkedin-icon.svg"
              />
              <span>LinkedIn</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/lubov-nefed" target="_blank">
              <img
                alt="React icon"
                className="bullet-img"
                src="images/main/contacts/github-icon.svg"
              />
              <span>Github</span>
            </a>
          </li>
          <li>
            <a href="https://maps.app.goo.gl/a4nWPh2ciqPW2J4DA" target="_blank">
              <img
                alt="React icon"
                className="bullet-img"
                src="images/main/contacts/location-icon.svg"
              />
              <span data-lang="contacts-item">
                Location: Russia, Nizhny Novgorod
              </span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export { Contacts };
