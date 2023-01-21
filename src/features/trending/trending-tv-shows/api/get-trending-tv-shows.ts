import useSWR from "swr";
import { CLIENT_API } from "../../../../config/axios/api-client";

import { GetTrendingTvShows } from "./types";

const url = "/tv-shows/trending";

const useTrendingTvShows = () => {
  const { mutate, isValidating, data, error } = useSWR(url, (url) =>
    CLIENT_API.get<GetTrendingTvShows>(url)
  );

  const trendingTvShows = data?.data;

  return {
    getTrendingTvShows: mutate,
    isLoading: isValidating,
    trendingTvShows,
    error,
  };
};

export { useTrendingTvShows };
