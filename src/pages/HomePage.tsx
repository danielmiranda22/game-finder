import {
  Grid,
  GridItem,
  Show,
  VStack,
  HStack,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';
import GameGrid from '../components/GameGrid';
import GameHeading from '../components/GameHeading';
import GenreList from '../components/GenreList';
import PlatformSelector from '../components/PlatformSelector';
import SortSelector from '../components/SortSelector';

const HomePage = () => {
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Grid
        templateAreas={{
          base: `"main"`,
          lg: `"aside main"`,
        }}
        bg={colorMode === 'light' ? 'gray.100' : ''}
        templateColumns={{ base: '1fr', lg: '200px 1fr' }}
      >
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
          className="br-8"
          bg={colorMode === 'light' ? 'white' : ''}
        >
          <VStack spacing={3} align="start">
            <GameHeading />
            <HStack spacing={3} ms={2}>
              <Show below="lg">
                <IconButton
                  size="sm"
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
};

export default HomePage;
