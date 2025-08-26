import CatalogDesserts from "../CatalogDesserts";
import Try from "../Try";

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
