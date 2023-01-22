import useSWR from "swr";
import { CLIENT_API } from "../../../../config/axios/api-client";
import { GetTrendingMoviesInTheatres } from "./types";

const url = "/movies/in-theatres";

const useTrendingMoviesInTheatres = () => {
  const { mutate, isValidating, data, error } = useSWR(url, (url) =>
    CLIENT_API.get<GetTrendingMoviesInTheatres>(url)
  );

  const trendingMoviesInTheatres = data?.data;

  return {
    getTrengingMoviesInTheatres: mutate,
    isLoading: isValidating,
    trendingMoviesInTheatres,
    error,
  };
};

export { useTrendingMoviesInTheatres };
