import { useParams } from 'react-router-dom';
import useGame from '../hooks/useGame';
import { GridItem, Heading, SimpleGrid, Spinner } from '@chakra-ui/react';
import ExpendableText from '../components/ExpendableText';
import GameAtributes from '../components/GameAttributes';
import GameTrailer from '../components/GameTrailer';
import GameScreeshots from '../components/GameScreeshots';

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} p={5} spacing={6}>
      <GridItem display="flex" flexDirection="column" gap={6}>
        <Heading>{game.name}</Heading>
        <ExpendableText children={game.description_raw} />
        <GameAtributes game={game} />
      </GridItem>
      <GridItem display="flex" flexDirection="column" gap={6}>
        <GameTrailer gameId={game.id} />
        <GameScreeshots gameId={game.id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailPage;
