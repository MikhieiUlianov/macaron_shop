import "./header.scss";
import Social from "../social/Social";
import {
  changeActiveCatalog,
  changeActiveTown,
  changeActiveCatalogAccordion,
  changeActiveTownAccordion,
  setActiveMenu,
} from "./headerSlice";

const Header = () => {
  const dispatch = useDispatch();

  const {
    activeTown,
    activeCatalog,
    activeTownAccordion,
    activeCatalogAccordion,
    towns,
  } = useSelector((state) => state.header);

  const catalog = [
    "Пирожные макарон",
    "Эклеры",
    "Вафельные трубочки",
    "Профитроли",
  ];

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
              <img
                className="header__info-block-img"
                src="/icons/place.svg"
                alt="place"
              />
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
              <img
                className="header__info-block-img"
                src="/icons/phone.svg"
                alt="phone"
              />
              <a
                href="tel:+1234567890"
                className="header__info-block-text fw-400 fz-14"
              >
                +1 (234) 567-890
              </a>
            </div>

            <div className="header__info-block header__shop">
              <img
                src="/icons/shop.svg"
                alt="shop"
                className="header__shop-img"
              />
              <div className="header__shop-circle"></div>
              <div className="header__shop-counter">1</div>
              <div className="header__shop-text fw-400 fz-14">
                В корзине (4 товара)
              </div>
            </div>
            <Social extraWrapperClass="header__info-block header__social" />
          </div>

          <img src="/icons/logo.svg" alt="logo" className="header__logo" />

          <div className="header__shop header__shop-mobile">
            <img
              src="/icons/shop.svg"
              alt="shop"
              className="header__shop-img"
            />
            <div className="header__shop-circle"></div>
            <div className="header__shop-counter">1</div>
          </div>
        </div>
      </div>

      <div className="header__subBlock">
        <div className="container">
          <div className="header__subBlock-block fw-400 fz-14">
            СЛАДКИЕ ДНИ
            <div className="header__subBlock-block-circle">
              <img src="/icons/sale.svg" alt="sale" />
            </div>
          </div>
          <div className="header__subBlock-block fw-400 fz-14">
            ПОДАРОЧНЫЕ НАБОРЫ <span className="icon-down-open"></span>
          </div>
          <div className="header__subBlock-block fw-400 fz-14">
            СОБРАТЬ НАБОР
          </div>
          <img
            src="/icons/logo.svg"
            alt="logo"
            className="header__subBlock-block-logo"
          />
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
