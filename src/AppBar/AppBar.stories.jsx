import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { AppBar } from './AppBar';
import SkeletonPage from '../shared/SkeletonPage';
import { Link } from '../Link/Link';
import { Icon } from '../Icon';

export default {
  title: 'Navigation/AppBar',
  component: AppBar,
};

const Children = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: '1rem',
        marginRight: '1rem',
        marginTop: '0.5rem',
        marginBottom: '0.5rem',
      }}
    >
      <img src='/small-logo.png' alt='MDS Logo' width='150' height='50' />
      <div>
        <Link
          href='https://storybook.js.org/tutorials/'
          style={{ marginLeft: '1rem' }}
        >
          Example 1
        </Link>
        <Link
          href='https://storybook.js.org/tutorials/'
          style={{ marginLeft: '1rem' }}
        >
          Example 2
        </Link>
        <Icon icon='useralt' style={{ marginLeft: '1rem' }} />
      </div>
    </div>
  );
};

/**
 * `default` adds a subtle blur using light or dark color tokens depending on your color theme.
 */
export const Default = {
  args: {
    children: <Children />,
  },
  render: (args) => (
    <>
      <AppBar {...args} />
    </>
  ),
};

/**
 * You can apply your own color value if your app theme is different than the specified values.
 */
export const CustomColor = {
  args: {
    children: <Children />,
  },
  render: (args) => (
    <>
      <AppBar {...args} color='#FFAE00' />
    </>
  ),
};

export const Fixed = {
  args: {
    children: <Children />,
    position: 'fixed',
  },
  render: (args) => (
    <>
      <AppBar {...args} />
      <SkeletonPage />
    </>
  ),
};

export const Absolute = {
  args: {
    children: <Children />,
    position: 'absolute',
  },
  render: (args) => (
    <>
      <AppBar {...args} />
      <SkeletonPage />
    </>
  ),
};

export const Static = {
  args: {
    children: <Children />,
    position: 'static',
  },
  render: (args) => (
    <>
      <AppBar {...args} />
      <SkeletonPage />
    </>
  ),
};

export const Sticky = {
  args: {
    children: <Children />,
    position: 'sticky',
  },
  render: (args) => (
    <>
      <AppBar {...args} />
      <SkeletonPage />
    </>
  ),
};

export const Relative = {
  args: {
    children: <Children />,
    position: 'relative',
  },
  render: (args) => (
    <>
      <AppBar {...args} />
      <SkeletonPage />
    </>
  ),
};
