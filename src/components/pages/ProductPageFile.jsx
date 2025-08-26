import ProductInfo from "../ProductInfo/page";
import Tabs from "@/components/Tabs/page";
import Try from "../Try/page";

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
