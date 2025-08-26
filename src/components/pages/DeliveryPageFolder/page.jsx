import { Link } from "react-router-dom";
import "./deliveryPage.scss";
import { Helmet } from "react-helmet";

const DeliveryPage = () => {
  return (
    <>
      {" "}
      <Helmet>
        <meta name="Delivery" content="Delivery Page" />
        <title>Delivery Page</title>
      </Helmet>
      <section className="delivery">
        <div className="container">
          <div className="pageNav">
            <Link to={"/"}>Главная &gt;</Link>
            <div className="pageNav__curr">Доставка и оплата</div>
          </div>

          <div className="delivery__wrapper">
            <div className="delivery__wrapper-block delivery__wrapper-first">
              <div className="delivery__promo">
                <h1 className="delivery__title fz-24 fw-600">
                  Доставка и оплата
                </h1>
                <p className="delivery__subtitle fw-400 fz-14">
                  Для наших покупателей доступны 2 способа доставки: <br />
                  <span className="fw-600 fz-14">Курьерская доставка</span> по
                  Санкт-Петербургу в пределах КАД и{" "}
                  <span className="fw-600 fz-14">самовывоз</span>.
                </p>
              </div>

              <div className="delivery__images delivery__images--cycle">
                <img
                  src="img/delivery/cycle.png"
                  alt="cycle"
                  className="delivery__img delivery__img--cycle"
                />
                <img
                  src="img/delivery/macaron-pink.png"
                  alt="macaron-pink"
                  className="delivery__img delivery__img--wheel delivery__img--wheel-left"
                />
                <img
                  src="img/delivery/macaron-yellow.png"
                  alt="macaron-yellow"
                  className="delivery__img delivery__img--wheel delivery__img--wheel-right"
                />
              </div>

              <div className="delivery__section">
                <h3 className="delivery__section-title fz-18 fw-600">
                  Курьерская доставка:
                </h3>
                <div className="delivery__description">
                  <p>Курьеры работают каждый день с 11 до 21 часа.</p>
                  <p>
                    Доставка макарон осуществляется только по Санкт-Петербургу в
                    пределах кольцевой автомобильной дороги (КАД).
                    <span>Точная зона доставки.</span>
                  </p>
                  <p>
                    Если Вы готовы принять заказ в интервале с 12 до 17 часов
                  </p>
                  <p>
                    или с 17 до 21 часа, то доставка будет стоить 300 рублей.
                  </p>
                  <p>
                    При заказе от 3000 рублей доставка{" "}
                    <strong>БЕСПЛАТНАЯ</strong>.
                  </p>
                  <p>
                    При оформлении заказа до 15 часов возможна доставка в тот же
                    день в промежутке с 17 до 21 часа.
                  </p>
                  <p>Курьер предупредит Вас о своём прибытии за 30–40 минут.</p>
                </div>
              </div>
            </div>
            <div className="delivery__wrapper-block">
              <div className="delivery__images delivery__images--second">
                <div className="delivery__location">
                  <img
                    src="img/delivery/location.png"
                    alt="location"
                    className="delivery__img delivery__img--location"
                  />
                  <img
                    src="img/delivery/macaron-bitten.png"
                    alt="macaron-bitten"
                    className="delivery__img delivery__img--bitten"
                  />
                  <img
                    src="img/delivery/macaron-piece.png"
                    alt="macaron-piece"
                    className="delivery__img delivery__img--piece"
                  />
                </div>
              </div>

              <div className="delivery__text-block">
                <h3 className="delivery__section-title fz-18 fw-600">
                  Самовывоз
                </h3>
                <div className="delivery__description">
                  <p>
                    Вы можете сделать заказ и забрать его самостоятельно с
                    нашего производства по адресу: ул. Маршала Тухачевского 22,
                    БЦ "Сова".
                  </p>
                  <p>
                    Заказ необходимо сделать до 20 часов, чтобы забрать его на
                    следующий день в пункте самовывоза в любое удобное время в
                    промежутке с 13 до 22 часов.
                  </p>
                  <p>
                    Оплатить заказ банковской картой можно заранее при
                    оформлении. Непосредственно при получении банковской картой
                    расплатиться нельзя.
                  </p>
                </div>

                <h3 className="delivery__section-title fz-18 fw-600">Оплата</h3>

                <div className="delivery__description">
                  <p>
                    Вы можете оплатить заказ при получении наличными или заранее
                    оплатить заказ банковской картой.
                  </p>
                  <p>
                    Для этого укажите выбранный способ при оформлении заказа.
                    Оплата банковской картой удобна, если вы хотите отправить
                    десерты в подарок или не желаете возиться с наличными при
                    получении заказа.
                  </p>
                  <p>
                    Если у Вас нет карты российского банка, мы можем принять
                    оплату через платёжную систему PayPal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DeliveryPage;
