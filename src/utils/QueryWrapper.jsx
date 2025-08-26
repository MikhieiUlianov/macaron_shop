import Spinner from "@/components/Spinner/page";
import ErrorMessage from "@/components/ErrorMessage/page";

const QueryWrapper = ({ isLoading, isError, data, children }) => {
  if (isLoading) return <Spinner />;
  if (isError) return <ErrorMessage />;
  if (!data || (Array.isArray(data) && data.length === 0)) return null;

  return children;
};

export default QueryWrapper;
