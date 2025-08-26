import Modal from "../page";
import "./customSet.scss";
import { toggleModal } from "../modalsSlice";
import { updateCart } from "@/components/cart-folder/Cart/cartSlice";
const CustomSet = () => {
  const dispatch = useDispatch();

  const { customSet } = useSelector((state) => state.modals);
  const { tastes, orderTitle, price, additionall, totalAdditionallPrice } =
    useSelector((state) => state.assemble);

  const handleTotalSum = () => {
    const sum = Number(totalAdditionallPrice) + Number(price);
    return sum;
  };

  const handleClick = () => {
    const id = Date.now();
    const product = {
      id,
      title: orderTitle,
      price: handleTotalSum(),
      quantity: 1,
      list: [
        ...tastes.map((item) => `${item.title} (${item.quantity})`),
        ...additionall.map((item) => `${item.title} (${item.quantity})`),
      ],
    };

    dispatch(updateCart(product));
    dispatch(toggleModal({ modal: "customSet", value: false }));
  };
  return (
    <Modal
      active={customSet}
      onClose={() =>
        dispatch(toggleModal({ modal: "customSet", value: false }))
      }
    >
      <h2 className="customSet__title fz-18 fw-600">Ваш выбор:</h2>
      <div className="customSet__wrapper">
        <h3 className="customSet__subtitle fz-14 fw-600">
          {orderTitle}
          <span className="fz-14 fw-600">{price} руб.</span>
        </h3>
        <ul className="customSet__list">
          {tastes.map(({ title, quantity }, index) => {
            return (
              <li
                key={title + index}
                className="customSet__list-item fz-12 fw-400"
              >
                {title} {quantity}
              </li>
            );
          })}
        </ul>
        {additionall.map(({ title, price, quantity, id }) => {
          return (
            <h3 className="customSet__subtitle fz-14 fw-600" key={id}>
              {title}
              <span className="fz-14 fw-600"> {price} руб.</span>
              <div>({quantity})</div>
            </h3>
          );
        })}
        <div className="customSet__finalPrice fz-14 fw-600">
          Итого: <span className="fz-14 fw-600">{handleTotalSum()} руб.</span>
        </div>
        <div className="customSet__btns">
          <Link
            to={"/cart"}
            id="blue"
            className="customSet__btns-btn fw-600 fz-12"
            onClick={() =>
              handleClick({
                data: {
                  additionall,
                  tastes,
                },
              })
            }
          >
            Добавить в корзину
          </Link>
          <Link
            onClick={() =>
              handleClick({
                data: {
                  additionall,
                  tastes,
                },
              })
            }
            to={"/cart#form-delivery"}
            className="customSet__btns-btn fw-600 fz-12"
          >
            Оформить сейчас
          </Link>
        </div>
      </div>
    </Modal>
  );
};

export default CustomSet;
