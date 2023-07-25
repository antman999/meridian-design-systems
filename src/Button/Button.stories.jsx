import styled from '@emotion/styled';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { Button } from './Button';
import { Icon } from '../Icon/Icon';
import { StoryLinkWrapper } from '../LinkWrapper';

export default {
  title: 'Inputs/Button',
  component: Button,
};

export const Primary = {
  args: {
    appearance: 'primary',
    children: 'Button',
  },
};

/**
 * All supported appearances.
 */
export const Appearances = {
  args: {
    children: 'Button',
  },
  render: (args) => (
    <>
      <Button {...args} appearance='primary' />
      <Button {...args} appearance='secondary' />
      <Button {...args} appearance='tertiary' />
      <Button {...args} appearance='primaryOutline' />
      <Button {...args} appearance='secondaryOutline' />
      <Button appearance='primary' isDisabled>
        Disabled
      </Button>
    </>
  ),
};

/**
 * If `containsIcon` is set to true it will round out the button for the Icon,
 * This should be set to `true` if the `children` prop will be an icon.
 *
 * **Note:** You can adjust the button size to either small or default.
 */
export const Icons = {
  render: () => (
    <>
      <Button appearance='primary' size='small' containsIcon>
        <Icon icon='mobile' aria-label='Link' />
      </Button>
      <Button appearance='secondary' size='small' containsIcon>
        <Icon icon='google' aria-label='Link' />
      </Button>
      <Button appearance='outline' size='small' containsIcon>
        <Icon icon='link' aria-label='Link' />
      </Button>
      <Button appearance='outline' containsIcon>
        <Icon icon='link' aria-label='Link' />
      </Button>
    </>
  ),
};

export const AllButtons = {
  name: 'all buttons',
  render: () => (
    <>
      <Button appearance='primary'>Primary</Button>
      <Button appearance='secondary'>Secondary</Button>
      <Button appearance='tertiary'>Tertiary</Button>
      <Button appearance='outline'>Outline</Button>
      <Button appearance='primaryOutline'>Outline primary</Button>
      <Button appearance='secondaryOutline'>Outline secondary</Button>
      <Button appearance='primary' isDisabled>
        Disabled
      </Button>
      <br />
      <Button appearance='primary' isLoading>
        Primary
      </Button>
      <Button appearance='secondary' isLoading>
        Secondary
      </Button>
      <Button appearance='tertiary' isLoading>
        Tertiary
      </Button>
      <Button appearance='outline' isLoading>
        Outline
      </Button>
      <Button appearance='outline' isLoading loadingText='Custom...'>
        Outline
      </Button>
      <br />
      <Button appearance='primary' size='small'>
        Primary
      </Button>
      <Button appearance='secondary' size='small'>
        Secondary
      </Button>
      <Button appearance='tertiary' size='small'>
        Tertiary
      </Button>
      <Button appearance='outline' size='small'>
        Outline
      </Button>
      <Button appearance='primary' isDisabled size='small'>
        Disabled
      </Button>
      <Button appearance='outline' size='small' containsIcon>
        <Icon icon='link' aria-label='Link' />
      </Button>
      <Button appearance='outline' size='small'>
        <Icon icon='link' />
        Link
      </Button>
    </>
  ),
};

export const AnchorWrapper = {
  name: 'anchor wrapper',
  render: () => (
    <div>
      <StoryLinkWrapper to='http://storybook.js.org'>
        Original Link Wrapper
      </StoryLinkWrapper>
      <br />
      <Button
        ButtonWrapper={StoryLinkWrapper}
        appearance='primary'
        href='http://storybook.js.org'
      >
        Primary
      </Button>
      <Button
        ButtonWrapper={StoryLinkWrapper}
        appearance='secondary'
        href='http://storybook.js.org'
      >
        Secondary
      </Button>
      <Button
        ButtonWrapper={StoryLinkWrapper}
        appearance='tertiary'
        href='http://storybook.js.org'
      >
        Tertiary
      </Button>
      <Button
        ButtonWrapper={StoryLinkWrapper}
        appearance='outline'
        href='http://storybook.js.org'
      >
        Outline
      </Button>
      <Button
        ButtonWrapper={StoryLinkWrapper}
        appearance='primaryOutline'
        href='http://storybook.js.org'
      >
        Outline primary
      </Button>
      <Button
        ButtonWrapper={StoryLinkWrapper}
        appearance='secondaryOutline'
        href='http://storybook.js.org'
      >
        Outline secondary
      </Button>
      <Button
        ButtonWrapper={StoryLinkWrapper}
        appearance='primary'
        isDisabled
        href='http://storybook.js.org'
      >
        Disabled
      </Button>
      <br />
      <Button
        ButtonWrapper={StoryLinkWrapper}
        appearance='primary'
        isLoading
        href='http://storybook.js.org'
      >
        Primary
      </Button>
      <Button
        ButtonWrapper={StoryLinkWrapper}
        appearance='secondary'
        isLoading
        href='http://storybook.js.org'
      >
        Secondary
      </Button>
      <Button
        ButtonWrapper={StoryLinkWrapper}
        appearance='tertiary'
        isLoading
        href='http://storybook.js.org'
      >
        Tertiary
      </Button>
      <Button
        ButtonWrapper={StoryLinkWrapper}
        appearance='outline'
        isLoading
        href='http://storybook.js.org'
      >
        Outline
      </Button>
      <Button
        ButtonWrapper={StoryLinkWrapper}
        appearance='outline'
        isLoading
        loadingText='Custom...'
        href='http://storybook.js.org'
      >
        Outline
      </Button>
      <br />
      <Button
        ButtonWrapper={StoryLinkWrapper}
        appearance='primary'
        size='small'
        href='http://storybook.js.org'
      >
        Primary
      </Button>
      <Button
        ButtonWrapper={StoryLinkWrapper}
        appearance='secondary'
        size='small'
        href='http://storybook.js.org'
      >
        Secondary
      </Button>
      <Button
        ButtonWrapper={StoryLinkWrapper}
        appearance='tertiary'
        size='small'
        href='http://storybook.js.org'
      >
        Tertiary
      </Button>
      <Button
        ButtonWrapper={StoryLinkWrapper}
        appearance='outline'
        size='small'
        href='http://storybook.js.org'
      >
        Outline
      </Button>
      <Button
        ButtonWrapper={StoryLinkWrapper}
        appearance='primary'
        isDisabled
        size='small'
        href='http://storybook.js.org'
      >
        Disabled
      </Button>
      <Button
        ButtonWrapper={StoryLinkWrapper}
        appearance='outline'
        size='small'
        containsIcon
        href='http://storybook.js.org'
      >
        <Icon icon='link' aria-label='Link' />
      </Button>
      <Button
        ButtonWrapper={StoryLinkWrapper}
        appearance='outline'
        size='small'
        href='http://storybook.js.org'
      >
        <Icon icon='link' />
        Link
      </Button>
    </div>
  ),
};

export const WithInteractions = {
  args: {
    appearance: 'primary',
    href: 'http://storybook.js.org',
    ButtonWrapper: StoryLinkWrapper,
    children: 'Button',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('link'));
    expect(canvas.getByRole('link')).toHaveAttribute(
      'href',
      'http://storybook.js.org',
    );
  },
};

/**
 * Indicates if the button is clickable at the current state.
 */
export const Disabled = {
  args: {
    appearance: 'primary',
    href: 'http://storybook.js.org',
    disabled: true,
    ButtonWrapper: StoryLinkWrapper,
    children: 'Button',
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('link'));
    expect(canvas.getByRole('link')).toHaveAttribute(
      'href',
      'http://storybook.js.org',
      'disabled',
    );
  },
};
