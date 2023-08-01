import styled from '@emotion/styled';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { AppBar } from './AppBar';
import SkeletonPage from '../shared/SkeletonPage';

export default {
  title: 'Navigation/AppBar',
  component: AppBar,
};

export const Default = () => (
  <div>
    <AppBar color='light' position='fixed'>
      <p style={{ marginTop: '20px', marginBottom: '20px' }}>Hi</p>
    </AppBar>
    <SkeletonPage />
  </div>
);
