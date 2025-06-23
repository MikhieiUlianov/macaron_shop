import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Section from "../Section";
import "./completedOrders.scss";
import { useGetCompletedOrdersQuery } from "@/api/apiSlice";
import QueryWrapper from "@/utils/QueryWrapper";

const CompletedOrders = () => {
  const {
    data = [],
    isLoading,
    isFetching,
    isError,
  } = useGetCompletedOrdersQuery();

  const renderItems = (items) => {
    return items.map(({ img, alt, title }, index) => (
      <SwiperSlide className="completedOrders__slide" key={index}>
        <img src={img} alt={alt} className="completedOrders__slide-img" />
        <h3 className="completedOrders__slide-title">{title}</h3>
      </SwiperSlide>
    ));
  };

  return (
    <Section sectionClass="completedOrders">
      <h2 className="completedOrders__title">Мы уже выполнили заказы</h2>
      <Swiper
        className="completedOrders__slider"
        slidesPerView="2"
        spaceBetween={20}
        loop={true}
        modules={[Pagination]}
        pagination={{
          el: ".completedOrders__pagination",
          clickable: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 4,
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
          {renderItems(data)}
        </QueryWrapper>
      </Swiper>
      <div className="completedOrders__pagination"></div>
    </Section>
  );
};

export default CompletedOrders;
