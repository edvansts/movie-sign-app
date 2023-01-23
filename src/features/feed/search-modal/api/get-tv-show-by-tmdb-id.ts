import useSWR, { mutate } from "swr";
import { CLIENT_API } from "../../../../config/axios/api-client";
import { TvShowsData } from "../../../tv-shows/tv-show-details/api/types";

const getTvShowByTmdbId = async (tmdbId: number) => {
  return CLIENT_API.get<TvShowsData>(`tv-show/tmdb/${tmdbId}`).then(
    (response) => {
      mutate(`tv-shows/tmdb/${tmdbId}`, response.data);

      return response.data;
    }
  );
};

const useGetTvShowByTmdbId = (tmdbId: number) => {
  const url = `tv-shows/tmdb/${tmdbId}`;

  const { mutate, isValidating, data, error } = useSWR(
    tmdbId ? url : null,
    ([url]) => CLIENT_API.get<TvShowsData>(url),
    { revalidateOnMount: false }
  );

  const tvShow: TvShowsData | undefined = data?.data;

  return {
    mutate,
    isLoading: isValidating,
    tvShow,
    error,
  };
};

export { useGetTvShowByTmdbId, getTvShowByTmdbId };
