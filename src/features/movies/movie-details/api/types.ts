export interface MovieData {
  _id: string;
  adult: boolean;
  backdropImage: string;
  createdAt: string;
  imdbId: string;
  lastPopularity: number;
  lastRating: number;
  originalTitle: string;
  overview: string;
  posterImage: string;
  releaseDate: string;
  title: string;
  tmdbId: string;
  updatedAt: string;
  runtime?: number;
  genres?: string[];
  rating?: Rating;
}

export interface Rating {
  _id: string;
  createdAt: string;
  favoritePerformance: FavoritePerformance;
  grade: number;
  movieId: string;
  updatedAt: string;
  userId: string;
}
export interface FavoritePerformance {
  castId: string;
  castImage: string;
  castName: string;
  personId: string;
  personName: string;
}

export type MovieCastData = {
  _id: string;
  character: string;
  createdAt: string;
  departmentWorked: string;
  movieId: string;
  name: string;
  order: number;
  personId: string;
  profileImage: string;
  tmdbId: string;
  updatedAt: string;
}[];
