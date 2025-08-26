import { useDispatch, useSelector } from "react-redux";
import Social from "../Social/page";
import {
  setActiveMenu,
  changeActiveTown,
  changeActiveTownAccordion,
  changeActiveCatalog,
  changeActiveCatalogAccordion,
} from "../Header/headerSlice";
import "./menu.scss";

const Menu = () => {
  const {
    activeMenu,
    activeTown,
    activeCatalog,
    towns,
    catalog,
    activeTownAccordion,
    activeCatalogAccordion,
  } = useSelector((state) => state.header);
  const dispatch = useDispatch();

  const buttons = [
    { label: "сладкие дни" },
    { label: "подарочные наборы" },
    { label: "собрать набор", img: "/icons/sale.svg" },
    { label: "создать дизайн" },
    { label: "компаниям" },
  ];

  const subButtons = [
    {
      label: "гарантия свежести",
      link: "/guarantees",
    },
    {
      label: "доставка и оплата",
      link: "/delivery",
    },
    {
      label: "оптовые поставки",
      link: "/wholesale",
    },
    {
      label: "контакты",
      link: "/contacts",
    },
  ];
  return (
    <section className={`menu ${activeMenu ? "active" : ""}`}>
      <img
        src="/icons/close.svg"
        alt="close"
        className="menu__close"
        onClick={() => dispatch(setActiveMenu(false))}
      />

      <div
        className="menu__towns fz-14 fw-600"
        onClick={() => dispatch(changeActiveTownAccordion())}
      >
        {activeTown}
        <ul
          className={`menu__towns-list-content ${
            activeTownAccordion ? "active" : ""
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {towns.map((town) => (
            <li
              key={town}
              className="menu__towns-list-item"
              onClick={() => dispatch(changeActiveTown(town))}
            >
              {town}
            </li>
          ))}
        </ul>
      </div>

      <ul className="menu__wrapper">
        {buttons.map(({ label, img }) => (
          <li className="menu__wrapper-item fw-400 fz-14" key={label}>
            <a href="#">
              <div>{label.toUpperCase()}</div>
            </a>
            {img && (
              <div className="menu__wrapper-item-sale">
                <img src={img} alt="icon" />
              </div>
            )}
          </li>
        ))}
        <li className="menu__wrapper-item fw-400 fz-14">
          <div
            className="menu__wrapper-item-name"
            onClick={() => dispatch(changeActiveCatalogAccordion())}
          >
            {activeCatalog}
          </div>
          <ul
            className={`menu__wrapper-item-catalog ${
              activeCatalogAccordion ? "active" : ""
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {catalog.map((cat) => (
              <li key={cat} onClick={() => dispatch(changeActiveCatalog(cat))}>
                {cat}
              </li>
            ))}
          </ul>
        </li>
      </ul>

      <ul className="menu__subButtons">
        {subButtons.map(({ label, link }) => (
          <li className="menu__subButtons-button fw-400 fz-14" key={label}>
            <Link to={link}>{label}</Link>
          </li>
        ))}
      </ul>

      <div className="menu__tel">
        <img src="/icons/phone.svg" alt="phone" />
        <a href="tel:88123098288" className="fw-600 fz-14">
          8 812 309-82-88
        </a>
      </div>

      <Social extraWrapperClass="menu__social" />
    </section>
  );
};

export default Menu;
