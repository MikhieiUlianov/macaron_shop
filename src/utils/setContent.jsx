import Spinner from "@/components/Spinner/Spinner";
import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";
import NotAvailibleMessage from "@/components/NotAvailibleMessage/NotAvailibleMessage";

const setContent = (process, renderFunction, data, newDataLoading = false) => {
  switch (process) {
    case "waiting":
      return <Spinner />;
    case "loading":
      return newDataLoading ? renderFunction(data) : <Spinner />;
    case "error":
      return <ErrorMessage />;
    case "confirmed":
      // Проверяем, массив ли data
      if (Array.isArray(data)) {
        return data.length > 0 ? renderFunction(data) : <NotAvailibleMessage />;
      } else {
        // Если data — объект, проверяем на существование
        return data ? renderFunction(data) : <NotAvailibleMessage />;
      }
    default:
      return <Spinner />;
  }
};

export default setContent;
