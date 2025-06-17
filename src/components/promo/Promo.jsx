import yellow from "/img/spots/spots-yellow.png";
import green from "/img/spots/spots-green.png";
import pink from "/img/spots/spots-pink.png";
import blue from "/img/spots/spots-blue.png";
import orange from "/img/spots/spots-orange.png";
import heart from "/img/promo-heart.png";
import "./promo.scss";

const Promo = () => {
  return (
    <section className="promo">
      <div className="container">
        <div className="promo__wrapper">
          <img
            className="promo__spots promo__spots-yellow"
            src={yellow}
            alt="spot-yellow"
          />
          <img
            className="promo__spots promo__spots-green"
            src={green}
            alt="spot-green"
          />
          <img
            className="promo__spots promo__spots-pink"
            src={pink}
            alt="spot-pink"
          />
          <img
            className="promo__spots promo__spots-blue"
            src={blue}
            alt="spot-blue"
          />
          <img
            className="promo__spots promo__spots-orange"
            src={orange}
            alt="spot-orange"
          />
          <div className="promo__wrapper-block">
            <h1 className="promo__title fw-600 fz-22">
              <span className="promo__title-main">macaronshop</span>
              <span className="promo__title-subTitle fw-600 fz-16">
                <span className="promo__title-divider"></span>
                since 2013
                <span className="promo__title-divider"></span>
              </span>
            </h1>
            <h2 className="promo__subTitle fw-600 fz-24">Настоящая любовь</h2>
            <div className="promo__text fw-400 fz-14">
              Пирожные макарон и другие десерты <br />
              из натуральных ингредиентов, приготовленные с любовью
            </div>
          </div>
          <div className="promo__wrapper-block">
            <img src={heart} alt="heart" className="promo__img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;
