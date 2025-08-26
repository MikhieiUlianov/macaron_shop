import img from "./not-availible.png";
import "@/sass/animations.scss";

const ErrorMessage = () => {
  return <img className="error-img" src={img} alt="not-availible" />;
};

export default ErrorMessage;
