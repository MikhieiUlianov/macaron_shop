import "@/components/news/news.scss";
import useMacaronService from "@/services/MacaronService";
import setContent from "@/utils/setContent";
import "./newsPage.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const NewsPage = () => {
  const { clearError, getData, process, setProcess } = useMacaronService();
  const [news, setNews] = useState([]);
  const [activeFilters, setActiveFilters] = useState([]);
  const filters = [
    "Все новости",
    "Обновления ассортимента",
    "Акции",
    "Конкурсы",
    "подарок на 8 марта",
    "весна",
  ];
  useEffect(() => {
    getData("news").then((news) => {
      setNews(news);
      setProcess("confirmed");
    });
  }, [getData, clearError]);

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
      return news;
    }
  };
  const renderNews = (news) => {
    return news.map(({ img, alt, text, title, date, id }) => (
      <Link to={`/news/${id}`} className="newsPage__item" key={id}>
        <img src={img} alt={alt} className="newsPage__item-img" />
        <div className="newsPage__item-content">
          <div className="newsPage__item-date fw-400 fz-10">{date}</div>
          <h3 className="newsPage__item-title fw-600 fz-12">{title}</h3>
          <div className="newsPage__item-text fz-10 fw-400">{text}</div>
        </div>
      </Link>
    ));
  };

  return (
    <div className="newsPage">
      <div className="container">
        <div className="pageNav">
          <Link to={"/"}>Главная &gt; </Link>
          <div className="pageNav__curr "> Новости</div>
        </div>
        <h1 className="newsPage__title fz-18 fw-600">Новости</h1>
        <ul className="newsPage__filters">
          {filters.map((filter) => {
            return (
              <li
                key={filter}
                className={`newsPage__filters-filter fw-400 fz-12 ${
                  activeFilters.includes(filter) ? "active" : ""
                }`}
                onClick={() => handleFilters(filter)}
              >
                {filter}
              </li>
            );
          })}
        </ul>
        <div className="newsPage__wrapper">
          {setContent(process, renderNews, filteredItems(news))}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
