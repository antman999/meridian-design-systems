import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { background, color, typography } from '../shared/styles';

const BadgeWrapper = styled.div`
  display: inline-block;
  vertical-align: top;
  font-size: 12px;
  line-height: 12px;
  padding: 5px 12px;
  border-radius: 0.25em;
  font-weight: ${typography.weight.bold};
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
      color: ${color.lightest};
      background: ${background.positive};
    `};

  ${(props) =>
    props.status === 'negative' &&
    css`
      color: ${color.lightest};
      background: ${background.negative};
    `};

  ${(props) =>
    props.status === 'warning' &&
    css`
      color: ${color.lightest};
      background: ${background.warning};
    `};

  ${(props) =>
    props.status === 'error' &&
    css`
      color: ${color.lightest};
      background: ${color.negative};
    `};

  ${(props) =>
    props.status === 'neutral' &&
    css`
      color: ${color.dark};
      background: ${color.mediumlight};
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
