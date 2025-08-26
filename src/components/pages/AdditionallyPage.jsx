import { useGetAdditionallyQuery } from "@/api/apiSlice";
import PageLayout from "./PageLayout.jsx/page.jsx";
import {
  onAdd,
  onQuantityDecrease,
  getTotalSelected,
  onRemoveItem,
} from "@/components/Assemble/assembleSlice";
import styled from "styled-components";

import { Helmet } from "react-helmet";

const AdditionallyPage = () => {
  const StyledH1 = styled.h1`
    margin-top: 17px;
    @media (min-width: 1200px) {
      margin-top: 24px;
      font-size: 30px;
    }
  `;

  return (
    <>
      <Helmet>
        <meta name="Additionally" content="Additionally Page" />
        <title>Additionally Page</title>
      </Helmet>
      <nav className="pageNav">
        <Link to="/">Главная &gt; </Link>
        <Link to="/assemble-custom-set">Собрать набор &gt;</Link>
        <Link to="/assemble-custom-set/select-amount">
          Выбрать количество &gt;
        </Link>
        <Link to="/assemble-custom-set/select-amount/tastes">
          Выбрать вкусы &gt;
        </Link>
        <span className="pageNav__curr">{"Дополнительно"}</span>
      </nav>
      <StyledH1 className="additionallyPage__title fz-16 fw-600">
        Дополнительно
      </StyledH1>
      <PageLayout
        sectionClass="additionallyPage"
        queryName={useGetAdditionallyQuery}
        onRemoveItemFunc={onRemoveItem}
        onAddFunc={onAdd}
        onDecFunc={onQuantityDecrease}
        getTotalSelected={getTotalSelected}
        endpoint={"additionall"}
      />
    </>
  );
};

export default AdditionallyPage;
