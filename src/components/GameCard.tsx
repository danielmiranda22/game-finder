import { Game } from '../hooks/useGames';
import {
  Card,
  CardBody,
  Flex,
  Heading,
  HStack,
  Image,
  useColorMode,
  VStack,
} from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';
import Emoji from './Emoji';
import { Link } from 'react-router-dom';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Card bg={colorMode === 'light' ? 'gray.50' : ''}>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Flex flexWrap="wrap" justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </Flex>
        <Heading mt={3} fontSize="2xl">
          <Link to={'/games/' + game.slug}>{game.name}</Link>
        </Heading>
        <Emoji rating={game.rating_top} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
