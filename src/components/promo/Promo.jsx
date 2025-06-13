import "./promo.scss";

const Promo = () => {
  return (
    <div className="promo">
      <div className="container">
        <div className="promo__wrapper">
          <img
            className="promo__spots promo__spots-yellow"
            src="/img/spots/spots-yellow.png"
            alt="spot-yellow"
          />
          <img
            className="promo__spots promo__spots-green"
            src="/img/spots/spots-green.png"
            alt="spot-green"
          />
          <img
            className="promo__spots promo__spots-pink"
            src="/img/spots/spots-pink.png"
            alt="spot-pink"
          />
          <img
            className="promo__spots promo__spots-blue"
            src="/img/spots/spots-blue.png"
            alt="spot-blue"
          />
          <img
            className="promo__spots promo__spots-orange"
            src="/img/spots/spots-orange.png"
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
            <img
              src="/img/promo-heart.png"
              alt="heart"
              className="promo__img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promo;
