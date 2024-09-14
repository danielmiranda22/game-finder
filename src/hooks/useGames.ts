import { useInfiniteQuery } from '@tanstack/react-query';
import { Platform } from './usePlatforms';
import APIClient, { FetchResponse } from '../services/api-client';
import ms from 'ms';
import useGamesStore from '../store';

export interface Game {
  id: number;
  name: string;
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[]; //it is an array of objects where wich object has a property called platform of type Platform
  metacritic: number;
  rating_top: number;
  slug: string;
}

const apiClient = new APIClient<Game>('/games');

const useGames = () => {
  const gameQuery = useGamesStore((s) => s.gameQuery);

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms('24h'),
  });
};

export default useGames;
