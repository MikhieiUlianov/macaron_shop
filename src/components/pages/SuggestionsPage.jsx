import Form from "../Form/Form";
import OurSuggestions from "../OurSuggestions/OurSuggestions";
import Recommendation from "../Recommendation/Recommendation";
import Wholesale from "../Wholesale/Wholesale";

const SuggestionsPage = () => {
  return (
    <>
      <Wholesale />
      <OurSuggestions />
      <Form />
      <Recommendation />
    </>
  );
};

export default SuggestionsPage;
