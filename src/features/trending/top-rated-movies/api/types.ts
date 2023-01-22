export type GetTopRatedMovies = TopRatedMoviesData[];

export type TopRatedMoviesData = {
    _id: string;
    title: string;
    originalTitle: string;
    lastRating: number;
    overview: string;
    lastPopularity: number;
    releaseDate: string;
    posterImage: string;
    tmdbId: string;
    imdbId: string;
  };