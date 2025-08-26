import CatalogDesserts from "../CatalogDesserts/page";
import Try from "../Try/page";

import { Helmet } from "react-helmet";
const CatalogDessertsPage = () => {
  return (
    <>
      {" "}
      <Helmet>
        <meta name="Desserts" content="Desserts Page" />
        <title>Desserts Page</title>
      </Helmet>
      <CatalogDesserts />
      <Try />
    </>
  );
};
export default CatalogDessertsPage;
