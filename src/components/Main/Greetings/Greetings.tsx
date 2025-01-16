import "./Greetings.css";
import avatarImgLarge from "../../../assets/images/main/greetings/my-avatar-211px-211px-large.svg";
import avatarImgMedium from "../../../assets/images/main/greetings/my-avatar-150px-150px-medium.svg";
import avatarImgSmall from "../../../assets/images/main/greetings/my-avatar-130px-130px-small.svg";
import { useContext } from "react";
import { LanguageContext } from "../../../LanguageContext";
import { dataLang } from "../../../assets/language-content/langDependentContent";

const Greetings = () => {
  const lang = useContext(LanguageContext);
  return (
    <section className="main__section first-section">
      <h1 className="first-section__heading">
        <span className="span--accent-color" data-lang="first-section-heading">
          {dataLang[lang].firstSectionHeading[0]}{" "}
        </span>
        <span className="span--main-color" data-lang="first-section-heading">
          <>{dataLang[lang].firstSectionHeading[1]}</>
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
        {dataLang[lang].sectionParagraph[0]}
      </p>
      <a
        className="first-section__btn"
        data-lang="first-section-btn"
        href="t.me/LubovNefed"
        title="Contact me via Telegram"
      >
        {dataLang[lang].firstSectionBtn}
      </a>
    </section>
  );
};

export { Greetings };
