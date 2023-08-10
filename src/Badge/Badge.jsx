import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const BadgeWrapper = styled.div`
  display: inline-block;
  vertical-align: top;
  font-size: 12px;
  line-height: 12px;
  padding: 5px 12px;
  border-radius: 2em;
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
    props.status === 'positive' &&
    css`
      color: ${props.theme.color.black};
      background: ${props.theme.color.success};
    `};

  ${(props) =>
    props.status === 'negative' &&
    css`
      color: ${props.theme.color.white};
      background: ${props.theme.color.error};
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
`;

export function Badge({ ...props }) {
  return <BadgeWrapper {...props} />;
}
Badge.propTypes = {
  status: PropTypes.oneOf([
    'positive',
    'negative',
    'neutral',
    'error',
    'warning',
  ]),
};

Badge.defaultProps = {
  status: 'neutral',
};
