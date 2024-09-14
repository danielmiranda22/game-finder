import { AspectRatio, Box } from '@chakra-ui/react';
import useTrailers from '../hooks/useTrailers';

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);
  console.log(data);

  if (isLoading) return null;

  if (error) throw error;

  const first = data?.results[0];

  return first ? (
    <AspectRatio>
      <iframe
        title={first.preview}
        src={first.data[480]}
        allowFullScreen
        className="br-8"
      />
    </AspectRatio>
  ) : null;
};

export default GameTrailer;
