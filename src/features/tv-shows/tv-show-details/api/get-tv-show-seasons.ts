import useSWR from 'swr';
import { CLIENT_API } from '../../../../config/axios/api-client';
import type { Season } from './types';

const useGetTvShowSeasons = (tvShowId?: string) => {
  const url = `/tv-shows/${tvShowId || ''}/seasons`;

  const { mutate, isValidating, data, error } = useSWR(
    tvShowId ? url : null,
    (url) => CLIENT_API.get<Season[]>(url)
  );

  const tvShowSeasons: Season[] | undefined = data?.data;

  return {
    getTvShowSeasons: mutate,
    isLoading: isValidating,
    tvShowSeasons,
    error,
  };
};

export { useGetTvShowSeasons };
