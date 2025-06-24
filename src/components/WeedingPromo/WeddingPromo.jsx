import PromoWithButtons from "@/utils/PromoWithButtons/PromoWithButtons";

import weddingCake from "/img/wedding-cake.png";

const WeedingPromo = () => {
  return (
    <PromoWithButtons
      navTitle={"Предложение для свадеб"}
      img={weddingCake}
      extraImgClass={true}
      alt={"example for our weeding desserts"}
      title={"Свадебное предложение"}
      text={
        "Нежные пирожные макаронс с разными вкусами для украшения вашего свадебного торжества"
      }
      subtext={
        "Рыба-текст предложения Приятно, граждане, наблюдать, как действия представителей оппозиции, превозмогая сложившуюся непростую экономическую ситуацию, смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности. "
      }
      btn1={"Презентация"}
      btn2={"Прайс-лист"}
    />
  );
};

export default WeedingPromo;
