import useSWR from "swr";
import { CLIENT_API } from "../../../../config/axios/api-client";

import { GetTvShowsOnTheAir } from "./types";

const url = "/tv-shows/on-the-air";

const useTvShowsOnTheAir = () => {
  const { mutate, isValidating, data, error } = useSWR(url, (url) =>
    CLIENT_API.get<GetTvShowsOnTheAir>(url)
  );

  const tvShowsOnTheAir: GetTvShowsOnTheAir | undefined = data?.data;

  return {
    getTvShowsOnTheAir: mutate,
    isLoading: isValidating,
    tvShowsOnTheAir,
    error,
  };
};

export { useTvShowsOnTheAir };
