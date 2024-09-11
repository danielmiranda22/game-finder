import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import usePlatforms, { Platform } from '../hooks/usePlatforms';

interface Props {
  onSelectedPlatform: (platform: Platform) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = ({
  selectedPlatformId,
  onSelectedPlatform,
}: Props) => {
  const { data: platforms, error } = usePlatforms();
  const platform = platforms?.results.find((p) => p.id === selectedPlatformId);

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {platform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {platforms?.results.map((platform) => (
          <MenuItem
            onClick={() => onSelectedPlatform(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
