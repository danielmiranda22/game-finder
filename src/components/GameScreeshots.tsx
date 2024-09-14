import useScreenshots from '../hooks/useScreenshots';
import { Box, Image, SimpleGrid } from '@chakra-ui/react';

interface Props {
  gameId: number;
}

const GameScreeshots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenshots(gameId);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3}>
      {data?.results.map((file) => (
        <Image key={file.id} src={file.image} className="br-8" />
      ))}
    </SimpleGrid>
  );
};

export default GameScreeshots;
