import PopularSets from "../PopularSets/page";

import { Helmet } from "react-helmet";
const PopularSetsPage = () => {
  return (
    <>
      {" "}
      <Helmet>
        <meta name="Popular Sets" content="Popular Sets Page" />
        <title>Popular Sets Page</title>
      </Helmet>
      <PopularSets mode="catalog" />
    </>
  );
};
export default PopularSetsPage;
