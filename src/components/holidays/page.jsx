import { useEffect, useState } from "react";
import useMacaronService from "@/services/MacaronService";
import setContent from "@/utils/setContent";
import "./holidays.scss";

const Holidays = () => {
  const [holidays, setHolidays] = useState([]);
  const { clearError, getData, process, setProcess } = useMacaronService();

  useEffect(() => {
    clearError();
    getData("holidays").then((res) => {
      setHolidays(res);
      setProcess("confirmed");
    });
  }, []);

  const renderHolidays = (arr) => {
    return arr.map(({ img, text, alt }, index) => (
      <div className="holidays__block" key={index}>
        <img src={img} alt={alt} className="holidays__block-img" />
        <div className="holidays__block-text fw-600 fz-12">
          {text.split(/<br\s*\/?>/i).map((line, idx) => (
            <span key={idx}>
              {line}
              {idx < text.split(/<br\s*\/?>/i).length - 1 && <br />}
            </span>
          ))}
        </div>
      </div>
    ));
  };

  return (
    <section className="holidays">
      <div className="container">
        <h1 className="holidays__title fz-18 fw-600">Ближайшие праздники</h1>
        <div className="holidays__wrapper">
          {setContent(process, renderHolidays, holidays)}
        </div>
      </div>
    </section>
  );
};

export default Holidays;
