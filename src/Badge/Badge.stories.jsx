import { Badge } from './Badge';
import { Icon } from '../Icon/Icon';

export default {
  title: 'Data Display/Badge',
  component: Badge,
};

export const Default = {
  args: {
    children: 'Default',
  },
};

/**
 * The `status` prop allows you to visually indicate what the badge is for.
 */
export const Status = {
  render: () => (
    <>
      <Badge status='primary'>Primary</Badge>
      <Badge status='secondary'>Secondary</Badge>
      <Badge status='success'>success</Badge>
      <Badge status='neutral'>Neutral</Badge>
      <Badge status='error'>Error</Badge>
      <Badge status='warning'>Warning</Badge>
    </>
  ),
};

/**
 * The `variant` props allows you to customize if the badge should be `default` filled or `outline`.
 */
export const Variant = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <div>
        <Badge variant='default'>Default</Badge>
        <Badge variant='outline'>Outline</Badge>
      </div>
      <div>
        <Badge variant='default' status='secondary'>
          Default
        </Badge>
        <Badge variant='outline' status='secondary'>
          Outline
        </Badge>
      </div>
      <div>
        <Badge variant='default' status='success'>
          Default
        </Badge>
        <Badge variant='outline' status='success'>
          Outline
        </Badge>
      </div>
    </div>
  ),
};

/**
 * Adds a `2em` border radius to the badge.
 */
export const Rounded = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <div>
        <Badge variant='default' rounded>
          Default
        </Badge>
        <Badge variant='outline' rounded>
          Outline
        </Badge>
      </div>
      <div>
        <Badge variant='default' rounded status='error'>
          Default
        </Badge>
        <Badge variant='outline' rounded status='error'>
          Outline
        </Badge>
      </div>
      <div>
        <Badge variant='default' rounded status='secondary'>
          Default
        </Badge>
        <Badge variant='outline' rounded status='secondary'>
          Outline
        </Badge>
      </div>
    </div>
  ),
};

/**
 * A badge could be used as a notification banner, this will be it's own component in a future release with a counting logic.
 */
export const Notification = {
  name: 'Notification use',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <div>
        <Badge status='secondary'>1</Badge>
        <Badge status='secondary' rounded>
          1
        </Badge>
        <Badge status='secondary' variant='outline' rounded>
          1
        </Badge>
      </div>

      <div>
        <Badge status='neutral'>13</Badge>
        <Badge status='error' rounded>
          13
        </Badge>
        <Badge status='error' rounded variant='outline'>
          13
        </Badge>
      </div>

      <div>
        <Badge status='neutral'>99+</Badge>
        <Badge rounded status='error'>
          99+
        </Badge>
        <Badge rounded variant='outline' status='error'>
          99+
        </Badge>
      </div>
    </div>
  ),
};
