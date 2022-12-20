import useSWR from "swr";
import { CLIENT_API } from "../../../../config/axios/api-client";
import { MovieData } from "./types";

const useGetMovieById = (movieId?: string) => {
  const url = `/movies/${movieId || ""}`;

  const { mutate, isValidating, data, error } = useSWR(
    movieId ? url : null,
    (url) => CLIENT_API.get<MovieData>(url)
  );

  
  const movie: MovieData | undefined = data?.data;

  return {
    getmovie: mutate,
    isLoading: isValidating,
    movie,
    error,
  };
};

export { useGetMovieById };
