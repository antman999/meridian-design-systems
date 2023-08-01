import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { background, color, typography } from '../shared/styles';
import { forwardRef } from 'react';

const StyledAppBar = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  flex-shrink: 0;
  position: fixed;
  ${(props) =>
    props.color === 'light' &&
    `
    background: ${color.lightest};
    backdrop-filter: blur(8px);
  `};
  ${(props) =>
    props.color === 'dark' &&
    `
    background: ${color.darkest};
    backdrop-filter: blur(8px);
  `};
  ${(props) =>
    props.position === 'fixed' &&
    `
    position: fixed;
    z-index: 1;
    top: 0;
    left: auto;
    right: 0;
    '@media print': {
        position: absolute;
    },
  `};
`;

export const AppBar = forwardRef(function AppBar(
  {
    children,
    position,
    scrollToTop,
    elevateAppBar,
    color,
    backgroundBlur,
    ...props
  },
  ref,
) {
  return (
    <StyledAppBar color={color} ref={ref} position={position} {...props}>
      {children}
    </StyledAppBar>
  );
});

AppBar.propTypes = {
  /**
   * The left content of the component.
   */

  children: PropTypes.node.isRequired,

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
