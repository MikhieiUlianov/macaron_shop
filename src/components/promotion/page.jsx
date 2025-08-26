import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import useMacaronService from "@/services/MacaronService";
import setContent from "@/utils/setContent";
import "./promotion.scss";

const Promotion = () => {
  const { clearError, process, setProcess, getData } = useMacaronService();
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    clearError();
    getData("promotionSlides").then((res) => {
      setSlides(res);
      setProcess("confirmed");
    });
  }, []);

  const renderSlides = (slides) =>
    slides.map(({ label, text, img, alt }, index) => (
      <SwiperSlide
        key={index}
        className={`promotion__slide ${
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
      </SwiperSlide>
    ));

  return (
    <section className="promotion">
      <div className="container">
        <div className="promotion__wrapper">
          <h2 className="promotion__title fw-600 fz-18">Акции</h2>
          <Swiper
            loop={true}
            spaceBetween={10}
            pagination={{
              el: ".promotion__slider-pagination",
              clickable: true,
            }}
            modules={[Pagination]}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              1920: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            className="promotion__slider"
          >
            {setContent(process, renderSlides, slides)}
          </Swiper>
          <div className="swiper-pagination promotion__slider-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default Promotion;
