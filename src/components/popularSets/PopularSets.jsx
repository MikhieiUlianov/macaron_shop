import useMacaronService from "@/services/MacaronService";
import setContent from "@/utils/setContent";
import "./popularSets.scss";

const PopularSets = ({ mode = "catalog" }) => {
  const { clearError, getCatalog, process, setProcess } = useMacaronService();
  const [catalogEnded, setCatalogEnded] = useState(false);
  const [newItemsLoading, setNewItemsLoading] = useState(false);
  const [popularSets, setPopularSets] = useState([]);
  const [offset, setOffset] = useState(0);
  const [activeFilters, setActiveFilters] = useState([]);
  const limit = 4;

  const filters = [
    "Свадьба",
    "Девичник",
    "День рождения ",
    "8 марта",
    "23 февраля",
    "Новый год",
    "День учителя",
    "День тренера",
    "1 сентября",
    "Пасха",
    "Без печати",
  ];

  useEffect(() => {
    onRequest(0, true);
  }, []);

  const onRequest = (offsetValue, initial = false) => {
    clearError();
    if (!initial) setNewItemsLoading(true);
    setProcess("loading");

    getCatalog("popularSets", offsetValue, limit).then((newCatalog) => {
      if (newCatalog.length === 0) {
        setCatalogEnded(true);
        setNewItemsLoading(false);
        setProcess("confirmed");
        return;
      }

      setPopularSets((prev) =>
        initial ? [...newCatalog] : [...prev, ...newCatalog]
      );
      setOffset(offsetValue + limit);
      setCatalogEnded(newCatalog.length < limit);
      setNewItemsLoading(false);
      setProcess("confirmed");
    });
  };

  const handleFilters = (filter) => {
    if (activeFilters.includes(filter)) {
      setActiveFilters((prev) =>
        prev.filter(
          (item) => item.toLowerCase().trim() !== filter.toLowerCase().trim()
        )
      );
    } else {
      setActiveFilters((prev) => [...prev, filter]);
    }
  };

  const filteredItems = (items) => {
    if (activeFilters.length > 0) {
      return items.filter((item) =>
        activeFilters.some((filter) =>
          item.title.toLowerCase().includes(filter.toLowerCase())
        )
      );
    } else {
      return popularSets;
    }
  };

  const renderPopularSets = (items) => {
    return items.map(({ img, alt, price, text, title }, index) => (
      <div className="popularSets__block" key={index}>
        <img src={img} alt={alt} className="popularSets__block-img" />
        <div className="popularSets__block-main">
          <h3 className="popularSets__block-title fz-10 fw-600">{title}</h3>
          <div className="popularSets__block-text fw-400 fz-10">{text}</div>
        </div>
        <div className="popularSets__block-footer">
          <div className="popularSets__block-price fz-14 fw-600">{price}</div>
          <div className="popularSets__block-footer-subBlock">
            <img
              src="/icons/shop.svg"
              alt="shop"
              className="popularSets__block-bag"
            />
            <div className="fz-14 fw-600">В корзину</div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="popularSets">
      <div className="container">
        {mode === "catalog" ? (
          <>
            <div className="pageNav">
              <Link to={"/"}>Главная > </Link>
              <Link to={"/catalog"}>Каталог ></Link>
              <div className="pageNav__curr"> Готовые наборы</div>
            </div>
            <h2 className="popularSets__title fw-600 fz-18">Готовые наборы</h2>
            <ul className="popularSets__filters">
              {filters.map((filter) => {
                return (
                  <li
                    key={filter}
                    className={`popularSets__filters-filter fw-400 fz-12 ${
                      activeFilters.includes(filter) ? "active" : ""
                    }`}
                    onClick={() => handleFilters(filter)}
                  >
                    {filter}
                  </li>
                );
              })}
            </ul>
          </>
        ) : (
          <h2 className="popularSets__title fw-600 fz-18">Популярные наборы</h2>
        )}

        <div className="popularSets__wrapper">
          {setContent(
            process,
            renderPopularSets,
            filteredItems(popularSets),
            newItemsLoading
          )}
        </div>

        {mode === "catalog" && !catalogEnded && (
          <button
            className="popularSets__btn fw-600 fz-12"
            onClick={() => onRequest(offset)}
            disabled={newItemsLoading}
          >
            Загрузить ещё
          </button>
        )}

        {mode === "preview" && (
          <Link
            to="/catalog/popular-sets"
            className="popularSets__btn fw-600 fz-12"
          >
            Все праздничные наборы
          </Link>
        )}
      </div>
    </div>
  );
};

export default PopularSets;
