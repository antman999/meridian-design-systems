import { css } from '@emotion/react';
export const fontUrl =
  'https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,800,900';

export const GlobalStyle = (theme) => css`
  body {
    font-family: ${theme.typography.type.primary};
    font-size: ${theme.typography.size.s3}px;
    color: ${theme.color.text};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
    -webkit-overflow-scrolling: touch;
    background: ${theme.color.screenBackground};
    * {
      box-sizing: border-box;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: ${theme.typography.weight.regular};
      margin: 0;
      padding: 0;
    }

    button,
    input,
    textarea,
    select {
      outline: none;
      font-family: ${theme.typography.type.primary};
    }

    sub,
    sup {
      font-size: 0.8em;
    }

    sub {
      bottom: -0.2em;
    }

    sup {
      top: -0.2em;
    }

    b,
    em {
      font-weight: ${theme.typography.weight.bold};
    }

    hr {
      border: none;
      border-top: 1px solid ${theme.color.light4};
      clear: both;
      margin-bottom: 1.25rem;
    }

    code,
    pre {
      font-family: ${theme.typography.type.code};
      font-size: ${theme.typography.size.s2 - 1}px;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    code {
      display: inline-block;
      padding-left: 2px;
      padding-right: 2px;
      vertical-align: baseline;

      color: ${theme.color.secondary};
    }

    pre {
      line-height: 18px;
      padding: 11px 1rem;
      white-space: pre-wrap;

      background: rgba(0, 0, 0, 0.05);
      color: ${theme.color.text};
      border-radius: 3px;
      margin: 1rem 0;
    }

    &.ReactModal__Body--open {
      overflow: hidden;
      &.hide-intercom #intercom-container {
        display: none;
      }
    }

    .ReactModalPortal > div {
      opacity: 0;
    }

    .ReactModalPortal .ReactModal__Overlay {
      transition: all 200ms ease-in;

      &--after-open {
        opacity: 1;
      }
      &--before-close {
        opacity: 0;
      }
    }
  }
`;
