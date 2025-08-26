import "./promoWithButtons.scss";
import Section from "@/components/Section";
const PromoWithButtons = ({
  navTitle,
  img,
  alt,
  text,
  title,
  btn1,
  btn2,
  subtext,
  extraImgClass = "",
}) => {
  return (
    <Section sectionClass={"promoWithButtons"}>
      <nav className="pageNav">
        <Link to="/">Главная &gt; </Link>
        <span className="pageNav__curr">{navTitle}</span>
      </nav>
      <div className="promoWithButtons__wrapper">
        <div className="promoWithButtons__wrapper-block">
          <h1 className="promoWithButtons__title fz-24 fw-600">{title}</h1>
          <div className="promoWithButtons__text fz-14 fw-400">{text}</div>
        </div>
        <div className="promoWithButtons__wrapper-block">
          <img
            src={img}
            alt={alt}
            className={`promoWithButtons__img ${
              extraImgClass ? "extraImgClass" : ""
            }`}
          />
        </div>
        <div className="promoWithButtons__wrapper-block">
          <div className="promoWithButtons__btns">
            <button className="promoWithButtons__btns-btn fz-12 fw-600">
              {btn1}
            </button>
            <button className="promoWithButtons__btns-btn fz-12 fw-600">
              {btn2}
            </button>
          </div>
        </div>
        <div className="promoWithButtons__wrapper-block promoWithButtons__subtext">
          {subtext}
        </div>
      </div>
    </Section>
  );
};

export default PromoWithButtons;
