import Game from '../entities/Game';
import {
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';
import Emoji from './Emoji';
import { Link as RouterLink } from 'react-router-dom';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const { colorMode } = useColorMode();
  const linkHoverColor = useColorModeValue('blue.600', 'blue.300');

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
          <RouterLink
            to={'/games/' + game.slug}
            style={{
              color: 'inherit',
              textDecoration: 'none',
            }}
            className="game-link"
          >
            <span>{game.name}</span>
          </RouterLink>
        </Heading>
        <Emoji rating={game.rating_top} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
