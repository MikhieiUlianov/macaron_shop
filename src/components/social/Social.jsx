import { nanoid } from "nanoid";

import setContent from "@/utils/setContent";
import useMacaronService from "@/services/MacaronService";
import "./social.scss";
const Social = ({ extraItemClass = "", extraWrapperClass = "" }) => {
  const { clearError, getData, setProcess, process } = useMacaronService();
  const [social, setSocial] = useState([]);
  useEffect(() => {
    clearError();
    getData("social")
      .then((social) => setSocial(social))
      .then(() => setProcess("confirmed"));
  }, []);
  const renderSocial = (social) => {
    return social.map(({ href, className }) => {
      return (
        <li key={nanoid()} className={`social-list-item ${extraItemClass}`}>
          <a href={href}>
            <span className={`social-icon ${className}`}></span>
          </a>
        </li>
      );
    });
  };

  return (
    <ul className={`social-list ${extraWrapperClass}`}>
      {setContent(process, renderSocial, social)}
    </ul>
  );
};

export default Social;
