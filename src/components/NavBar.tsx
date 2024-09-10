import { HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" p={2}>
      <Image rounded="full" boxSize="60px" src={logo} boxShadow="lg" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
