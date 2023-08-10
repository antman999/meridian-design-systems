import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { darken } from 'polished';
import { Icon } from '../Icon';

const linkStyles = css`
  display: inline-block;
  transition: transform 150ms ease-out, color 150ms ease-out;
  text-decoration: underline;
  color: ${(props) => props.theme.color.secondary};
  &:hover,
  &:focus {
    cursor: pointer;
    transform: translateY(-1px);
    color: ${(props) => darken(0.07, props.theme.color.secondary)};
  }
  &:active {
    transform: translateY(0);
    color: ${(props) => darken(0.01, props.theme.color.secondary)};
  }

  svg {
    display: inline-block;
    height: 1em;
    width: 1em;
    vertical-align: text-top;
    position: relative;
    bottom: -0.125em;
    margin-right: 0.4em;
  }

  ${(props) =>
    props.containsIcon &&
    css`
      svg {
        height: 1em;
        width: 1em;
        vertical-align: middle;
        position: relative;
        bottom: 0;
        margin-right: 0;
      }
    `};

  ${(props) =>
    props.secondary &&
    css`
      color: ${props.theme.color.dark2};

      &:hover {
        color: ${props.theme.color.dark3};
      }

      &:active {
        color: ${props.theme.color.dark4};
      }
    `};

  ${(props) =>
    props.tertiary &&
    css`
      color: ${props.theme.color.dark3};

      &:hover {
        color: ${props.theme.color.dark5};
      }

      &:active {
        color: ${props.theme.color.dark2};
      }
    `};

  ${(props) =>
    props.nochrome &&
    css`
      color: inherit;
      &:hover,
      &:active {
        color: inherit;
        text-decoration: underline;
      }
    `};

  ${(props) =>
    props.inverse &&
    css`
      color: ${props.theme.color.light1};
      &:hover {
        color: ${props.theme.color.light2};
      }

      &:active {
        color: ${props.theme.color.light3};
      }
    `};

  ${(props) =>
    props.isButton &&
    css`
      border: 0;
      border-radius: 0;
      background: none;
      padding: 0;
      font-size: inherit;
    `};
`;

const LinkInner = styled.span`
  ${(props) =>
    props.withArrow &&
    css`
      > svg:last-of-type {
        height: 0.7em;
        width: 0.7em;
        margin-right: 0;
        margin-left: 0.25em;
        bottom: auto;
        vertical-align: inherit;
      }
    `};
`;

const LinkA = styled.a`
  ${linkStyles};
`;

const LinkButton = styled.button`
  /* reset button styles */
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  ${linkStyles};
`;

const applyStyle = (LinkWrapper) => {
  return (
    LinkWrapper &&
    styled(
      ({
        containsIcon,
        inverse,
        nochrome,
        secondary,
        tertiary,
        ...linkWrapperRest
      }) => <LinkWrapper {...linkWrapperRest} />,
    )`
      ${linkStyles};
    `
  );
};

/**
 * Links can contains text and/or icons. Be careful using only icons, you must provide a text alternative via aria-label for accessibility.
 */
export function Link({ isButton, withArrow, LinkWrapper, children, ...rest }) {
  const content = (
    <>
      <LinkInner withArrow={withArrow}>
        {children}
        {withArrow && <Icon icon='arrowright' />}
      </LinkInner>
    </>
  );

  const StyledLinkWrapper = applyStyle(LinkWrapper);

  let SelectedLink = LinkA;
  if (LinkWrapper) {
    SelectedLink = StyledLinkWrapper;
  } else if (isButton) {
    SelectedLink = LinkButton;
  }

  return <SelectedLink {...rest}>{content}</SelectedLink>;
}

Link.propTypes = {
  isButton: PropTypes.bool,
  children: PropTypes.node,
  withArrow: PropTypes.bool,
  containsIcon: PropTypes.bool,
  LinkWrapper: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  inverse: PropTypes.bool,
  nochrome: PropTypes.bool,
  secondary: PropTypes.bool,
  tertiary: PropTypes.bool,
};

Link.defaultProps = {
  isButton: false,
  children: null,
  withArrow: false,
  containsIcon: false,
  LinkWrapper: undefined,
  inverse: false,
  nochrome: false,
  secondary: false,
  tertiary: false,
};
