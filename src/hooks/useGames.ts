import { GameQuery } from '../App';
import useData from './useData';
import { Genre } from './useGenres';
import { Platform } from './usePlatforms';

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[]; //it is an array of objects where wich object has a property called platform of type Platform
  metacritic: number;
}
const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    '/games',
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
      },
    },
    [gameQuery]
  );

export default useGames;
