import useSWR from "swr";
import { CLIENT_API } from "../../../../config/axios/api-client";
import { GetMoviesInTheatres } from "./types";

const url = "/movies/in-theatres";

const useGetMoviesInTheatres = () => {
  const { mutate, isValidating, data, error } = useSWR(url, (url) =>
    CLIENT_API.get<GetMoviesInTheatres>(url)
  );

  const moviesInTheatres = data?.data;

  return {
    getTrengingMoviesInTheatres: mutate,
    isLoading: isValidating,
    moviesInTheatres,
    error,
  };
};

export { useGetMoviesInTheatres };
