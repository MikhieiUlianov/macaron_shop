import { useHttp } from "@/hooks/http.hook";
import siteData from "@/components/Data";
const useMacaronService = () => {
  const { request, clearError, process, setProcess } = useHttp();

  const postData = useCallback(
    (data) => {
      return request(`http://localhost:5000/requests`, "POST", data);
    },
    [request]
  );

  const getData = (endpoint) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(siteData[endpoint]), 500);
    });
  };

  const getCatalog = useCallback(
    async (endpoint, start = 0, offset = 6) => {
      const res = siteData[endpoint].slice(start, offset);
      return res;
    },
    [request]
  );

  const getPageData = (id) => {
    return new Promise((resolve) => {
      const item = siteData.newsNewsPage.find((page) => page.id === id);
      setTimeout(() => resolve(item), 500);
    });
  };
  return {
    process,
    setProcess,
    getData,
    postData,
    getCatalog,
    getPageData,
    clearError,
  };
};

export default useMacaronService;
