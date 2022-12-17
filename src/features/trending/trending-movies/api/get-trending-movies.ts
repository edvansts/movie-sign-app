import useSWR from "swr";
import { CLIENT_API } from "../../../../config/axios/api-client";
import { GetTrendingMovies } from "./types";

const url = "/movies/trending";

const useTrendingMovies = () => {
  const { mutate, isValidating, data, error } = useSWR(url, (url) =>
    CLIENT_API.get<GetTrendingMovies>(url), 
  );

  const trendingMovies = data?.data || [];

  return {
    getTrendingMovies: mutate,
    isLoading: isValidating,
    trendingMovies,
    error,
  };
};

export { useTrendingMovies };
