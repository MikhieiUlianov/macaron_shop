import Promo from "../Promo";
import PagesLinks from "../PagesLinks";
import Promotion from "../Promotion";
import Holidays from "../Holidays";
import PopularSets from "@/components/PopularSets";
import News from "../News";
import Steps from "../Steps";

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
