import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useRef } from 'react';
import { BsBinoculars } from 'react-icons/bs';
import useGamesStore from '../store';
import { useNavigate } from 'react-router-dom';

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGamesStore((s) => s.setSearchText);
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) setSearchText(ref.current?.value);
        navigate('/');
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsBinoculars />} />
        <Input
          ref={ref}
          borderRadius={8}
          placeholder="Search games..."
          variant="filled"
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
