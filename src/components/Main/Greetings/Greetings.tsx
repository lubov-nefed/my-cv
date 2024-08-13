import "./Greetings.css";
import avatarImgLarge from "../../../assets/images/main/greetings/my-avatar-211px-211px-large.jpg";
import avatarImgMedium from "../../../assets/images/main/greetings/my-avatar-150px-150px-medium.jpg";
import avatarImgSmall from "../../../assets/images/main/greetings/my-avatar-130px-130px-small.jpg";

const Greetings = () => {
  return (
    <section className="main__section first-section">
      <h1 className="first-section__heading">
        <span className="span--accent-color" data-lang="first-section-heading">
          Hi, I’m{" "}
        </span>
        <span className="span--main-color" data-lang="first-section-heading">
          Lyubov Nefyodova
        </span>
        <br />
        Junior Frontend Developer
      </h1>
      <img
        alt="Lyubov Nefyodova avatar image"
        className="avatar-img"
        sizes="(max-width: 320px) 130px, (max-width: 768px) and (min-width: 321px) 150px, 211px"
        src={avatarImgLarge}
        srcSet={`${avatarImgSmall} 130w, ${avatarImgMedium} 150w, ${avatarImgLarge}  211w `}
      />
      <p
        className="section__paragraph first-section__paragraph"
        data-lang="section-paragraph"
      >
        I aspire to become a qualified frontend developer with strong technical
        skills and good performance as a team member.
      </p>
      <a
        className="first-section__btn"
        data-lang="first-section-btn"
        href="viber://chat?number=%2B79991394531"
        title="Contact me via Viber"
      >
        Contact me
      </a>
    </section>
  );
};

export { Greetings };
