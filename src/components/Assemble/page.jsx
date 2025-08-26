import QueryWrapper from "@/utils/QueryWrapper";
import Section from "../Section";
import { useGetAssembleQuery } from "@/api/apiSlice";
import { onAmountSelected } from "./assembleSlice";

import "./assemble.scss";

const Assemble = () => {
  const { data = [], isLoading, isFetching, isError } = useGetAssembleQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const renderAssemble = (data) => {
    return data.map(({ img, alt, title, price, id }) => {
      return (
        <div
          key={id}
          className="assemble__item"
          onClick={(e) => {
            e.preventDefault();
            dispatch(onAmountSelected({ price, title }));
            navigate("/assemble-custom-set/select-amount/tastes");
          }}
        >
          <img src={img} alt={alt} className="assemble__item-img" />
          <h3 className="assemble__item-title fz-10 fw-600">{title}</h3>
          <div className="assemble__item-price fz-14 fw-600">{price} руб.</div>
        </div>
      );
    });
  };
  return (
    <Section sectionClass={"assemble"}>
      <nav className="pageNav">
        <Link to="/">Главная &gt; </Link>
        <Link to="/">Собрать набор &gt;</Link>
        <span className="pageNav__curr">{"Выбрать количество"}</span>
      </nav>
      <h1 className="assemble__title fz-18 fw-600">Выберите количество</h1>
      <div className="assemble__outer">
        <div className="assemble__wrapper">
          <QueryWrapper
            isLoading={isLoading}
            isError={isError}
            isFetching={isFetching}
            data={data}
          >
            {renderAssemble(data)}
          </QueryWrapper>
        </div>
      </div>
    </Section>
  );
};

export default Assemble;
