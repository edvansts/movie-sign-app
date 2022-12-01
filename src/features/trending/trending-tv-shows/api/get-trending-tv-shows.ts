import useSWR from "swr";
import { CLIENT_API } from "../../../../config/axios/api-client";

type GetTrendingTvShowsData = {
  updatedAt: string;
  name: string;
  originalName: string;
  lastRating: 0;
  overview: string;
  lastPopularity: 0;
  firstAirDate: string;
  lastAirDate: string;
  posterImage: string;
  backdropImage: string;
  adult: true;
  createdBy: string[];
  genres: string[];
  homepage: string;
  lastEpisodeToAir: any;
  nextEpisodeToAir: any;
  numberOfEpisodes: number;
  numberOfSeasons: number;
  tagline: string;
  productionCompanies: string[];
  status: string;
  _id: string;
}[];

const url = "/tv-shows/trending";

const useTrendingTvShows = () => {
  const { mutate, isValidating, data, error } = useSWR(url, (url) =>
    CLIENT_API.get<GetTrendingTvShowsData>(url)
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
