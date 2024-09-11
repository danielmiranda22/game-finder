import './App.css';
import {
  background,
  Grid,
  GridItem,
  Show,
  useColorMode,
} from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/usePlatforms';
import { Game } from './hooks/useGames';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      bg={colorMode === 'light' ? 'gray.100' : ''}
      templateColumns={{ base: '1fr', lg: '200px 1fr' }}
    >
      <GridItem area="nav" bg={colorMode === 'light' ? 'gray.100' : ''}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem
          area="aside"
          paddingX={5}
          bg={colorMode === 'light' ? 'gray.100' : ''}
        >
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem
        area="main"
        borderRadius="8px 0 0 8px"
        bg={colorMode === 'light' ? 'white' : ''}
      >
        <PlatformSelector
          selectedPlatform={gameQuery.platform}
          onSelectedPlatform={(platform) =>
            setGameQuery({ ...gameQuery, platform })
          }
        />
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
