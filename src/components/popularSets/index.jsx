import { useGetPopularSetsQuery } from "@/api/apiSlice";
import { Link } from "react-router-dom";
import QueryWrapper from "@/utils/QueryWrapper";
import CardLayout from "../../utils/CardLayout";

import "./popularSets.scss";

const PopularSets = ({ mode = "catalog" }) => {
  const limit = 4;
  const [offset, setOffset] = useState(0);
  const [popularSets, setPopularSets] = useState([]);
  const [activeFilters, setActiveFilters] = useState([]);
  const [catalogEnded, setCatalogEnded] = useState(false);

  const {
    data = [],
    isLoading,
    isFetching,
    isError,
  } = useGetPopularSetsQuery({ offset, limit });

  const filters = [
    "Набор на 9",
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
    if (!data || data.length === 0) {
      setCatalogEnded(true);
      return;
    }

    setPopularSets((prev) => [...prev, ...data]);

    if (data.length < limit) {
      setCatalogEnded(true);
    }
  }, [data]);

  const loadMore = () => {
    if (!isFetching && !catalogEnded) {
      setOffset((prev) => prev + limit);
    }
  };

  const handleFilters = (filter) => {
    setActiveFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  const filteredItems = useMemo(() => {
    if (activeFilters.length === 0) return popularSets;
    return popularSets.filter((item) =>
      activeFilters.some((filter) =>
        item.title.toLowerCase().includes(filter.toLowerCase())
      )
    );
  }, [popularSets, activeFilters]);

  return (
    <section className="popularSets">
      <div className="container">
        {mode === "catalog" ? (
          <>
            <div className="pageNav">
              <Link to="/">Главная &gt; </Link>
              <Link to="/catalog">Каталог &gt;</Link>
              <div className="pageNav__curr">Готовые наборы</div>
            </div>
            <h2 className="popularSets__title fw-600 fz-18">Готовые наборы</h2>
            <ul className="popularSets__filters">
              {filters.map((filter) => (
                <li
                  key={filter}
                  className={`popularSets__filters-filter fw-400 fz-12 ${
                    activeFilters.includes(filter) ? "active" : ""
                  }`}
                  onClick={() => handleFilters(filter)}
                >
                  {filter}
                </li>
              ))}
            </ul>
          </>
        ) : (
          <h2 className="popularSets__title fw-600 fz-18">Популярные наборы</h2>
        )}

        <div className="popularSets__wrapper">
          <QueryWrapper
            isLoading={isLoading}
            isError={isError}
            isFetching={isFetching}
            data={popularSets}
          >
            {<CardLayout items={filteredItems} />}
          </QueryWrapper>
        </div>

        {mode === "catalog" && !catalogEnded && (
          <button
            className="popularSets__btn btn-catalog fw-600 fz-12"
            onClick={loadMore}
            disabled={isFetching}
          >
            {isFetching ? "Загрузка..." : "Загрузить ещё"}
          </button>
        )}

        {mode === "preview" && (
          <Link
            to="/catalog/popular-sets"
            className="popularSets__btn btn-catalog fw-600 fz-12"
          >
            Все праздничные наборы
          </Link>
        )}
      </div>
    </section>
  );
};

export default PopularSets;
