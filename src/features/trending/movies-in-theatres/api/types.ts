export type GetMoviesInTheatres = MovieInTheatresData[];

export type MovieInTheatresData = {
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