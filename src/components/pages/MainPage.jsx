import Promo from "../Promo";
import PagesLinks from "../PagesLinks";
import Promotion from "../Promotion";
import Holidays from "../Holidays";
import PopularSets from "@/components/PopularSets";
import News from "../News";
import Steps from "../Steps";

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
