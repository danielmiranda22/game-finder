import { SimpleGrid, Text } from '@chakra-ui/react';
import Game from '../entities/Game';
import CriticScore from './CriticScore';
import DefinitionItem from './DefinitionItem';

interface Props {
  game: Game;
}

const GameAtributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} spacing={3} as="dl">
      <DefinitionItem term="Platforms">
        {game.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Metascore">
        <CriticScore score={game.metacritic} />
      </DefinitionItem>
      <DefinitionItem term="Genres">
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Publishers">
        {game.publishers.map((pub) => (
          <Text key={pub.id}>{pub.name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAtributes;
