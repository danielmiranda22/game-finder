import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';

const GameGrid = () => {
  const { error, games, isLoading } = useGames();
  const skeletons = [1, 2, 3, 3, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}

      <SimpleGrid
        columns={{ sm: 1, md: 3, lg: 4, xl: 5 }}
        padding={3}
        spacing={4}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer>
              <GameCardSkeleton key={skeleton} />
            </GameCardContainer>
          ))}

        {games.map((g) => (
          <GameCardContainer>
            <GameCard game={g} key={g.id} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
