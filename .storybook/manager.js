import { addons } from '@storybook/manager-api';
import storybookTheme from './StorybookTheme';

addons.setConfig({
  theme: storybookTheme,
});
