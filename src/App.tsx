import './App.css';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Grid,
  GridItem,
  Show,
  useDisclosure,
} from '@chakra-ui/react';

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        md: `"nav nav" "aside main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem bg="pink.300" area="nav">
        Nav
      </GridItem>
      <Show above="md">
        <GridItem bg="green.300" area="aside">
          Aside
        </GridItem>
      </Show>
      <GridItem bg="blue.300" area="main">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
