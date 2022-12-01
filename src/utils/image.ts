const IMAGE_URL = "https://image.tmdb.org/t/p/original";

export const getImageUrl = (path: string) => {
  return `${IMAGE_URL}${path}`;
};
