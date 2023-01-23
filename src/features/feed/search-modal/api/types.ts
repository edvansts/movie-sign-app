export interface KnownFor {
  adult: boolean;
  backdropPath: string;
  genreIds: number[];
  id: number;
  mediaType: string;
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  posterPath: string;
  releaseDate: string;
  title: string;
  video: boolean;
  voteAverage: number;
  voteCount: number;
  firstAirDate: string;
  name: string;
  originCountry: string[];
  originalName: string;
}

export interface Result {
  adult: boolean;
  gender: number;
  id: number;
  knownFor: KnownFor[];
  knownForDepartment: string;
  mediaType: string;
  name?: string;
  popularity: number;
  profilePath: string;
  backdropPath: string;
  genreIds: number[];
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  posterPath: string;
  releaseDate: string;
  title?: string;
  video?: boolean;
  voteAverage?: number;
  voteCount?: number;
}

export interface SearchAllData {
  page: number;
  results: Result[];
  totalPages: number;
  totalResults: number;
}
