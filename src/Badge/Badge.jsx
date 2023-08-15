import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const BadgeWrapper = styled.div`
  display: inline-block;
  vertical-align: top;
  font-size: 12px;
  line-height: 10px;
  padding: 6px 10px;
  border-radius: ${(props) => (props.rounded ? 2 : 0.3)}em;
  font-weight: ${(props) => props.theme.typography.weight.bold};
  margin-inline-start: 2px;
  margin-inline-end: 2px;
  svg {
    height: 12px;
    width: 12px;
    margin-right: 4px;
    margin-top: -2px;
  }

  ${(props) =>
    props.status === 'success' &&
    css`
      color: ${props.theme.color.black};
      background: ${props.theme.color.success};
    `};

  ${(props) =>
    props.status === 'warning' &&
    css`
      color: ${props.theme.color.black};
      background: ${props.theme.color.warning};
    `};

  ${(props) =>
    props.status === 'error' &&
    css`
      color: ${props.theme.color.white};
      background: ${props.theme.color.error};
    `};

  ${(props) =>
    props.status === 'neutral' &&
    css`
      color: ${props.theme.color.light1};
      background: ${props.theme.color.dark2};
    `};

  ${(props) =>
    props.status === 'primary' &&
    css`
      color: ${props.theme.color.light1};
      background: ${props.theme.color.primary};
    `};

  ${(props) =>
    props.status === 'secondary' &&
    css`
      color: ${props.theme.color.light1};
      background: ${props.theme.color.secondary};
    `};

  ${(props) =>
    props.variant === 'outline' &&
    props.status === 'success' &&
    css`
      color: ${props.theme.color.success};
      box-shadow: ${props.theme.color.success} 0 0 0 1.5px inset;
      background: none;
    `}

  ${(props) =>
    props.variant === 'outline' &&
    props.status === 'warning' &&
    css`
      color: ${props.theme.color.warning};
      box-shadow: ${props.theme.color.warning} 0 0 0 1.5px inset;
      background: none;
    `}

  ${(props) =>
    props.variant === 'outline' &&
    props.status === 'error' &&
    css`
      color: ${props.theme.color.error};
      box-shadow: ${props.theme.color.error} 0 0 0 1.5px inset;
      background: none;
    `}

     ${(props) =>
    props.variant === 'outline' &&
    props.status === 'neutral' &&
    css`
      color: ${props.theme.color.text};
      box-shadow: ${props.theme.color.dark2} 0 0 0 1.5px inset;
      background: none;
    `}

     ${(props) =>
    props.variant === 'outline' &&
    props.status === 'primary' &&
    css`
      color: ${props.theme.color.primary};
      box-shadow: ${props.theme.color.primary} 0 0 0 1.5px inset;
      background: none;
    `}

     ${(props) =>
    props.variant === 'outline' &&
    props.status === 'secondary' &&
    css`
      color: ${props.theme.color.secondary};
      box-shadow: ${props.theme.color.secondary} 0 0 0 1.5px inset;
      background: none;
    `}
`;

export function Badge({ ...props }) {
  return <BadgeWrapper {...props} />;
}
Badge.propTypes = {
  /**
   * A status can be provided to a badge which affect the color depending on the use case.
   */
  status: PropTypes.oneOf([
    'success',
    'neutral',
    'error',
    'warning',
    'primary',
    'secondary',
  ]),

  /**
   * Adds a 2em border radius to the badge.
   */
  rounded: PropTypes.bool,

  /**
   * Depending on the use case you can have an outlined badge or a filled one.
   */
  variant: PropTypes.oneOf(['default', 'outline']),
};

Badge.defaultProps = {
  status: 'primary',
  rounded: false,
  variant: 'default',
};
