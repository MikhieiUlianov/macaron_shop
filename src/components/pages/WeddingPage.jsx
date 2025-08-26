import Answers from "../Answers/Answers";
import FormIdeas from "../FormIdeas";
import WeddingPromo from "../WeedingPromo";
import WeddingSets from "../WeddingSets";
import { Helmet } from "react-helmet";

const WeedingPage = () => {
  return (
    <>
      <Helmet>
        <meta name="Weeding" content="Weeding Page" />
        <title>Weeding Page</title>
      </Helmet>
      <WeddingPromo />
      <WeddingSets />
      <FormIdeas />
      <Answers />
    </>
  );
};

export default WeedingPage;
