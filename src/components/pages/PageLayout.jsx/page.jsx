import "./pageLayout.scss";
import Section from "@/components/Section";
import close from "/icons/close-small.svg";
import QueryWrapper from "@/utils/QueryWrapper";
import { onAdd, onQuantityDecrease } from "@/components/Assemble/assembleSlice";
import { toggleModal } from "@/components/Modals/modalsSlice";
const PageLayout = ({
  sectionClass,
  queryName,
  onRemoveItemFunc,
  onAddFunc,
  onDecFunc,
  getTotalSelected,
  endpoint,
  additionallyPage,
}) => {
  const { data = [], isLoading, isError, isFetching } = queryName();
  const dispatch = useDispatch();
  const {
    [endpoint]: items,
    orderTitle,
    totalTastesSelected,
    totalAdditionallSelected,
    price,
  } = useSelector((state) => state.assemble);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const getItemQuantity = (id) => {
    const item = items.find((i) => i.id === id);
    return item ? item.quantity : 0;
  };

  useEffect(() => {
    dispatch(
      getTotalSelected({
        endpoint,
        key:
          endpoint === "tastes"
            ? "totalTastesSelected"
            : "totalAdditionallSelected",
      })
    );
  }, [items, dispatch, endpoint]);

  const totalSelected =
    endpoint === "tastes" ? totalTastesSelected : totalAdditionallSelected;
  const amount = Number(orderTitle.match(/\d+/)?.[0] || 0);

  const handleGoNext = () => {
    if (totalTastesSelected !== amount) {
      setError(`Выберите ровно ${amount} макаронов для продолжения.`);
    } else {
      setError("");
      navigate("/assemble-custom-set/select-amount/tastes/additionally");
    }
  };

  const renderData = (data) => {
    return data.map(({ img, alt, title, text, id, sale = null, price = 0 }) => {
      const itemQuantity = getItemQuantity(id);
      return (
        <div className="pageLayout__item" key={id}>
          <img
            src={img}
            alt={alt ? alt : "some plug"}
            className="pageLayout__item-img"
          />
          <h3 className="pageLayout__item-title">{title}</h3>
          {text && <div className="pageLayout__item-text">{text}</div>}

          <div
            className="pageLayout__item-footer"
            id={
              sectionClass === "additionallPage"
                ? "extraFooterClass"
                : undefined
            }
          >
            {sale && (
              <div className="pageLayout__item-footer-price-sale fw-600 fz-14">
                {sale} руб
              </div>
            )}
            <div id="extraWrapper">
              {endpoint === "additionall" ? (
                <div className="pageLayout__item-footer-price fw-600 fz-14">
                  {price} руб
                </div>
              ) : (
                ""
              )}
              <span
                onClick={() =>
                  dispatch(onQuantityDecrease({ id, endpoint, price }))
                }
              >
                −
              </span>
              <div>{itemQuantity}</div>
              <span
                onClick={() => dispatch(onAdd({ title, id, endpoint, price }))}
              >
                +
              </span>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <Section sectionClass={sectionClass}>
      <div className="pageLayout__mainWrapper">
        <div className="pageLayout__wrapper">
          <QueryWrapper
            isLoading={isLoading}
            isError={isError}
            isFetching={isFetching}
            data={data}
          >
            {renderData(data)}
          </QueryWrapper>
        </div>
        <div className="pageLayout__counter">
          {additionallyPage ? (
            <h2 className="pageLayout__counter-title fz-18 fw-600">
              {totalSelected} из {amount} шт <span> {price} руб.</span>
            </h2>
          ) : (
            <h2 className="pageLayout__counter-title fz-18 fw-600">
              {totalSelected}
            </h2>
          )}
          <ul className="pageLayout__counter-list">
            {items.map(({ title, quantity, id, price = 0 }) => {
              return (
                <div
                  className="pageLayout__counter-list-item fw-600 fz-14"
                  key={id}
                >
                  <div>{title}</div>

                  <div id="divider">
                    <div>
                      <span
                        onClick={() =>
                          dispatch(onDecFunc({ id, endpoint, price }))
                        }
                      >
                        -
                      </span>
                      <div>{quantity}</div>
                      <span
                        onClick={() =>
                          dispatch(onAddFunc({ id, title, endpoint, price }))
                        }
                      >
                        +
                      </span>
                    </div>
                    <img
                      className="pageLayout__counter-list-item-remove"
                      src={close}
                      alt="close icon"
                      onClick={() =>
                        dispatch(onRemoveItemFunc({ id, endpoint }))
                      }
                    />
                  </div>
                </div>
              );
            })}
          </ul>
          {sectionClass === "tastesPage" ? (
            <>
              <div className="pageLayout__counter-text fw-400 fz-14">
                Для продолжения количество макарон должно равняться 12 шт.
              </div>
              <div className="pageLayout__counter-btns">
                <Link
                  to={"/cart#form-delivery"}
                  className="pageLayout__counter-btns-btn fw-600 fz-14"
                >
                  Оформить заказ
                </Link>
                <button
                  onClick={handleGoNext}
                  id="assembleMore"
                  className="pageLayout__counter-btns-btn fw-600 fz-14"
                >
                  Собрать еще набор
                </button>
                {error && (
                  <div
                    className="pageLayout__counter-error fz-14"
                    style={{ color: "red", marginTop: "8px" }}
                  >
                    {error}
                  </div>
                )}
              </div>
            </>
          ) : (
            <button
              className="pageLayout__counter-btns-btn fw-600 fz-14"
              onClick={() =>
                dispatch(toggleModal({ modal: "customSet", value: true }))
              }
            >
              ГОТОВО
            </button>
          )}
        </div>
      </div>
    </Section>
  );
};

export default PageLayout;
