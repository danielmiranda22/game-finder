import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { BsBinoculars } from 'react-icons/bs';

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsBinoculars />} />
      <Input
        borderRadius={8}
        placeholder="Search games..."
        variant="filled"
      ></Input>
    </InputGroup>
  );
};

export default SearchInput;
