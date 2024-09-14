import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
};

const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: '#ecf2f9',
      100: '#cad7e7',
      200: '#a5bbd7',
      300: '#82a1c9',
      400: '#5f86bc',
      500: '#476ea2',
      600: '#38557e',
      700: '#283d59',
      800: '#182535',
      900: '#060c13',
    },
  },
});

export default theme;
