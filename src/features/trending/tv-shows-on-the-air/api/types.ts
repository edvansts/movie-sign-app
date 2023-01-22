export type GetTvShowsOnTheAir = TvShowsOnTheAirData[];

export type TvShowsOnTheAirData = {
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
  };