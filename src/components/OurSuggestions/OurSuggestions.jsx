import QueryWrapper from "@/utils/QueryWrapper";
import Section from "../Section";
import "./ourSuggestions.scss";
import { useGetOurSuggestionsQuery } from "@/api/apiSlice";

const OurSuggestions = () => {
  const {
    data = [],
    isLoading,
    isFetching,
    isError,
  } = useGetOurSuggestionsQuery();

  const renderOurSuggestions = (items) => {
    return items.map(({ img, alt, title }, idx) => {
      return (
        <div className="ourSuggestions__item" key={idx}>
          <img src={img} alt={alt} className="ourSuggestions__item-img" />
          <span className="ourSuggestions__item-circle"></span>
          <div className="ourSuggestions__item-title fz-12 fw-600">{title}</div>
        </div>
      );
    });
  };
  return (
    <Section sectionClass={"ourSuggestions"}>
      <h2 className="ourSuggestions__title fz-18 fw-600">
        Что мы можем вам предложить:
      </h2>
      <div className="ourSuggestions__wrapper">
        <QueryWrapper
          isLoading={isLoading}
          isError={isError}
          isFetching={isFetching}
          data={data}
        >
          {renderOurSuggestions(data)}
        </QueryWrapper>
      </div>
    </Section>
  );
};

export default OurSuggestions;
