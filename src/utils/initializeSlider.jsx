import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Thumbs } from "swiper/modules";
import "swiper/css/pagination";
const initializeSwiper = (slider, paginationEl, options = {}) => {
  const config = {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 0,
    modules: [Navigation, Pagination, Thumbs],
    ...options,
  };

  if (paginationEl) {
    config.pagination = {
      el: paginationEl,
      clickable: true,
    };
  }

  if (options.thumbs?.swiper) {
    config.thumbs = {
      swiper: options.thumbs.swiper,
    };
  }

  return new Swiper(slider, config);
};

export default initializeSwiper;
