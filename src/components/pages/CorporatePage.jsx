import Answers from "../Answers/Answers";
import CompletedOrders from "../CompletedOrders";
import Corporate from "../corporate";
import SomePresents from "../SomePresents";
import { Helmet } from "react-helmet";
const CorporatePage = () => {
  return (
    <>
      {" "}
      <Helmet>
        <meta name="CorporatePage" content="CorporatePage Page" />
        <title>CorporatePage Page</title>
      </Helmet>
      <Corporate />
      <SomePresents />
      <CompletedOrders />
      <Answers />
    </>
  );
};

export default CorporatePage;
