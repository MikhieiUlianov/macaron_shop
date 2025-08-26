import CardLayout from "@/utils/CardLayout/index.jsx";
import { useGetWeddingSetsQuery } from "@/api/apiSlice.jsx";
import QueryWrapper from "@/utils/QueryWrapper.jsx";
import Section from "../Section.jsx";
import styled from "styled-components";

const StyledWrapper = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    margin-top: 40px;
  }
`;

const WeddingSetsTitle = styled.h2`
  margin-top: 40px;
  @media (min-width: 1200px) {
    margin-top: 60px;
    font-size: 30px;
  }
`;

const WeddingSets = () => {
  const {
    data = [],
    isLoading,
    isError,
    isFetching,
  } = useGetWeddingSetsQuery();
  return (
    <Section sectionClass={"weddingSets"}>
      <WeddingSetsTitle className="fw-600 fz-24">
        Наборы для свадьбы
      </WeddingSetsTitle>
      <QueryWrapper
        isLoading={isLoading}
        isFetching={isFetching}
        isError={isError}
        data={data}
      >
        <StyledWrapper>{<CardLayout items={data} />}</StyledWrapper>
      </QueryWrapper>
    </Section>
  );
};

export default WeddingSets;
