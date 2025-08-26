import Cart from "../cart-folder/Cart/cart";
import Try from "../Try";

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
