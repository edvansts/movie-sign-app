export interface TvShowsData {
  updatedAt: string;
  name: string;
  originalName: string;
  lastRating: number;
  overview: string;
  lastPopularity: string;
  firstAirDate: string;
  lastAirDate: string;
  posterImage: string;
  backdropImage: string;
  adult: boolean;
  createdBy: string[];
  genres: GenresTypes[];
  homepage: string;
  lastEpisodeToAir: any;
  nextEpisodeToAir: any;
  numberOfEpisodes: number;
  numberOfSeasons: number;
  tagline: string;
  productionCompanies: string[];
  status: string;
}

interface GenresTypes {
  id: string;
  name: string;
}

export interface Episode {
  episodeNumber: number;
  name: string;
  tmdbId: number;
  airDate: Date;
  overview?: string;
  lastRating: number;
  posterImage?: string;
}

export interface Season {
  _id: string;
  name: string;
  tmdbId: number;
  airDate: Date;
  overview?: string;
  posterImage?: string;
  seasonNumber: number;
  episodes: Episode[];
  tvShowId: string;
  createdAt: Date;
  updatedAt: Date;
}
