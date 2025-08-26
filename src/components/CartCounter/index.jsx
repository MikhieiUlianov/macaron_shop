import { useGetPromosQuery } from "@/api/apiSlice";
import Section from "../Section";
import "./cartCounter.scss";
import { updateTotalSale } from "../Cart/cartSlice";
const CartCounter = () => {
  const { totalPrice, totalSale, totalDelivery } = useSelector(
    (state) => state.cart
  );
  const { data = [], isLoading, isFetching } = useGetPromosQuery();
  const dispatch = useDispatch();

  const [enteredPromo, setEnteredPromo] = useState("");
  const [correctPromo, setCorrectPromo] = useState(false);

  const checkPromo = () => {
    const found = data.find(
      (promoObj) =>
        promoObj?.promo?.toLowerCase().trim() ===
        enteredPromo?.toLowerCase().trim()
    );

    if (found) {
      dispatch(updateTotalSale(Number(found.sale)));
      setCorrectPromo(true);
    } else {
      dispatch(updateTotalSale(0));
      setCorrectPromo(false);
    }
  };
  return (
    <Section sectionClass={"cartCounter"}>
      <h2 className="cartCounter__title">Итого</h2>
      <div className="cartCounter__row">
        <h4 className="cartCounter__row-title">Стоимость товаров</h4>
        <span></span> <div>{totalPrice} руб.</div>
      </div>
      <div className="cartCounter__row">
        <h4 className="cartCounter__row-title"> Скидка</h4>
        <span></span> <div>{totalSale} руб.</div>
      </div>
      <div className="cartCounter__row">
        <h4 className="cartCounter__row-title">Доставка</h4>
        <span></span>{" "}
        <div>{totalPrice > 2000 ? "бесплатно" : `${totalDelivery} руб.`}</div>
      </div>
      <div className="cartCounter__toPay">
        <div className="cartCounter__toPay-text">К оплате</div>{" "}
        <span>{totalPrice - totalSale + totalDelivery} руб.</span>
      </div>
      <div className="cartCounter__code">
        <div className="cartCounter__code-text">Промокод:</div>
        <div className="cartCounter__code-wrapper">
          <input
            type="text"
            placeholder="Введите промокод"
            value={enteredPromo}
            onChange={(e) => setEnteredPromo(e.target.value)}
          />
          <button
            disabled={isLoading || isFetching}
            className="cartCounter__code-apply"
            onClick={checkPromo}
          >
            Применить
          </button>
        </div>
      </div>
      {correctPromo && enteredPromo ? (
        <div id="promo__success">the promo is activated</div>
      ) : (
        enteredPromo && (
          <div id="promo__failure">the promo was not activated</div>
        )
      )}
      <a href="#form-delivery" className="cartCounter__btn">
        Оформить заказ
      </a>
    </Section>
  );
};

export default CartCounter;
