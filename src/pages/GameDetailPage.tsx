import { useParams } from 'react-router-dom';
import useGame from '../hooks/useGame';
import {
  Box,
  Heading,
  HStack,
  SimpleGrid,
  Spinner,
  Text,
  VStack,
} from '@chakra-ui/react';
import ExpendableText from '../components/ExpendableText';
import DefinitionItem from '../components/DefinitionItem';
import CriticScore from '../components/CriticScore';
import GameAtributes from '../components/GameAttributes';
import GameTrailer from '../components/GameTrailer';
import GameScreeshots from '../components/GameScreeshots';

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <VStack p={5} align="left" spacing={6}>
      <Heading>{game.name}</Heading>
      <ExpendableText children={game.description_raw} />
      <GameAtributes game={game} />
      <GameTrailer gameId={game.id} />
      <GameScreeshots gameId={game.id} />
    </VStack>
  );
};

export default GameDetailPage;
