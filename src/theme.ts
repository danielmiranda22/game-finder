import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
};

const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: '#ebf4f9',
      100: '#d4dade',
      200: '#b9c1c6',
      300: '#9ea7ae',
      400: '#828e97',
      500: '#68747e',
      600: '#505b63',
      700: '#394147',
      800: '#21272b',
      900: '#060e14',
    },
  },
});

export default theme;
