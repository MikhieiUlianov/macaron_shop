import {
  removeProduct,
  increaseQuantity,
  decreaseQuantity,
  addProduct,
} from "./cartSlice";

import Section from "../Section";
import roundSet from "/img/popularSets/roundSet.jpeg";
import "./cart.scss";
import CartCounter from "../CartCounter/CartCounter";
import FormDelivery from "../FormDelivery/FormDelivery";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const renderCart = (cartItems) =>
    cartItems.map(
      ({ id, img, alt, title, list, price, sale, saleName, quantity }) => (
        <li className="cart__list-item" key={id}>
          <button
            className="cart__list-item-close"
            onClick={() => dispatch(removeProduct(id))}
            aria-label="Удалить товар"
          >
            ×
          </button>
          <div className="cart__list-item-wrapper">
            <div className="cart__list-item-wrapper-block">
              <img src={img} alt={alt} className="cart__list-item-img" />
              <div className="cart__list-item-counter">
                <span onClick={() => dispatch(decreaseQuantity(id))}>−</span>
                {quantity}
                <span onClick={() => dispatch(increaseQuantity(id))}>+</span>
              </div>
            </div>
            <div className="cart__list-item-wrapper-block">
              <div className="cart__list-item-wrapper-block-subblock">
                <h3 className="cart__list-item-title fw-600 fz-12">{title}</h3>
                <div className="cart__list-item-text fw-400 fz-10">
                  {list?.map((item, idx) => (
                    <div key={idx}>{item}</div>
                  ))}
                </div>
              </div>
              <div className="cart__list-item-price fz-14 fw-600">
                Цена: <span>{price} руб.</span>
              </div>
            </div>
          </div>
          {sale && saleName && (
            <div className="cart__list-item-sale fw-600 fz-10">
              {saleName}
              <div className="cart__list-item-sale-price fw-600 fz-14">
                Скидка: <span>{sale} руб.</span>
              </div>
            </div>
          )}
        </li>
      )
    );

  // The additional grocery item to add to cart on click
  const additionalItem = {
    id: "saff",
    img: roundSet,
    alt: "heart",
    title: "Набор эклеров",
    list: ["Трюфель", "Малина"],
    price: "450",
    sale: "150",
    saleName: "Скидка по акции: “Эклер в подарок”",
    quantity: 1,
  };

  // Render the additional item with buttons that dispatch addProduct or decreaseQuantity in cart
  const renderAdditionalItem = (item) => {
    const cartItem = cart.find((i) => i.id === item.id);

    return (
      <li className="cart__list-item" key={item.id}>
        <div className="cart__list-item-wrapper">
          <div className="cart__list-item-wrapper-block">
            <img
              src={item.img}
              alt={item.alt}
              className="cart__list-item-img"
            />
            <div className="cart__list-item-counter">
              <span
                onClick={() => {
                  if (cartItem && cartItem.quantity > 1) {
                    dispatch(decreaseQuantity(item.id));
                  } else if (cartItem && cartItem.quantity === 1) {
                    // Remove from cart if quantity reaches 0
                    dispatch(removeProduct(item.id));
                  }
                }}
                style={{ cursor: "pointer" }}
              >
                −
              </span>
              <span>{cartItem ? cartItem.quantity : 0}</span>
              <span
                onClick={() => dispatch(addProduct(item))}
                style={{ cursor: "pointer" }}
              >
                +
              </span>
            </div>
          </div>
          <div className="cart__list-item-wrapper-block">
            <div className="cart__list-item-wrapper-block-subblock">
              <h3 className="cart__list-item-title fw-600 fz-12">
                {item.title}
              </h3>
              <div className="cart__list-item-text fw-400 fz-10">
                {item.list.map((el, idx) => (
                  <div key={idx}>{el}</div>
                ))}
              </div>
            </div>
            <div className="cart__list-item-price fz-14 fw-600">
              Цена: <span>{item.price} руб.</span>
            </div>
          </div>
        </div>
        {item.sale && item.saleName && (
          <div className="cart__list-item-sale fw-600 fz-10">
            {item.saleName}
            <div className="cart__list-item-sale-price fw-600 fz-14">
              Скидка: <span>{item.sale} руб.</span>
            </div>
          </div>
        )}
      </li>
    );
  };

  return (
    <Section sectionClass="cart">
      <div className="pageNav">
        <a href="/">Главная &gt; </a>
        <div className="pageNav__curr">Корзина</div>
      </div>
      <div className="cart__promo">
        <h1 className="cart__promo-title fz-18 fw-600">Ваша корзина</h1>
        <div className="cart__promo-text fz-12 fw-400">
          {cart.length} товаров /{" "}
          {cart.reduce(
            (sum, item) => sum + Number(item.price) * item.quantity,
            0
          )}{" "}
          руб.
        </div>
      </div>
      <div className="cart__wrapper">
        <div className="cart__wrapper-block">
          <ul className="cart__list">{renderCart(cart)}</ul>

          <div className="cart__cheaper">
            <div className="cart__cheaper-promo">
              Вам также может понравиться:
            </div>
            <ul className="cart__cheaper-list">
              {renderAdditionalItem(additionalItem)}
            </ul>
          </div>
        </div>

        <CartCounter />
        <FormDelivery />
      </div>
    </Section>
  );
};

export default Cart;
