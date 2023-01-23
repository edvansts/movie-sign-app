import useSWR from "swr";
import { CLIENT_API } from "../../../../config/axios/api-client";
import { SearchAllData } from "./types";

const useGetSearchAll = (query: string, enabled = true) => {
  const url = `all/search`;

  const { mutate, isValidating, data, error } = useSWR(
    enabled ? [url, query] : null,
    ([url, query]) =>
      CLIENT_API.get<SearchAllData>(url, {
        params: { query },
      }),
    { revalidateOnMount: false }
  );

  const searchData: SearchAllData | undefined = data?.data;

  return {
    mutate,
    isLoading: isValidating,
    searchData,
    error,
  };
};

export { useGetSearchAll };
