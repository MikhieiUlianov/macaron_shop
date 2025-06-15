import { useHttp } from "@/hooks/http.hook";
const useMacaronService = () => {
  const { request, clearError, process, setProcess } = useHttp();

  const postData = useCallback(
    (data) => {
      return request(`http://localhost:5000/requests`, "POST", data);
    },
    [request]
  );

  const getData = useCallback(
    async (url) => {
      const res = await request(`http://localhost:5000/${url}`);
      return res;
    },
    [request]
  );

  const getCatalog = useCallback(
    async (endpoint, start = 0, offset = 6) => {
      const res = await request(
        `http://localhost:5000/${endpoint}?_start=${start}&_limit=${offset}`
      );
      return res;
    },
    [request]
  );
  const getPageData = useCallback(
    async (id, folder) => {
      const res = await request(`http://localhost:5000/${folder}`);
      const item = res.find((i) => i.id === id);
      return item;
    },
    [request]
  );
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
