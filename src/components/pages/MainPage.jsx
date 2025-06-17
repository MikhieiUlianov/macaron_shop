import Promo from "../Promo/Promo";
import PagesLinks from "../PagesLinks/PagesLinks";
import Promotion from "../Promotion/Promotion";
import Holidays from "../Holidays/Holidays";
import PopularSets from "@/components/PopularSets/PopularSets";
import News from "../News/News";
import Steps from "../Steps/Steps";

const MainPage = () => {
  return (
    <>
      <Promo />
      <PagesLinks />
      <Promotion />
      <Holidays />
      <PopularSets mode="preview" />
      <News />
      <Steps />
    </>
  );
};

export default MainPage;
