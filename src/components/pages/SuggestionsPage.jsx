import Form from "../form-folder/Form";
import OurSuggestions from "../OurSuggestions";
import Recommendation from "../Recommendation";
import Wholesale from "../Wholesale";
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
