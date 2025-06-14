import Spinner from "@/components/spinner/Spinner";
import ErrorMessage from "@/components/errorMessage/ErrorMessage";
import NotAvailibleMessage from "@/components/notAvailibleMessage/NotAvailibleMessage";
const setContent = (process, renderFunction, data, newDataLoading = false) => {
  switch (process) {
    case "waiting":
      return <Spinner />;
    case "loading":
      return newDataLoading ? renderFunction(data) : <Spinner />;
    case "error":
      return <ErrorMessage />;
    case "confirmed":
      return data.length > 0 ? renderFunction(data) : <NotAvailibleMessage />;
    default:
      <Spinner />;
  }
};

export default setContent;
