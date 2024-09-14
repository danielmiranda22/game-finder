import { useParams } from 'react-router-dom';
import useGame from '../hooks/useGame';
import { Box, Heading, Spinner, Text } from '@chakra-ui/react';
import ExpendableText from '../components/ExpendableText';

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <Box p={5}>
      <Heading>{game.name}</Heading>
      <ExpendableText children={game.description_raw} />
    </Box>
  );
};

export default GameDetailPage;
