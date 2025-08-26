import Form from "@/components/Form";
import useMacaronService from "@/services/MacaronService";
import setContent from "@/utils/setContent";
import "./newsNewsPage.scss";

import ReusableThumbsSlider from "@/utils/ReusableThumbsSlider";
const NewsNewsPage = () => {
  const { clearError, process, setProcess, getPageData } = useMacaronService();
  const [pageData, setPageData] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    clearError();
    getPageData("spring-holiday-2023").then((data) => {
      setPageData(data);
      setProcess("confirmed");
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            <ReusableThumbsSlider
              thumbs={thumbs}
              mainSliderClass="newsNewsPage__main-slider"
              thumbsSliderClass="newsNewsPage__thumbs-slider"
              paginationClass="newsNewsPage__pagination"
              enablePagination={true}
              thumbsSwiper={thumbsSwiper}
              setThumbsSwiper={setThumbsSwiper}
              imageKeys={{ img: "thumbImg", alt: "thumbAlt" }} // используем ключи из данных
            />
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
