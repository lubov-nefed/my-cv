import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer footer--theme-styles">
      <div className="footer__container container">
        <p className="footer__copyright" data-lang="footer-copyright">
          © 2022 Lyubov Nefyodova
        </p>
        <ul className="footer__contacts">
          <li className="footer__li">
            <a
              className="footer__link footer__viber-link"
              href="viber://chat?number=%2B79991394531"
              title="Contact via Viber"
            />
          </li>
          <li className="footer__li">
            <a
              className="footer__link footer__linkedin-link"
              href="https://linkedin.com/in/lubov-nefed"
              target="_blank"
              title="Go to Linkedin profile"
            />
          </li>
          <li className="footer__li">
            <a
              className="footer__link footer__github-link"
              href="https://github.com/lubov-nefed"
              target="_blank"
              title="Go to Github profile"
            />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export { Footer };
