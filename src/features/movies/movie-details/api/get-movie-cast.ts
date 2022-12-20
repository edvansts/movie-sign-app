import useSWR from "swr";
import { CLIENT_API } from "../../../../config/axios/api-client";
import { MovieCastData } from "./types";

const useGetMovieCast = (movieId?: string) => {
  const url = `/movies/${movieId || ""}/cast`;

  const { mutate, isValidating, data, error } = useSWR(
    movieId ? url : null,
    (url) => CLIENT_API.get<MovieCastData>(url)
  );

  
  const cast: MovieCastData | undefined = data?.data;

  return {
    getMovieCast: mutate,
    isLoading: isValidating,
    cast,
    error,
  };
};

export { useGetMovieCast };
