import Form from "../form-folder/Form/page";
import OurSuggestions from "../OurSuggestions/page";
import Recommendation from "../Recommendation/page";
import Wholesale from "../Wholesale/page";
import { Helmet } from "react-helmet";

const SuggestionsPage = () => {
  return (
    <>
      <Helmet>
        <meta name="Suggestions" content="Suggestions Page" />
        <title>Suggestions Page</title>
      </Helmet>
      <Wholesale />
      <OurSuggestions />
      <Form />
      <Recommendation />
    </>
  );
};

export default SuggestionsPage;
