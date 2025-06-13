import { useEffect, useState } from "react";
import useMacaronService from "@/services/MacaronService";
import setContent from "@/utils/setContent";
import "./popularSets.scss";

const PopularSets = () => {
  const { clearError, getCatalog, process, setProcess } = useMacaronService();
  const [catalogEnded, setCatalogEnded] = useState(false);
  const [newItemsLoading, setNewItemsLoading] = useState(false);
  const [popularSets, setPopularSets] = useState([]);
  const [offset, setOffset] = useState(0); // start at 0
  const limit = 4;

  useEffect(() => {
    onRequest(0, true); // initial load with offset 0
  }, []);

  // offsetValue: what offset to request from API
  // initial: if true, reset loading states accordingly
  const onRequest = (offsetValue, initial = false) => {
    clearError();

    if (!initial) {
      setNewItemsLoading(true);
    } else {
      setNewItemsLoading(false);
    }

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

  // Render each item
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
        <h2 className="popularSets__title fw-600 fz-18">Популярные наборы</h2>
        <div className="popularSets__wrapper">
          {setContent(
            process,
            () => renderPopularSets(popularSets),
            newItemsLoading
          )}
        </div>
        {!catalogEnded && (
          <button
            className="popularSets__btn fw-600 fz-12"
            onClick={() => onRequest(offset)}
            disabled={newItemsLoading}
          >
            Все праздничные наборы
          </button>
        )}
      </div>
    </div>
  );
};

export default PopularSets;
