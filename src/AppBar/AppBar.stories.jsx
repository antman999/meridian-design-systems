import styled from '@emotion/styled';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { AppBar } from './AppBar';

export default {
  title: 'Navigation/AppBar',
  component: AppBar,
};

export const Default = {
  args: {
    leftControl: 'Button',
  },
};
