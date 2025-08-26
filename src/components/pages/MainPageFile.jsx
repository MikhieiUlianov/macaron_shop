/* import Promo from "../Promo"; */
import Promo from "../Promo/page";
import PagesLinks from "../PagesLinks/page";
import Promotion from "../Promotion/page";
import Holidays from "../Holidays/page";
import PopularSets from "@/components/PopularSets/page";
import News from "../News/page";
import Steps from "../Steps/page";

import { Helmet } from "react-helmet";
const MainPage = () => {
  return (
    <>
      {" "}
      <Helmet>
        <meta name="Main" content="Main Page" />
        <title>Main Page</title>
      </Helmet>
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
