import Spinner from "@/components/Spinner/page";
import ErrorMessage from "@/components/ErrorMessage/page";
import NotAvailibleMessage from "@/components/NotAvailibleMessage/page";

const setContent = (process, renderFunction, data, newDataLoading = false) => {
  switch (process) {
    case "waiting":
      return <Spinner />;
    case "loading":
      return newDataLoading ? renderFunction(data) : <Spinner />;
    case "error":
      return <ErrorMessage />;
    case "confirmed":
      if (Array.isArray(data)) {
        return data.length > 0 ? renderFunction(data) : <NotAvailibleMessage />;
      } else {
        return data ? renderFunction(data) : <NotAvailibleMessage />;
      }
    default:
      return <Spinner />;
  }
};

export default setContent;
