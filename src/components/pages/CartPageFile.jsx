import Cart from "../cart-folder/Cart/page";
import Try from "../Try/page";

import { Helmet } from "react-helmet";
const CartPage = () => {
  return (
    <>
      {" "}
      <Helmet>
        <meta name="Cart" content="Cart Page" />
        <title>Cart Page</title>
      </Helmet>
      <Cart />
      <Try />
    </>
  );
};

export default CartPage;
