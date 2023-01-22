import useSWR from "swr";
import { CLIENT_API } from "../../../../config/axios/api-client";

import { GetTopRatedTvShows } from "./types";

const url = "/tv-shows/top-rated";

const useTopRatedTvShows = () => {
  const { mutate, isValidating, data, error } = useSWR(url, (url) =>
    CLIENT_API.get<GetTopRatedTvShows>(url)
  );

  const topRatedTvShows = data?.data;

  return {
    getTopRatedTvShows: mutate,
    isLoading: isValidating,
    topRatedTvShows,
    error,
  };
};

export { useTopRatedTvShows };
