export const useHttp = () => {
  const [process, setProcess] = useState("waiting");

  const request = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      setProcess("loading");

      try {
        if (body) {
          body = JSON.stringify(body);
          headers["Content-Type"] = "application/json";
        }
        const response = await fetch(url, { body, method, headers });

        if (!response.ok) {
          throw new Error(`Could not fetch ${url}, status: ${response.status}`);
        }

        const data = await response.json();

        return data;
      } catch (e) {
        setProcess("error");
        throw e;
      }
    },
    []
  );

  const clearError = useCallback(() => {
    setProcess("loading");
  }, []);

  return { request, clearError, process, setProcess };
};
