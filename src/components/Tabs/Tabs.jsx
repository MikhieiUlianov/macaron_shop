import Section from "../Section";
import { useGetProductInfoQuery } from "@/api/apiSlice";
import QueryWrapper from "@/utils/QueryWrapper";

import "./tabs.scss";
const Tabs = () => {
  const { productId } = useParams();
  const {
    data = {},
    isLoading,
    isFetching,
    isError,
  } = useGetProductInfoQuery(productId);

  const [activeTab, setActiveTab] = useState(null); // выберем активный после загрузки

  // Пришли данные — установим активный таб по умолчанию
  const tabs = data?.tabs || [];

  // Устанавливаем первый таб активным после загрузки
  useEffect(() => {
    if (!activeTab && tabs.length > 0) {
      setActiveTab(tabs[0].title);
    }
  }, [tabs, activeTab]);

  return (
    <QueryWrapper
      isLoading={isLoading}
      isError={isError}
      isFetching={isFetching}
      data={data}
    >
      <Section sectionClass="tabs">
        {/* Tab Buttons */}
        <div className="tabs__buttons">
          {tabs.map(({ title }) => (
            <button
              key={title}
              onClick={() => setActiveTab(title)}
              className={`fw-600 fz-14 tabs__buttons-btn ${
                activeTab === title ? "active" : ""
              }`}
            >
              {title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="tabs__content">
          {tabs.map(
            ({ title, text }, idx) =>
              activeTab === title && (
                <div key={title}>
                  <h3>{title}</h3>
                  <ul className="tabs__content-list">
                    <li key={idx} className="fz-400 fz-16">
                      {text.split(/<br\s*\/?>/i).map((line, idx) => (
                        <span key={idx}>
                          {line}
                          {idx < text.split(/<br\s*\/?>/i).length - 1 && <br />}
                        </span>
                      ))}
                    </li>
                  </ul>
                </div>
              )
          )}
        </div>
      </Section>
    </QueryWrapper>
  );
};

export default Tabs;
