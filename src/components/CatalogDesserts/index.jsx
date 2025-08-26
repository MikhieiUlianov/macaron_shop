import { useGetCatalogDessertsQuery } from "@/api/apiSlice";
import macarons from "/img/catalogDesserts/macarons-many.png";
import "./catalogDesserts.scss";
import QueryWrapper from "@/utils/QueryWrapper";

const CatalogDesserts = () => {
  const {
    data = [],
    isLoading,
    isFetching,
    isError,
  } = useGetCatalogDessertsQuery();

  const renderCatalog = (catalog) => {
    return catalog.map(({ img, alt, title, colorClass, link }) => {
      return (
        <Link
          to={link}
          className={`catalogDesserts__item ${colorClass}`}
          key={title}
        >
          <img src={img} alt={alt} className="catalogDesserts__item-img" />
          <h3 className="catalogDesserts__item-title fw-600 fz-16">{title}</h3>
        </Link>
      );
    });
  };
  return (
    <section className="catalogDesserts">
      <div className="container">
        <nav className="pageNav">
          <Link to={"/"}>Главная &gt; </Link>
          <div className="pageNav__curr ">Каталог десертов</div>
        </nav>
        <h1 className="catalogDesserts__title fw-600 fz-16">
          Каталог десертов
        </h1>
        <div className="catalogDesserts__promo">
          <img
            src={macarons}
            alt="macarons"
            className="catalogDesserts__promo-img"
          />
          <div className="catalogDesserts__promo-block">
            <h2 className="catalogDesserts__promo-title fz-16 fw-600">
              Пирожные макарон
            </h2>
            <div className="catalogDesserts__promo-text fw-400 fz-10">
              Самые классные, самые лучшие, свежие, воздушные, хрустящие
              макарушки. лучшее, что мы умеем делать.
            </div>
            <div className="catalogDesserts__promo-btns">
              <Link
                to={"/catalog/popular-sets"}
                className="catalogDesserts__promo-btn fz-12 fw-600"
              >
                Готовые наборы
              </Link>
              <Link
                to={"/assemble-custom-set/select-amount"}
                className="catalogDesserts__promo-btn fz-12 fw-600"
              >
                Собрать свой набор
              </Link>
            </div>
          </div>
        </div>
        <div className="catalogDesserts__items">
          <QueryWrapper
            isLoading={isLoading}
            isFetching={isFetching}
            isError={isError}
            data={data}
          >
            {renderCatalog(data)}
          </QueryWrapper>
        </div>
      </div>
    </section>
  );
};

export default CatalogDesserts;
