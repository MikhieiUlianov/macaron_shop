import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/pagination";

import Form from "@/components/form/Form";
import useMacaronService from "@/services/MacaronService";
import setContent from "@/utils/setContent";
import "./newsNewsPage.scss";

const NewsNewsPage = () => {
  const { newsPageId } = useParams();
  const { clearError, process, setProcess, getPageData } = useMacaronService();
  const [pageData, setPageData] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const paginationRef = useRef(null);

  useEffect(() => {
    clearError();
    getPageData(newsPageId).then((data) => {
      setPageData(data);
      setProcess("confirmed");
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newsPageId]);

  const renderNewsPage = useCallback(
    (item) => {
      if (!item) return null;

      const { title, text, subtitle, list, thumbs, filters } = item;

      return (
        <div className="newsNewsPage__item">
          <div className="newsNewsPage__item-block">
            <div className="newsNewsPage__item-filters">
              {filters?.map((filter, idx) => (
                <div className="fw-400 fz-14" key={idx}>
                  {filter}
                </div>
              ))}
            </div>
            <h1 className="newsNewsPage__item-title fz-18 fw-600">{title}</h1>
            <div className="newsNewsPage__item-text fw-400 fz-14">{text}</div>
            <h2 className="newsNewsPage__item-subtitle fw-600 fz-14">
              {subtitle}
            </h2>
            <ul className="newsNewsPage__item-list">
              <div className="fw-400 fz-14">Некоторые варианты подарков:</div>
              {list?.map((li, idx) => (
                <li key={idx} className="fw-400 fz-14">
                  <img src="/icons/check.svg" alt="check" />
                  {li}
                </li>
              ))}
            </ul>
          </div>

          <div className="newsNewsPage__item-block">
            <Swiper
              spaceBetween={10}
              loop={true}
              pagination={{
                el: paginationRef.current,
                clickable: true,
              }}
              modules={[Thumbs, Pagination]}
              thumbs={{ swiper: thumbsSwiper }}
              className="newsNewsPage__main-slider"
            >
              {thumbs.map(({ thumbImg, thumbAlt }, idx) => (
                <SwiperSlide key={`main-${idx}`}>
                  <img src={thumbImg} alt={thumbAlt} />
                </SwiperSlide>
              ))}
            </Swiper>

            <div ref={paginationRef} className="newsNewsPage__pagination" />

            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              watchSlidesProgress
              slideToClickedSlide
              modules={[Thumbs]}
              className="newsNewsPage__thumbs-slider"
            >
              {thumbs.map(({ thumbImg, thumbAlt }, idx) => (
                <SwiperSlide key={`thumb-${idx}`}>
                  <img src={thumbImg} alt={thumbAlt} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      );
    },
    [thumbsSwiper]
  );

  return (
    <section className="newsNewsPage">
      <div className="container">
        <nav className="pageNav">
          <Link to="/">Главная &gt; </Link>
          <Link to="/news">Новости &gt;</Link>
          <span className="pageNav__curr">
            {pageData?.title || "Загрузка..."}
          </span>
        </nav>
        {setContent(process, renderNewsPage, pageData)}
        <Form />
      </div>
    </section>
  );
};

export default NewsNewsPage;
