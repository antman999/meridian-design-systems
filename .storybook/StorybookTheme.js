import { create } from '@storybook/theming/create';
import logo from '../public/small-logo.png';

export default create({
  base: 'light',
  brandTitle: 'MDS',
  brandImage: logo,
  brandTarget: '_self',
});
