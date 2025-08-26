import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import { useGetFooterQuery } from "@/api/apiSlice";
import Social from "../Social";
import QueryWrapper from "@/utils/QueryWrapper";

import "./footer.scss";

const Footer = () => {
  const {
    data: blocks = [],
    isLoading,
    isError,
    isFetching,
  } = useGetFooterQuery();

  const steps = [
    {
      img: "/icons/cooking-love.svg",
      text: (
        <>
          Готовим вручную
          <br />и с любовью
        </>
      ),
    },
    {
      img: "/icons/delivery.svg",
      text: (
        <>
          Доставим
          <br />в день заказа
        </>
      ),
    },
    {
      img: "/icons/almond.svg",
      text: (
        <>
          100%
          <br />
          миндальная мука и натуральные
          <br />
          ингредиенты
        </>
      ),
    },
  ];

  const renderItems = (blocks) => {
    return blocks.map(({ title, links }) => (
      <div className="footer__info-block" key={uuidv4()}>
        <h3 className="footer__into-block-title fw-600 fz-16">
          {title.toUpperCase()}
        </h3>
        <ul className="footer__info-block-items">
          {links.map(({ to, label }) => (
            <Link to={to} className="fw-400 fz-14" key={uuidv4()}>
              {label}
            </Link>
          ))}
        </ul>
      </div>
    ));
  };

  return (
    <section className="footer">
      <div className="container">
        <div className="footer__wrapper pure-g">
          <div className="footer__block  pure-u-1 pure-u-xl-1-3">
            <ul className="footer__steps">
              {steps.map((step, index) => (
                <li className="footer__steps-step" key={index}>
                  <img
                    src={step.img}
                    alt={`Шаг ${index + 1}`}
                    className="footer__steps-step-img"
                  />
                  <div className="fz-12 fw-400">{step.text}</div>
                </li>
              ))}
            </ul>
            <div className="footer__subBlock">
              <div className="footer__cop fw-400 fz-10">
                © 2021 Макароншоп <br />
                ООО "Квантум", Санкт-Петербург, улица Маршала Тухачевского, 22
              </div>
              <div className="footer__time">
                <a
                  className="footer__time-item fw-600 fz-20"
                  href="tel:78123098288"
                >
                  +7 (812) 309 82 88
                </a>
                <div className="footer__time-item fw-400 fz-10">
                  с 9:00 до 21:00
                </div>
              </div>
            </div>
          </div>
          <div className="footer__block  pure-u-1 pure-u-xl-2-3">
            <div className="footer__info">
              <QueryWrapper
                isError={isError}
                isFetching={isFetching}
                isLoading={isLoading}
                data={blocks}
              >
                {renderItems(blocks)}
              </QueryWrapper>
            </div>
          </div>
        </div>

        <Social
          extraItemClass="footer__social-item"
          extraWrapperClass="footer__social"
        />
      </div>
    </section>
  );
};

export default Footer;
