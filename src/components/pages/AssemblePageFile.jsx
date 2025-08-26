import Assemble from "../Assemble/page";

import { Helmet } from "react-helmet";
const AssemblePage = () => {
  return (
    <>
      {" "}
      <Helmet>
        <meta name="Assemble" content="Assemble Page" />
        <title>Assemble Page</title>
      </Helmet>
      <Assemble />
    </>
  );
};

export default AssemblePage;
