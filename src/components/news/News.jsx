import initializeSwiper from "@/utils/initializeSlider";
import "./news.scss";
import useMacaronService from "@/services/MacaronService";
import setContent from "@/utils/setContent";

const News = () => {
  const { clearError, getData, process, setProcess } = useMacaronService();
  const [news, setNews] = useState([]);

  const sliderRef = useRef(null);
  const paginationRef = useRef(null);
  const [swiperInitialized, setSwiperInitialized] = useState(false);
  useEffect(() => {
    getData("news").then((news) => {
      setNews(news);
      setProcess("confirmed");
    });
  }, [getData, clearError, process]);

  useEffect(() => {
    if (
      news.length > 0 &&
      sliderRef.current &&
      paginationRef.current &&
      !swiperInitialized
    ) {
      initializeSwiper(".news__slider", ".news__pagination", {
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 2,
            spaceBetween: 8,
          },
          // when window width is >= 480px
          1200: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          // when window width is >= 640px
          1920: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        },
      });
      setSwiperInitialized(true);
    }
  }, [news, swiperInitialized]);

  const renderNews = (news) => {
    return news.map(({ img, alt, text, title, date }, index) => {
      return (
        <div className="swiper-slide news__slide" key={index}>
          <img src={img} alt={alt} className="news__slide-img" />
          <div className="news__slide-content">
            <div className="news__slide-date fw-400 fz-10">{date}</div>
            <h3 className="news__slide-title fw-600 fz-12">{title}</h3>
            <div className="news__slide-text fz-10 fw-400">{text}</div>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="news">
      <div className="container">
        <div className="news__title fw-600 fz-18">Новости</div>
        <div className="news__wrapper">
          <div className="swiper news__slider" ref={sliderRef}>
            <div className="swiper-wrapper">
              {setContent(process, renderNews, news)}
            </div>
          </div>
          <div
            className="swiper-pagination news__pagination"
            ref={paginationRef}
          ></div>
        </div>
        <Link to={"/catalog/news"} className="news__button fw-600 fz-12">
          Все новости
        </Link>
      </div>
    </div>
  );
};

export default News;
