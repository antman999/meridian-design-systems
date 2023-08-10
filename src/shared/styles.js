import { css } from '@emotion/react';

export const baseColors = {
  white: '#FFFFFF ',
  black: '#202020',
  otherBlack: '#2C2C2C ',
  lightBlur: '#ffffffd4',
  darkBlur: '#202020e6',
  border: 'rgba(0,0,0,.1)',

  neutral: {
    neutral100: '#FFFFFF',
    neutral200: '#F8F8F8',
    neutral300: '#F3F3F3',
    neutral400: '#dee2e6',
    neutral500: '#adb5bd',
    neutral600: '#495057',
    neutral700: '#343a40',
    neutral800: '#444444',
    neutral900: '#212529',
  },

  purple: {
    purple100: '#A93AF2',
    purple200: '#8b2fc9',
    purple300: '#ab51e3',
    purple400: '#bd68ee',
    purple500: '#d283ff',
    purple600: '#dc97ff',
  },

  blue: {
    blue100: '#1c1cff',
    blue200: '#2339ff',
    blue300: '#2a56ff',
    blue400: '#3173ff',
    blue500: '#3790ff',
    blue600: '#3eadff',
    blue700: '#45caff',
  },

  green: {
    green100: '#57CC99',
    green200: '#48b89f',
    green300: '#38a3a5',
  },

  red: {
    red100: '#e5383b',
    red200: '#ba181b',
    red300: '#a4161a',
  },

  yellow: {
    yellow100: '#FDC500',
    yellow200: '#DEB714',
    yellow300: '#BEA828',
  },
};

const colors = {
  screenBackground: baseColors.white,
  text: baseColors.neutral.neutral900,
  iconColor: baseColors.neutral.neutral700,
  buttonBorder: baseColors.neutral.neutral500,
  disabled: baseColors.neutral.neutral300,
  linkColor: baseColors.blue.blue100,
  primary: baseColors.purple.purple200,
  secondary: baseColors.blue.blue100,
  success: baseColors.green.green100,
  warning: baseColors.yellow.yellow100,
  error: baseColors.red.red100,
  inlineGlow: baseColors.neutral.neutral400,
  buttonText: baseColors.white,
  white: baseColors.white,
  black: baseColors.black,
  light1: baseColors.neutral.neutral100,
  light2: baseColors.neutral.neutral200,
  light3: baseColors.neutral.neutral300,
  light4: baseColors.neutral.neutral400,
  dark1: baseColors.neutral.neutral500,
  dark2: baseColors.neutral.neutral600,
  dark3: baseColors.neutral.neutral700,
  dark4: baseColors.neutral.neutral800,
  dark5: baseColors.neutral.neutral900,
  appBarBlur: baseColors.lightBlur,
  loadingIcon: baseColors.neutral.neutral300,
  border: baseColors.border,
  iconOutline: baseColors.neutral.neutral700,
};

const darkColors = {
  ...colors,
  screenBackground: baseColors.black,
  text: baseColors.neutral.neutral100,
  iconColor: baseColors.neutral.neutral300,
  buttonBorder: baseColors.neutral.neutral200,
  disabled: baseColors.neutral.neutral600,
  linkColor: baseColors.blue.blue500,
  appBarBlur: baseColors.darkBlur,
  loadingIcon: baseColors.neutral.neutral600,
  iconOutline: baseColors.neutral.neutral300,
};

const spaceUnit = 1;

const borderRadius = {
  xs: '4px',
  s: '8px',
  m: '16px',
  l: '24px',
  xl: '32px',
  xxl: '40px',
  round: '50%',
};

const spacing = {
  xxs: `${0.25 * spaceUnit}em`,
  xs: `${0.5 * spaceUnit}em`,
  s: `${spaceUnit}em`,
  m: `${1.25 * spaceUnit}em`,
  l: `${2 * spaceUnit}em`,
  xl: `${3.25 * spaceUnit}em`,
  xxl: `${5.25 * spaceUnit}em`,
};

const boxShadow = {
  card: '0px 14px 26px 0px rgba(0, 0, 0, 0.08)',
  inner: 'inset 0 3px 0 0 rgba(0, 0, 0, 0.05)',
  outerBorder: `0 0 0 1px ${baseColors.blue.dark2}, 0 0 0 4px ${baseColors.blue.light5}`,
};

const typography = {
  type: {
    primary: '"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    code: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
  },
  weight: {
    regular: '400',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
  size: {
    s1: '12',
    s2: '14',
    s3: '16',
    m1: '20',
    m2: '24',
    m3: '28',
    l1: '32',
    l2: '40',
    l3: '48',
    code: '90',
  },
};

const breakpoint = 600;
const pageMargin = '5.55555';

const pageMargins = css`
  padding: 0 ${spacing.m};
  @media (min-width: ${breakpoint * 1}px) {
    margin: 0 ${pageMargin * 1}%;
  }
  @media (min-width: ${breakpoint * 2}px) {
    margin: 0 ${pageMargin * 2}%;
  }
  @media (min-width: ${breakpoint * 3}px) {
    margin: 0 ${pageMargin * 3}%;
  }
  @media (min-width: ${breakpoint * 4}px) {
    margin: 0 ${pageMargin * 4}%;
  }
`;

const theme = (mode) => ({
  color: mode === 'dark' ? darkColors : colors,
  borderRadius,
  boxShadow,
  fonts: {
    family: 'NunitoSans, sans-serif',
  },
  mode: mode,
  spacing,
  typography,
});

export default theme;
