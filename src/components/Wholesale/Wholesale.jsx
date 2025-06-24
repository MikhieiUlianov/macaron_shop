import PromoWithButtons from "@/utils/PromoWithButtons/PromoWithButtons";
import wholesale from "/img/wholesale.jpeg";

const Wholesale = () => {
  return (
    <PromoWithButtons
      img={wholesale}
      alt={"photo from one of our stores"}
      title={"Поставки пирожных оптом"}
      text={
        "Мы готовы к сотрудничеству с юридическими лицами, кафе, ресторанами,отелями и т.д."
      }
      btn1={"Презентация"}
      btn2={"Прайс-лист"}
      navTitle={"Предложения для юридических лиц"}
      subtext={
        <ul className="wholesale__subtext fw-400 fz-14">
          Мы предлагаем: <br />
          <li> прямые поставки от производителя, всегда свежая продукция;</li>
          <li> ассортимент с высоким средним чеком и маржой;</li>
          <li>бесплатные акриловые шоубоксы для витрины;</li>
          <li>
            продукцию для дегустации или снижение цены для проведения
            промо-акций;
          </li>
          <li>гибкие условия сотрудничества и поставок.</li>
        </ul>
      }
    />
  );
};

export default Wholesale;
