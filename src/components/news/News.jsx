import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./news.scss";
import useMacaronService from "@/services/MacaronService";
import setContent from "@/utils/setContent";

const News = () => {
  const { clearError, getData, process, setProcess } = useMacaronService();
  const [news, setNews] = useState([]);

  useEffect(() => {
    clearError();
    getData("news").then((news) => {
      setNews(news);
      setProcess("confirmed");
    });
  }, []);

  const renderNews = (news) =>
    news.map(({ img, alt, text, title, date, id }) => (
      <SwiperSlide key={id}>
        <Link to={`/news/${id}`} className="news__slide">
          <img src={img} alt={alt} className="news__slide-img" />
          <div className="news__slide-content">
            <div className="news__slide-date fw-400 fz-10">{date}</div>
            <h3 className="news__slide-title fw-600 fz-12">{title}</h3>
            <div className="news__slide-text fz-10 fw-400">{text}</div>
          </div>
        </Link>
      </SwiperSlide>
    ));

  return (
    <section className="news">
      <div className="container">
        <div className="news__title fw-600 fz-18">Новости</div>
        <div className="news__wrapper">
          <Swiper
            className="news__slider"
            loop={true}
            spaceBetween={10}
            modules={[Pagination]}
            pagination={{
              el: ".news__pagination",
              clickable: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 8,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1920: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
          >
            {setContent(process, renderNews, news)}
          </Swiper>
          <div className="swiper-pagination news__pagination"></div>
        </div>
        <Link to={"/catalog/news"} className="news__button fw-600 fz-12">
          Все новости
        </Link>
      </div>
    </section>
  );
};

export default News;
