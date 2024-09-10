import { HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/logo.webp';

const NavBar = () => {
  return (
    <HStack>
      <Image rounded="full" p={2} boxSize="60px" src={logo} />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
