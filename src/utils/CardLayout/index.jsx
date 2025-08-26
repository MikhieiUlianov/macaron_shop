import { Link } from "react-router-dom";
import shop from "/icons/shop.svg";
import "./cardLayout.scss";

const CardLayout = ({ items }) => {
  if (!items || items.length === 0) {
    return (
      <h2 id="notAvailible" className="fw-600 fz-20">
        Нет продуктов с таким фильтром :(
      </h2>
    );
  }

  return items.map(({ id, img, alt, price, text, title }) => (
    <div className="cardLayout__block" key={id}>
      <img src={img} alt={alt} className="cardLayout__block-img" />
      <div className="cardLayout__block-main">
        <h3 className="cardLayout__block-title fz-10 fw-600">{title}</h3>
        <div className="cardLayout__block-text fw-400 fz-10">{text}</div>
      </div>
      <div className="cardLayout__block-footer">
        <div className="cardLayout__block-price fz-14 fw-600">{price} руб.</div>
        <Link
          to={`/popularSets/c9e3a713-75d4-42bf-982a-3e0b4c0a321f`}
          className="cardLayout__block-footer-subBlock"
        >
          <img src={shop} alt="shop" className="cardLayout__block-bag" />
          <div className="fz-14 fw-600">В корзину</div>
        </Link>
      </div>
    </div>
  ));
};

export default CardLayout;
