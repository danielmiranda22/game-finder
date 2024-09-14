import { HStack, Image, Text, useColorMode } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const { colorMode } = useColorMode();

  return (
    <HStack p={2} bg={colorMode === 'light' ? 'gray.100' : ''}>
      <Link to="/">
        <Image
          rounded="full"
          width="60px"
          src={logo}
          boxShadow="lg"
          objectFit="cover"
        />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
