import { useState, useEffect, useMemo } from "react";
import { useGetPopularSetsQuery } from "@/api/apiSlice";
import { Link } from "react-router-dom";
import QueryWrapper from "@/utils/QueryWrapper";
import shop from "/icons/shop.svg";
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

  const renderPopularSets = (items) => {
    if (items.length <= 0) {
      return (
        <h2 id="notAvailible" className="fw-600 fz-20">
          Нет продуктов с таким фильтром :(
        </h2>
      );
    }
    return items.map(({ id, img, alt, price, text, title }) => (
      <div className="popularSets__block" key={id}>
        <img src={img} alt={alt} className="popularSets__block-img" />
        <div className="popularSets__block-main">
          <h3 className="popularSets__block-title fz-10 fw-600">{title}</h3>
          <div className="popularSets__block-text fw-400 fz-10">{text}</div>
        </div>
        <div className="popularSets__block-footer">
          <div className="popularSets__block-price fz-14 fw-600">{price}</div>
          <Link
            to={`/popularSets/${id}`}
            className="popularSets__block-footer-subBlock"
          >
            <img src={shop} alt="shop" className="popularSets__block-bag" />
            <div className="fz-14 fw-600">В корзину</div>
          </Link>
        </div>
      </div>
    ));
  };

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
            {renderPopularSets(filteredItems)}
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
