import Section from "../Section";

import corporate from "/img/corporate/corporate-presents.png";
import "./corporate.scss";

const Corporate = () => {
  return (
    <Section sectionClass={"corporate"}>
      <nav className="pageNav">
        <Link to="/">Главная &gt; </Link>
        <span className="pageNav__curr">"Корпоративные подарки"</span>
      </nav>
      <div className="corporate__wrapper">
        <div className="corporate__wrapper-block">
          <h1 className="corporate__title fz-24 fw-600">
            Корпоративные подарки
          </h1>
          <div className="corporate__text fz-14 fw-400">
            Брендированные пирожные макарон, которые поднимут аппетит ваших
            клиентов или порадуют коллектив
          </div>
        </div>
        <div className="corporate__wrapper-block">
          <img
            className="corporate__img"
            src={corporate}
            alt="example for corporate set"
          />
        </div>
        <div className="corporate__wrapper-block">
          <p className="corporate__subtext  fz-14 fw-400">
            Поднять мотивацию сотрудников? Увеличить лояльность клиентов или
            расположить их к себе перед большой сделкой? Мы приготовим наборы
            пирожных от 200 руб за шт, сделаем индивидуальный дизайн и нанесём
            ваши лого. Обычно готовим за 2-3 дня.{" "}
          </p>
          <button className="btn corporate__btn">
            Скачать весь каталог подарков
          </button>
        </div>
      </div>
    </Section>
  );
};

export default Corporate;
