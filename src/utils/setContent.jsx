import Spinner from "@/components/spinner/Spinner";
import ErrorMessage from "@/components/errorMessage/ErrorMessage";
const setContent = (process, renderFunction, data) => {
  switch (process) {
    case "waiting":
      return <Spinner />;
    case "loading":
      return <Spinner />;
    case "confirmed":
      return renderFunction(data);
    case "error":
      return <ErrorMessage />;
  }
};

export default setContent;
