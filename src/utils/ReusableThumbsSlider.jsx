import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/pagination";

const ReusableThumbsSlider = ({
  thumbs = [],
  mainSliderClass = "",
  thumbsSliderClass = "",
  paginationClass = "",
  enablePagination = false,
  thumbsSwiper,
  setThumbsSwiper,
  imageKeys = { img: "img", alt: "alt" },
}) => {
  const paginationRef = useRef(null);
  const { img: imgKey, alt: altKey } = imageKeys;

  return (
    <>
      <Swiper
        spaceBetween={10}
        loop={true}
        pagination={
          enablePagination
            ? {
                el: paginationRef.current,
                clickable: true,
              }
            : false
        }
        modules={[Thumbs, Pagination]}
        thumbs={{ swiper: thumbsSwiper }}
        className={mainSliderClass}
      >
        {thumbs.map((thumb, idx) => (
          <SwiperSlide key={`main-${idx}`}>
            <img src={thumb[imgKey]} alt={thumb[altKey]} />
          </SwiperSlide>
        ))}
      </Swiper>

      {enablePagination && (
        <div ref={paginationRef} className={paginationClass} />
      )}

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        watchSlidesProgress
        slideToClickedSlide
        modules={[Thumbs]}
        className={thumbsSliderClass}
      >
        {thumbs.map((thumb, idx) => (
          <SwiperSlide key={`thumb-${idx}`}>
            <img src={thumb[imgKey]} alt={thumb[altKey]} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ReusableThumbsSlider;
