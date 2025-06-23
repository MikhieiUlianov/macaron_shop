import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { useGetRecommendationQuery } from "@/api/apiSlice";
import QueryWrapper from "@/utils/QueryWrapper";

import Section from "../Section";
import "./recommendation.scss";

const Recommendation = () => {
  const {
    data = [],
    isLoading,
    isFetching,
    isError,
  } = useGetRecommendationQuery();

  const renderRecommendations = (items) => {
    return items.map(({ title, text, img, alt, name }) => {
      return (
        <SwiperSlide className="recommendation__item">
          <h3 className="recommendation__item-title">{title}</h3>
          <div className="recommendation__item-text">{text}</div>
          <div className="recommendation__item-footer">
            <div className="recommendation__item-name">{name}</div>
            <img src={img} alt={alt} className="recommendation__item-img" />
          </div>
        </SwiperSlide>
      );
    });
  };
  return (
    <Section sectionClass={"recommendation"}>
      <h2 className="recommendation__title fz-18 fw-600">Нас рекомендуют</h2>
      <Swiper
        className="recommendation__slider"
        slidesPerView="1"
        spaceBetween={20}
        loop={true}
        modules={[Pagination]}
        pagination={{
          el: ".recommendation__pagination",
          clickable: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <QueryWrapper
          isLoading={isLoading}
          isError={isError}
          isFetching={isFetching}
          data={data}
        >
          {renderRecommendations(data)}
        </QueryWrapper>
      </Swiper>
      <div className="recommendation__pagination"></div>
    </Section>
  );
};

export default Recommendation;
