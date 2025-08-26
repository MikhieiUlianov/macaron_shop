import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/pagination";

import QueryWrapper from "@/utils/QueryWrapper";
import Section from "../Section";
import { useGetTryQuery } from "@/api/apiSlice";
import CardLayout from "../../utils/CardLayout";

import shop from "/icons/shop.svg";
import "./try.scss";

import prev from "/icons/prev.svg";
import next from "/icons/next.svg";
const Try = () => {
  const { data = [], isLoading, isFetching, isError } = useGetTryQuery();

  const prevRef = useRef();
  const nextRef = useRef();
  const renderItems = (items) => {
    return items.map(
      ({ img, alt, title, text, price, prevPrice = null }, index) => (
        <SwiperSlide className="try__item" key={index}>
          <img src={img} alt={alt} className="try__item-img" />
          <h3 className="try__item-title fz-12 fw-600">{title}</h3>
          <div className="try__item-text fz-10 fw-400">
            {" "}
            {text.split(/<br\s*\/?>/i).map((line, idx) => (
              <span key={idx}>
                {line}
                {idx < text.split(/<br\s*\/?>/i).length - 1 && <br />}
              </span>
            ))}
          </div>
          <div className="try__item-footer">
            <div className="try__item-price-wrapper">
              {prevPrice && (
                <div
                  className="try__item-footer-price 
              try__item-footer-price--prev fz-14 fw-600"
                >
                  {prevPrice} руб
                </div>
              )}
              <div className="try__item-footer-price fz-14 fw-600">
                {price} руб
              </div>
            </div>

            <div className="try__item-footer-block">
              <img src={shop} alt="shop" className="try__item-footer-bag" />
              <div className="fz-14 fw-600">В корзину</div>
            </div>
          </div>
        </SwiperSlide>
      )
    );
  };

  return (
    <Section sectionClass="try">
      <h2 className="try__title fw-600 fz-18">
        Хотите попробовать
        <br />
        всё сразу?
      </h2>
      <h3 className="try__subtitle fz-12 fw-400">
        Тогда взгляните на наши комбо-наборы
      </h3>
      <div className="try__wrapper mobile">
        <QueryWrapper
          isLoading={isLoading}
          isFetching={isFetching}
          isError={isError}
          data={data}
        >
          <CardLayout items={data} />
        </QueryWrapper>
      </div>
      <div className="try__wrapper desktop">
        <QueryWrapper
          isLoading={isLoading}
          isFetching={isFetching}
          isError={isError}
          data={data}
        >
          <div ref={prevRef} className="swiper-button-prev try__prev">
            <img src={prev} alt={prev} />
          </div>
          <div ref={nextRef} className="swiper-button-next try__next">
            <img src={next} alt={next} />
          </div>
          <Swiper
            slidesPerView={4}
            loop={true}
            spaceBetween={30}
            modules={[Navigation]}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            navigation={{
              prev: prevRef.current,
              next: nextRef.current,
            }}
          >
            {renderItems(data)}
          </Swiper>
        </QueryWrapper>
      </div>
      <Link
        to={"/catalog/popular-sets"}
        className="try__btn btn-catalog fw-600 fz-12"
        disabled={isFetching}
      >
        {isFetching ? "Загрузка..." : "Все готовые наборы"}
      </Link>
    </Section>
  );
};

export default Try;
