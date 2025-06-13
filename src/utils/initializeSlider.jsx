import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const initializeSwiper = (slider, paginationEl, options = {}) => {
  const config = {
    slidesPerView: 1,
    centeredSlides: false,
    loop: true,
    spaceBetween: 0,
    modules: [Navigation, Pagination],
    ...options,
  };

  if (paginationEl) {
    config.pagination = {
      el: paginationEl,
      clickable: true,
    };
  }

  return new Swiper(slider, config);
};

export default initializeSwiper;
