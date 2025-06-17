import useMacaronService from "@/services/MacaronService";
import "./steps.scss";
import setContent from "@/utils/setContent";

const Steps = () => {
  const { getData, process, setProcess, clearError } = useMacaronService();
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    getData("steps").then((res) => {
      setSteps(res);
      setProcess("confirmed");
    });
  }, []);

  const renderSteps = (steps) => {
    return steps.map(({ img, alt, title, text }, index) => {
      return (
        <div className="steps__step" key={index}>
          <img src={img} alt={alt} className="steps__step-img" />
          <div className="steps__step-title fw-600 fz-12">{title}</div>
          <div className="steps__step-text fw-400 fz-10">{text}</div>
        </div>
      );
    });
  };

  return (
    <section className="steps">
      <div className="container">
        <div className="steps__title fw-600 fz-18">
          Мы обо всём позаботились
        </div>
        <div className="steps__wrapper">
          {setContent(process, renderSteps, steps)}
        </div>
      </div>
    </section>
  );
};

export default Steps;
