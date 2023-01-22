import useSWR from "swr";
import { CLIENT_API } from "../../../../config/axios/api-client";
import { GetTrendingMoviesTopRated } from "./types";

const url = "/movies/top-rated";

const useTrendingMoviesTopRated = () => {
  const { mutate, isValidating, data, error } = useSWR(url, (url) =>
    CLIENT_API.get<GetTrendingMoviesTopRated>(url)
  );

  const trendingMoviesTopRated = data?.data;

  return {
    getTrendingMoviesTopRated: mutate,
    isLoading: isValidating,
    trendingMoviesTopRated,
    error,
  };
};

export { useTrendingMoviesTopRated };
