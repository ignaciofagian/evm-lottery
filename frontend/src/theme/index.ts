import { extendTheme, StyleConfig, type ThemeConfig } from '@chakra-ui/react';
import { Dict } from '@chakra-ui/utils';

const borderRadius = {
  radii: {
    none: '0',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },
};

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'dark',
};

const components: Record<string, StyleConfig> = {
  CustomBadge: {},
};

const theme: Dict = extendTheme({
  config,
  components,
  styles: {
    global: () => ({
      body: {
        fontFamily: 'Montserrat, sans-serif',
      },
    }),
  },
  ...borderRadius,
});

export default theme;
