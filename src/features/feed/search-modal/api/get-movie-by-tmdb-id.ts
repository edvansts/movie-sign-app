import useSWR, { mutate } from "swr";
import { CLIENT_API } from "../../../../config/axios/api-client";
import { MovieData } from "../../../movies/movie-details/api/types";

const getMovieByTmdbId = async (tmdbId: number) => {
  return CLIENT_API.get<MovieData>(`movies/tmdb/${tmdbId}`).then((response) => {
    mutate(`movies/tmdb/${tmdbId}`, response.data);

    return response.data;
  });
};

const useGetMovieByTmdbId = (tmdbId: number) => {
  const url = `movies/tmdb/${tmdbId}`;

  const { mutate, isValidating, data, error } = useSWR(
    tmdbId ? url : null,
    ([url]) => CLIENT_API.get<MovieData>(url),
    { revalidateOnMount: false }
  );

  const movie: MovieData | undefined = data?.data;

  return {
    mutate,
    isLoading: isValidating,
    movie,
    error,
  };
};

export { useGetMovieByTmdbId, getMovieByTmdbId };
