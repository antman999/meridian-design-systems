import { Global, ThemeProvider } from '@emotion/react';
import { DocsContainer } from '@storybook/blocks';
import { GlobalStyle } from '../src/shared/global';
import theme from '../src/shared/styles';
import { themes } from '@storybook/theming';
import { useDarkMode } from 'storybook-dark-mode';

/** @type { import('@storybook/react').Preview } */

const withTheme = (Story) => {
  const mode = useDarkMode() ? 'dark' : 'light';
  const storyTheme = theme(mode);
  const GlobalStylesWithTheme = GlobalStyle(storyTheme);
  return (
    <ThemeProvider theme={storyTheme}>
      <Global styles={GlobalStylesWithTheme} />
      <Story />
    </ThemeProvider>
  );
};

const preview = {
  decorators: [withTheme],
  parameters: {
    docs: {
      container: (props) => {
        const mode = useDarkMode() ? 'dark' : 'light';
        const themeToggle = mode === 'dark' ? themes.dark : themes.light;
        return (
          <>
            <DocsContainer {...props} theme={themeToggle} />
          </>
        );
      },
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
