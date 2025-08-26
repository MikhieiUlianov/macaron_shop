import place from "/icons/place.svg";
import phone from "/icons/phone.svg";
import shop from "/icons/shop.svg";
import sale from "/icons/sale.svg";
import logo from "/icons/logo.svg";
import { Link } from "react-router-dom";

import "./header.scss";
import Social from "../Social";
import {
  changeActiveCatalog,
  changeActiveTown,
  changeActiveCatalogAccordion,
  changeActiveTownAccordion,
  setActiveMenu,
} from "./headerSlice";

const Header = () => {
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state.cart);

  const {
    activeTown,
    activeTownAccordion,
    activeCatalogAccordion,
    towns,
    catalog,
  } = useSelector((state) => state.header);

  return (
    <section className="header">
      <div className="header__block">
        <div className="container">
          <div
            className="header__menu"
            onClick={() => dispatch(setActiveMenu(true))}
          >
            <span className="header__menu-line"></span>
            <span className="header__menu-line"></span>
            <span className="header__menu-line"></span>
          </div>
          <div className="header__info">
            <div className="header__info-block fw-400 fz-14">
              Гарантия свежести
            </div>
            <div className="header__info-block fw-400 fz-14">
              Доставка и оплата
            </div>
            <div className="header__info-block fw-400 fz-14">
              Оптовые поставки
            </div>
            <div className="header__info-block fw-400 fz-14">Контакты</div>

            <div
              className={`header__info-block ${
                activeTownAccordion ? "active" : ""
              }`}
              onClick={() => dispatch(changeActiveTownAccordion())}
            >
              <img className="header__info-block-img" src={place} alt="place" />
              <div className="header__info-block-text fw-400 fz-14">
                {activeTown}
              </div>
              <span className="icon-down-open"></span>

              <div className="header__info-block-content">
                {towns.map((town) => (
                  <div
                    key={town}
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(changeActiveTown(town));
                    }}
                  >
                    {town}
                  </div>
                ))}
              </div>
            </div>

            <div className="header__info-block">
              <img className="header__info-block-img" src={phone} alt="phone" />
              <a
                href="tel:+1234567890"
                className="header__info-block-text fw-400 fz-14"
              >
                +1 (234) 567-890
              </a>
            </div>

            <Link to={"/cart"} className="header__info-block header__shop">
              <img src={shop} alt="shop" className="header__shop-img" />
              <div className="header__shop-circle"></div>
              <div className="header__shop-counter">{cart.length}</div>
              <div className="header__shop-text fw-400 fz-14">
                В корзине ({cart.length} товара)
              </div>
            </Link>
            <Social extraWrapperClass="header__info-block header__social" />
          </div>

          <img src={logo} alt="logo" className="header__logo" />

          <Link to={"/cart"} className="header__shop header__shop-mobile">
            <img src={shop} alt="shop" className="header__shop-img" />
            <div className="header__shop-circle"></div>
            <div className="header__shop-counter">{cart.length}</div>
          </Link>
        </div>
      </div>

      <div className="header__subBlock">
        <div className="container">
          <div className="header__subBlock-block fw-400 fz-14">
            СЛАДКИЕ ДНИ
            <div className="header__subBlock-block-circle">
              <img src={sale} alt="sale" />
            </div>
          </div>
          <div className="header__subBlock-block fw-400 fz-14">
            ПОДАРОЧНЫЕ НАБОРЫ <span className="icon-down-open"></span>
          </div>
          <div className="header__subBlock-block fw-400 fz-14">
            СОБРАТЬ НАБОР
          </div>
          <img src={logo} alt="logo" className="header__subBlock-block-logo" />
          <div className="header__subBlock-block fw-400 fz-14">
            СОЗДАТЬ ДИЗАЙН
          </div>
          <div className="header__subBlock-block">
            КОМПАНИЯМ <span className="icon-down-open"></span>
          </div>
          <div
            className={`header__subBlock-block fw-400 fz-14 ${
              activeCatalogAccordion ? "active" : ""
            }`}
            onClick={() => dispatch(changeActiveCatalogAccordion())}
          >
            ВЕСЬ КАТАЛОГ <span className="icon-down-open"></span>
            <ul className="header__subBlock-block-content">
              {catalog.map((cat) => (
                <li
                  key={cat}
                  onClick={(e) => {
                    e.stopPropagation();
                    dispatch(changeActiveCatalog(cat));
                  }}
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
