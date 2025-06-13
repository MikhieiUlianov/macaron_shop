import Promo from "../promo/Promo";
import PagesLinks from "../pagesLinks/PagesLinks";
import Promotion from "../promotion/Promotion";
import Holidays from "../holidays/Holidays";
import PopularSets from "../popularSets/PopularSets";
import News from "../news/News";
import Steps from "../steps/Steps";

const MainPage = () => {
  return (
    <>
      <Promo />
      <PagesLinks />
      <Promotion />
      <Holidays />
      <PopularSets />
      <News />
      <Steps />
    </>
  );
};

export default MainPage;
