import './App.css';
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Grid,
  GridItem,
  HStack,
  IconButton,
  Show,
  useColorMode,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';
import GameHeading from './components/GameHeading';
import { FaBars } from 'react-icons/fa';

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        bg={colorMode === 'light' ? 'gray.100' : ''}
        templateColumns={{ base: '1fr', lg: '200px 1fr' }}
      >
        <GridItem area="nav" bg={colorMode === 'light' ? 'gray.100' : ''}>
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </GridItem>
        <Show above="lg">
          <GridItem
            area="aside"
            paddingX={5}
            bg={colorMode === 'light' ? 'gray.100' : ''}
          >
            <GenreList
              selectedGenreId={gameQuery.genreId}
              onSelectedGenre={(genre) =>
                setGameQuery({ ...gameQuery, genreId: genre.id })
              }
            />
          </GridItem>
        </Show>
        <GridItem
          p={3}
          area="main"
          borderRadius="8px"
          bg={colorMode === 'light' ? 'white' : ''}
        >
          <VStack spacing={3} align="start">
            <GameHeading gameQuery={gameQuery} />
            <HStack spacing={3}>
              <Show below="lg">
                <IconButton
                  aria-label="open"
                  icon={<FaBars />}
                  onClick={() => onOpen()}
                />
              </Show>
              <PlatformSelector
                selectedPlatformId={gameQuery.platformId}
                onSelectedPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platformId: platform.id })
                }
              />
              <SortSelector
                sortOrder={gameQuery.sortOrder}
                onSelectSortOrder={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }
              />
            </HStack>
            <GameGrid gameQuery={gameQuery} />
          </VStack>
        </GridItem>
      </Grid>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <GenreList
              selectedGenreId={gameQuery.genreId}
              onSelectedGenre={(genre) =>
                setGameQuery({ ...gameQuery, genreId: genre.id })
              }
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default App;
