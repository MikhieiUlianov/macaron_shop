import QueryWrapper from "@/utils/QueryWrapper";
import Section from "../Section";
import { useGetSomePresentsQuery } from "@/api/apiSlice";

import "./somePresents.scss";

const SomePresents = () => {
  const {
    data = [],
    isLoading,
    isError,
    isFetching,
  } = useGetSomePresentsQuery();

  const renderPresents = (presents) => {
    return presents.map(({ img, alt, title, text, price }, idx) => {
      return (
        <div className="somePresents__card" key={idx}>
          <img src={img} alt={alt} className="somePresents__card-img" />
          <div className="somePresents__card-title">{title}</div>
          <div className="somePresents__card-text">{text}</div>
          <div className="somePresents__card-price">{price}</div>
        </div>
      );
    });
  };
  return (
    <Section>
      <h2 className="somePresents__title"></h2>
      <div className="somePresents__wrapper">
        <QueryWrapper
          isLoading={isLoading}
          isError={isError}
          isFetching={isFetching}
          data={data}
        >
          {renderPresents(data)}
        </QueryWrapper>
      </div>
      <div className="somePresents__btn btn fz-14 fw-600">Получить КП</div>
    </Section>
  );
};

export default SomePresents;
