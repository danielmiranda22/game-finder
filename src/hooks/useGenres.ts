import { useQuery } from '@tanstack/react-query';
import genres from '../data/genres';
import { FetchResponse } from './useData';
import apiClient from '../services/api-client';

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

//const useGenres = () => useData<Genre>('/genres');
//const useGenres = () => ({ data: genres, isLoading: false, error: null });

const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>('/genres').then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h no request is going to me maked
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
