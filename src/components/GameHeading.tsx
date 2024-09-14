import { Heading } from '@chakra-ui/react';
import usePlatform from '../hooks/usePlatform';
import useGenre from '../hooks/useGenre';
import useGamesStore from '../store';

const GameHeading = () => {
  const genreId = useGamesStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGamesStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;

  return (
    <Heading ms={2} as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
