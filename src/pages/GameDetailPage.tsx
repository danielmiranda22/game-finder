import { useParams } from 'react-router-dom';
import useGame from '../hooks/useGame';
import {
  Box,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
  VStack,
} from '@chakra-ui/react';
import ExpendableText from '../components/ExpendableText';
import DefinitionItem from '../components/DefinitionItem';
import CriticScore from '../components/CriticScore';
import GameAtributes from '../components/GameAttributes';

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <Box p={5}>
      <Heading>{game.name}</Heading>
      <ExpendableText children={game.description_raw} />
      <GameAtributes game={game} />
    </Box>
  );
};

export default GameDetailPage;
