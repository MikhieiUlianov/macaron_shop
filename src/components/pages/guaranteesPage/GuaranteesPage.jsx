import setContent from "@/utils/setContent";
import "./guaranteesPage.scss";
import useMacaronService from "@/services/MacaronService";

const GuaranteesPage = () => {
  const [guarantees, setGuarantees] = useState([]);
  const { clearError, getData, process, setProcess } = useMacaronService();

  useEffect(() => {
    clearError();
    getData("guarantees").then((res) => {
      setGuarantees(res);
      setProcess("confirmed");
    });
  }, [getData, clearError]);
  const renderGuarantees = (guarantees) => {
    return guarantees.map(({ img, alt, text }) => {
      return (
        <div className="guarantees__block">
          <img src={img} alt={alt} className="guarantees__block-img" />
          <div className="guarantees__block-text fz-12 fw-600">
            {" "}
            100% <br />
            {text}
          </div>
        </div>
      );
    });
  };
  return (
    <div className="guarantees">
      <div className="container">
        <div className="pageNav">
          <Link to={"/"}>Главная > </Link>
          <div className="pageNav__curr "> Гарантии вкуса и качества</div>
        </div>
        <h1 className="guarantees__title fz-18 fw-600">
          Гарантии вкуса и качества
        </h1>
        <div className="guarantees__text fw-400 fz-14">
          При изготовлении пирожных мы используем только натуральные
          ингредиенты, избегая использования конвер
        </div>
        <div className="guarantees__wrapper">
          {setContent(process, renderGuarantees, guarantees)}
        </div>
      </div>
    </div>
  );
};

export default GuaranteesPage;
