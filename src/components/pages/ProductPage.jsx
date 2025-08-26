import ProductInfo from "@/components/ProductInfo";
import Tabs from "@/components/Tabs";
import Try from "../Try";

import { Helmet } from "react-helmet";
const ProductPage = () => {
  return (
    <>
      {" "}
      <Helmet>
        <meta name="Product" content="Product Page" />
        <title>Product Page</title>
      </Helmet>
      <ProductInfo />
      <Tabs />
      <Try />
    </>
  );
};

export default ProductPage;
