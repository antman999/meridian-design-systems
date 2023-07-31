import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { background, color, typography } from '../shared/styles';

export function AppBar({
  leftControl,
  rightControl,
  centerControl,
  position,
  scrollToTop,
  elevateAppBar,
  color,
  backgroundBlur,
  ...props
}) {
  return (
    <div>
      <div>hi</div>
    </div>
  );
}

AppBar.propTypes = {
  /**
   * The left content of the component.
   */
  leftControl: PropTypes.node,

  /**
   * An action at the center of the AppBar, this is usually an input or logo
   */
  centerControl: PropTypes.node,

  rightControl: PropTypes.node,

  position: PropTypes.oneOf([
    'absolute',
    'fixed',
    'relative',
    'static',
    'sticky',
  ]),

  /**
   * Animates a smooth scroll to the top of the page onClick
   */
  scrollToTop: PropTypes.bool,

  /**
   * Adds a bottom border shadow as the user begins to scroll
   */
  elevateAppBar: PropTypes.bool,

  /**
   * The color of the component, both light and dark will use the color tokens,
   * if you wish to provide your own you can, each color will get a blur applied unless `backgroundBlur` is false.
   */
  color: PropTypes.oneOfType([
    PropTypes.oneOf(['light', 'dark']),
    PropTypes.string,
  ]),

  backgroundBlur: PropTypes.bool,
};

AppBar.defaultProps = {
  position: 'fixed',
  scrollToTop: true,
  elevateAppBar: true,
  color: 'light',
  backgroundBlur: true,
};
