import { useQuery } from "react-query";
import { getAllProperties } from "../utils/api";

const useProperties = () => {
  const { data, isLoading, isError, refresh } = useQuery({
    queryKey: "allProperties",
    queryFn: getAllProperties,
    refetchOnWindowFocus: false,
  });
  return {
    data,
    isLoading,
    isError,
    refresh,
  };
};

export default useProperties;
