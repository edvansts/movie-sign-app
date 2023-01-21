import useSWR from "swr";
import { CLIENT_API } from "../../../../config/axios/api-client";

const useGetTvShowSessions = (tvShowId?: string) => {
  const url = `/tv-shows/${tvShowId || ""}/seasons`;

  const { mutate, isValidating, data, error } = useSWR(
    tvShowId ? url : null,
    (url) => CLIENT_API.get<any>(url)
  );

  const tvShowSeasons: any | undefined = data?.data;

  return {
    getTvShowSeasons: mutate,
    isLoading: isValidating,
    tvShowSeasons,
    error,
  };
};

export { useGetTvShowSessions };
