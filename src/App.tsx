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

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
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
            selectedGenre={selectedGenre}
            onSelectedGenre={(genre) => setSelectedGenre(genre)}
          />
        </GridItem>
      </Show>
      <GridItem
        area="main"
        borderRadius="8px 0 0 8px"
        bg={colorMode === 'light' ? 'white' : ''}
      >
        <PlatformSelector
          selectedPlatform={selectedPlatform}
          onSelectedPlatform={(platform) => setSelectedPlatform(platform)}
        />
        <GameGrid
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
