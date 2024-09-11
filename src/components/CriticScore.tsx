import { Badge } from '@chakra-ui/react';

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let scoreColor = score > 75 ? 'green' : score > 60 ? 'yellow' : '';

  return (
    <Badge fontSize="sm" px={2} borderRadius="4px" colorScheme={scoreColor}>
      {score}
    </Badge>
  );
};

export default CriticScore;
