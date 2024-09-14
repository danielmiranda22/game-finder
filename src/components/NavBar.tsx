import { HStack, Image, Text, useColorMode } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

const NavBar = () => {
  const { colorMode } = useColorMode();

  return (
    <HStack p={2} bg={colorMode === 'light' ? 'gray.100' : ''}>
      <Image rounded="full" boxSize="60px" src={logo} boxShadow="lg" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
