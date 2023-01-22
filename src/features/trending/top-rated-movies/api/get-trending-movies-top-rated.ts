import useSWR from "swr";
import { CLIENT_API } from "../../../../config/axios/api-client";
import { GetTopRatedMovies } from "./types";

const url = "/movies/top-rated";

const useGetTopRatedMovies = () => {
  const { mutate, isValidating, data, error } = useSWR(url, (url) =>
    CLIENT_API.get<GetTopRatedMovies>(url)
  );

  const topRatedMovies = data?.data;

  return {
    getTopRatedMovies: mutate,
    isLoading: isValidating,
    topRatedMovies,
    error,
  };
};

export { useGetTopRatedMovies };
