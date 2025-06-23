import Section from "../Section";
import "./wholesale.scss";
import wholesale from "/img/wholesale.jpeg";

const Wholesale = () => {
  return (
    <Section sectionClass={"wholesale"}>
      <nav className="pageNav">
        <Link to="/">Главная &gt; </Link>
        <span className="pageNav__curr">
          {"Предложения для юридических лиц"}
        </span>
      </nav>
      <div className="wholesale__wrapper">
        <div className="wholesale__wrapper-block">
          <h1 className="wholesale__title fz-24 fw-600">
            Поставки пирожных оптом
          </h1>
          <div className="wholesale__text fz-14 fw-400">
            Мы готовы к сотрудничеству с юридическими лицами, кафе, ресторанами,
            отелями и т.д.
          </div>
        </div>
        <div className="wholesale__wrapper-block">
          <img
            src={wholesale}
            alt="photo from one of our shop"
            className="wholesale__img"
          />
        </div>
        <div className="wholesale__wrapper-block">
          <div className="wholesale__btns">
            <button className="wholesale__btns-btn fz-12 fw-600">
              Презентация
            </button>
            <button className="wholesale__btns-btn fz-12 fw-600">
              Прайс-лист
            </button>
          </div>
        </div>
        <div className="wholesale__wrapper-block">
          <ul className="wholesale__subtext fw-400 fz-14">
            Мы предлагаем: <br />
            <li> прямые поставки от производителя, всегда свежая продукция;</li>
            <li> ассортимент с высоким средним чеком и маржой;</li>
            <li>бесплатные акриловые шоубоксы для витрины;</li>
            <li>
              продукцию для дегустации или снижение цены для проведения
              промо-акций;
            </li>
            <li>гибкие условия сотрудничества и поставок.</li>
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Wholesale;
