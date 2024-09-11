import { ChevronDownIcon } from '@chakra-ui/icons';
import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react';

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Order
      </MenuButton>
      <MenuList>
        <MenuItem>a</MenuItem>
        <MenuItem>b</MenuItem>
        <MenuItem>c</MenuItem>
        <MenuItem>d</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
