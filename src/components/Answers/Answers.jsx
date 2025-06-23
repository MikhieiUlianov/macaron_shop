import { useGetAnswersQuery } from "@/api/apiSlice";
import Section from "../Section";
import "./answers.scss";
import QueryWrapper from "@/utils/QueryWrapper";

const Answers = () => {
  const { data = [], isLoading, isError, isFetching } = useGetAnswersQuery();

  const [activeBlocks, setActiveBlocks] = useState([]);

  const toggleBlock = (title) => {
    if (activeBlocks.includes(title)) {
      setActiveBlocks((prev) => prev.filter((t) => t !== title));
    } else {
      setActiveBlocks((prev) => [...prev, title]);
    }
  };

  const renderAnswers = (answers) => {
    return answers.map(({ title, text }, idx) => {
      return (
        <div
          key={idx}
          className={`answers__block ${
            activeBlocks.includes(title) ? "active" : ""
          }`}
        >
          <div
            className="answers__block-header"
            onClick={() => {
              toggleBlock(title);
            }}
          >
            {title}
          </div>
          <div className="answers__block-content">{text}</div>
        </div>
      );
    });
  };
  return (
    <Section sectionClass={"answers"}>
      <h2 className="answers__title fw-600 fz-18">Ответы на вопросы</h2>
      <div className="answers__wrapper">
        <QueryWrapper
          isLoading={isLoading}
          isError={isError}
          isFetching={isFetching}
          data={data}
        >
          {renderAnswers(data)}
        </QueryWrapper>
      </div>
    </Section>
  );
};

export default Answers;
