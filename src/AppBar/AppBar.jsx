import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { forwardRef } from 'react';

const StyledAppBar = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  flex-shrink: 0;
  position: fixed;
  border-bottom: ${(props) =>
    props.withBottomBorder ? `1px solid ${props.theme.color.border}` : 'none'};
  ${(props) =>
    props.color === 'default' &&
    `
    background: ${props.theme.color.appBarBlur};
    backdrop-filter: blur(8px);
  `};

  ${(props) =>
    props.color === 'inherit' &&
    `
    color: 'inherit';
  `}

  ${(props) =>
    props.color &&
    props.color !== 'default' &&
    props.color !== 'inherit' &&
    `
    background: ${props.color};
   `}

  ${(props) =>
    props.position === 'fixed' &&
    `
    position: fixed;
    z-index: 2;
    top: 0;
    left: auto;
    right: 0;
    '@media print': {
        position: absolute;
    },
  `};
  ${(props) =>
    props.position === 'absolute' &&
    `
    position: absolute;
    z-index: 2;
    top: 0;
    left: auto;
    right: 0;
  `};
  ${(props) =>
    props.position === 'static' &&
    `
    position: static;
  `};
  ${(props) =>
    props.position === 'relative' &&
    `
    position: relative;
  `};

  ${(props) => props.style}
`;

export const AppBar = forwardRef(function AppBar(
  { children, position, withBottomBorder, color, style, ...props },
  ref,
) {
  return (
    <StyledAppBar
      color={color}
      ref={ref}
      position={position}
      style={style}
      withBottomBorder={withBottomBorder}
      {...props}
    >
      {children}
    </StyledAppBar>
  );
});

AppBar.propTypes = {
  /**
   * The navigation content of the AppBar.
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
   * Adds a bottom border to the navigation bar.
   */
  withBottomBorder: PropTypes.bool,

  /**
   * `light` and `dark` will apply color tokens from meridian.
   *
   * `inherit` will apply the color used within your app.
   *
   * You can also provide your own custom hex code value.
   */
  color: PropTypes.oneOfType([
    PropTypes.oneOf(['default', 'inherit']),
    PropTypes.string,
  ]),

  /**
   * Override or provide custom styles using the `style` prop,
   */
  style: PropTypes.object,
};

AppBar.defaultProps = {
  position: 'fixed',
  withBottomBorder: true,
  color: 'default',
  style: {},
};
