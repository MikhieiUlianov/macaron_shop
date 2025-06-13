import { useEffect, useRef, useState } from "react";
import useMacaronService from "@/services/MacaronService";
import setContent from "@/utils/setContent";
import initializeSwiper from "@/utils/initializeSlider";
import "./promotion.scss";

const Promotion = () => {
  const { clearError, process, setProcess, getData } = useMacaronService();
  const [slides, setSlides] = useState([]);
  const sliderRef = useRef(null);
  const paginationRef = useRef(null);
  const [swiperInitialized, setSwiperInitialized] = useState(false);

  useEffect(() => {
    clearError();
    getData("promotionSlides").then((res) => {
      setSlides(res);
      setProcess("confirmed");
    });
  }, []);

  useEffect(() => {
    if (
      slides.length > 0 &&
      sliderRef.current &&
      paginationRef.current &&
      !swiperInitialized
    ) {
      initializeSwiper(sliderRef.current, paginationRef.current, {
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: false,
        pagination: {
          el: paginationRef.current,
          clickable: true,
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
            centeredSlides: false,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 10,
            centeredSlides: false,
          },
          1920: {
            slidesPerView: 3,
            spaceBetween: 50,
            centeredSlides: false,
          },
        },
      });
      setSwiperInitialized(true);
    }
  }, [slides, swiperInitialized]);

  const renderSlides = (slides) => {
    return slides.map(({ label, text, img, alt }, index) => (
      <div
        key={index}
        className={`swiper-slide promotion__slide ${
          label === "бесплатная доставка" ? "blue" : ""
        }`}
      >
        <div className="promotion__slide-header">
          <div className="promotion__slide-label">{label.toUpperCase()}</div>
          <img src={img} alt={alt} className="promotion__slide-img" />
        </div>
        <div className="promotion__slide-footer">
          <div className="promotion__slide-text fw-600 fz-16">
            {text.split(/<br\s*\/?>/i).map((line, idx) => (
              <span key={idx}>
                {line}
                {idx < text.split(/<br\s*\/?>/i).length - 1 && <br />}
              </span>
            ))}
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="promotion">
      <div className="container">
        <h2 className="promotion__title fw-600 fz-18">Акции</h2>
        <div className="promotion__wrapper">
          <div className="swiper promotion__slider" ref={sliderRef}>
            <div className="swiper-wrapper">
              {setContent(process, renderSlides, slides)}
            </div>
          </div>
        </div>
        <div
          className="swiper-pagination promotion__slider-pagination"
          ref={paginationRef}
        ></div>
      </div>
    </div>
  );
};

export default Promotion;
