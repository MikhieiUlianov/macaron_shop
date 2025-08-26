import styled from "styled-components";
import { useGetTastesQuery } from "@/api/apiSlice";
import PageLayout from "../PageLayout.jsx";
import {
  onAdd,
  onQuantityDecrease,
  getTotalSelected,
  onRemoveItem,
} from "@/components/Assemble/assembleSlice";

const StyledH1 = styled.h1`
  margin-top: 17px;
  @media (min-width: 1200px) {
    margin-top: 24px;
    font-size: 30px;
  }
`;

const TastesPage = () => {
  const dispatch = useDispatch();
  const { tastes } = useSelector((state) => state.assemble);

  return (
    <>
      <nav className="pageNav">
        <Link to="/">Главная &gt; </Link>
        <Link to="/news">Собрать набор &gt;</Link>
        <Link to="/assemble-custom-set/select-amount">
          Выбрать количество &gt;
        </Link>
        <span className="pageNav__curr">Выбрать количество</span>
      </nav>

      <StyledH1 className="tastesPage__title fw-600 fz-18">
        Выберите вкусы
      </StyledH1>

      <PageLayout
        sectionClass="tastesPage"
        queryName={useGetTastesQuery}
        onRemoveItemFunc={onRemoveItem}
        onAddFunc={onAdd}
        onDecFunc={onQuantityDecrease}
        getTotalSelected={getTotalSelected}
        endpoint={"tastes"}
      />
    </>
  );
};

export default TastesPage;
