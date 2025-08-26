import img from "./error.png";
import "@/sass/animations.scss";

const ErrorMessage = () => {
  return <img className="error-img" src={img} alt="Error" />;
};

export default ErrorMessage;
