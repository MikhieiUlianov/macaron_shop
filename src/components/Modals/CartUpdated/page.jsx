import Modal from "../page";
import { toggleModal } from "../modalsSlice";

import "./cartUpdated.scss";
const CartUpdated = () => {
  const dispatch = useDispatch();

  const { cartUpdated, cartUpdatedTitle } = useSelector(
    (state) => state.modals
  );
  return (
    <Modal
      active={cartUpdated}
      onClose={() =>
        dispatch(toggleModal({ modal: "cartUpdated", value: false }))
      }
    >
      <button
        className="cartUpdated__close"
        aria-label="Закрыть модалку"
        onClick={() =>
          dispatch(toggleModal({ modal: "cartUpdated", value: false }))
        }
      >
        ×
      </button>
      <h2 className="cartUpdated__title">Товар добавлен в корзину</h2>
      <p className="cartUpdated__text">
        Набор “{cartUpdatedTitle}” добавлен в корзину.
      </p>
      <div className="cartUpdated__buttons">
        <Link
          to={"/cart"}
          className="cartUpdated__button cartUpdated__button--primary"
          onClick={() =>
            dispatch(toggleModal({ modal: "cartUpdated", value: false }))
          }
        >
          Оформить заказ
        </Link>
        <button
          onClick={() =>
            dispatch(toggleModal({ modal: "cartUpdated", value: false }))
          }
          className="cartUpdated__button cartUpdated__button--secondary"
        >
          Продолжить покупки
        </button>
      </div>
    </Modal>
  );
};

export default CartUpdated;
