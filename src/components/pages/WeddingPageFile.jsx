import Answers from "../Answers/Answers";
import FormIdeas from "../form-folder/FormIdeas/page";
import WeddingPromo from "../WeedingPromo/page";
import WeddingSets from "../WeddingSets/page";
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
