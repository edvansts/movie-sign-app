import useSWR from "swr";
import { CLIENT_API } from "../../../../config/axios/api-client";
import { TvShowsData } from "./types";

const useGetTvShowById = (tvShowId?: string) => {
  const url = `/tv-shows/${tvShowId || ""}`;

  const { mutate, isValidating, data, error } = useSWR(
    tvShowId ? url : null,
    (url) => CLIENT_API.get<TvShowsData>(url)
  );

  const tvShow: TvShowsData | undefined = data?.data;

  return {
    getTvShow: mutate,
    isLoading: isValidating,
    tvShow,
    error,
  };
};

export { useGetTvShowById };
