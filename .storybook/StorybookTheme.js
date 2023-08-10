import { create } from '@storybook/theming/create';
import logo from '../public/small-logo.png';

export default create({
  fontBase: '"Nunito Sans", sans-serif',
  fontCode: 'monospace',
  brandTitle: 'MDS',
  brandImage: logo,
  brandTarget: '_self',
});
