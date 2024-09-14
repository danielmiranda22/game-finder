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

function App() {
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
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem
            area="aside"
            paddingX={5}
            bg={colorMode === 'light' ? 'gray.100' : ''}
          >
            <GenreList />
          </GridItem>
        </Show>
        <GridItem
          p={3}
          area="main"
          borderRadius="8px"
          bg={colorMode === 'light' ? 'white' : ''}
        >
          <VStack spacing={3} align="start">
            <GameHeading />
            <HStack spacing={3}>
              <Show below="lg">
                <IconButton
                  aria-label="open"
                  icon={<FaBars />}
                  onClick={() => onOpen()}
                />
              </Show>
              <PlatformSelector />
              <SortSelector />
            </HStack>
            <GameGrid />
          </VStack>
        </GridItem>
      </Grid>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <GenreList />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default App;
