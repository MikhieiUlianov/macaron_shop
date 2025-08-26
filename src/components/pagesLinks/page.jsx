import arrow from "/icons/arrow.svg";

import useMacaronService from "@/services/MacaronService";
import setContent from "@/utils/setContent";
import "./pagesLinks.scss";

const PagesLinks = () => {
  const [pagesLinks, setPagesLinks] = useState([]);

  const { clearError, getData, process, setProcess } = useMacaronService();

  useEffect(() => {
    clearError();
    getData("pagesLinks")
      .then((res) => setPagesLinks(res))
      .then(setProcess("confirmed"));
  }, []);

  const renderPagesLinks = (links) => {
    return links.map(({ link, img, alt, title, text, colorClass }, index) => {
      return (
        <li className={`pagesLinks__block ${colorClass}`} key={index}>
          <Link to={link}>
            <div className="pagesLinks__block-circle"></div>
            <img src={img} alt={alt} className="pagesLinks__block-img" />
            <div className="pagesLinks__block-subBlock">
              <div className="pagesLinks__block-subBlock-title  fw-600 fz-14">
                {title}
              </div>
              <img
                src={arrow}
                alt="arrow"
                className="pagesLinks__block-subBlock-arrow"
              />
            </div>
            <div className="pagesLinks__block-text fw-400 fz-16">
              {text.split(/<br\s*\/?>/i).map((line, idx) => (
                <span key={idx}>
                  {line}
                  {idx < text.split(/<br\s*\/?>/i).length - 1 && <br />}
                </span>
              ))}
            </div>
          </Link>
        </li>
      );
    });
  };

  return (
    <section className="pagesLinks">
      <div className="container">
        <ul className="pagesLinks__blocks">
          {setContent(process, renderPagesLinks, pagesLinks)}
        </ul>
      </div>
    </section>
  );
};

export default PagesLinks;
