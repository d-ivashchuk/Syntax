import { injectGlobal } from 'styled-components';
import theme from './theme';

const base = injectGlobal`
  @font-face {
    font-family: '💪';
    src:  url('/static/fonts/Radnika-Bold.woff2') format('woff2'),
          url('/static/fonts/Radnika-Bold.woff') format('woff');
  }

  @font-face {
    font-family: 'rad';
    src:  url('/static/fonts/Radnika-Light.woff2') format('woff2'),
          url('/static/fonts/Radnika-Light.woff') format('woff');
  }

  html {
    box-sizing: border-box;
    width: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    font-family: 'rad';
    color: black;
    font-size: 10px;
    line-height: 1.5;
    background: black url('/static/background.jpg');
    border-top: 3px solid ${theme.colors.yellow};
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: '💪';
    font-weight: 100;
  }

  h1 {
    font-size:2em;
  }

  img {
    max-width: 100%;
    border: 0;
  }

  svg:not(:root) {
    overflow:hidden;
  }

  li {
    line-height: 1.7;
  }

  a {
    color: ${theme.colors.yellow};
    text-decoration: none;

    &:active,
    &:hover {
      outline:0;
    }

    &:focus{
      outline: thin dotted;
    }
  }

  /* Normalize */
  audio,
  canvas,
  video {
    display: inline-block;
  }
  audio:not([controls]){
    display: none;
    height: 0;
  }
  [hidden]{
    display: none;
  }
  abbr[title] {
      border-bottom:1px dotted;
  }
  b, strong {
    font-weight:700;
  }
  dfn {
    font-style:italic;
  }
  mark {
    background:#ff0;
    color:#000;
  }
  code, kbd, pre, samp {
    font-family:monospace, serif;
    font-size:1em;
  }
  pre {
    white-space:pre-wrap;
    word-wrap:break-word;
  }
  q {
    quotes: \201C \201D \2018 \2019;
  }
  small {
    font-size: 80%;
  }
  sub, sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sup {
    top: -.5em;
  }
  sub {
    bottom: -.25em;
  }
  fieldset {
    border: 1px solid silver;
    margin: 0 2px;
    padding: .35em .625em .75em;
  }
  button, input, select, textarea {
    font-family: inherit;
    font-size: 100%;
    margin: 0;
  }
  button, input {
    line-height: normal;
  }
  button,html input[type=button],
  input[type=reset],input[type=submit] {
    -webkit-appearance:button;
    cursor: pointer;
  }
  button[disabled],input[disabled] {
      cursor: default;
  }
  input[type=checkbox],input[type=radio] {
      box-sizing: border-box;
      padding: 0;
  }
  input[type=search] {
    -webkit-appearance: textfield;
    -moz-box-sizing: content-box;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
  }
  input[type=search]::-webkit-search-cancel-button,
  input[type=search]::-webkit-search-decoration {
    -webkit-appearance:none;
  }
  textarea{
    overflow:auto;
    vertical-align:top;
  }
  table{
    border-collapse: collapse;
    border-spacing: 0;
  }
  figure{
    margin: 0;
  }
  legend,
  button::-moz-focus-inner,
  input::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
  .clearfix:after {
    content: '';
    display: block;
    visibility: hidden;
    clear: both;
    font-size: 0;
    height: 0;
  }

`;

export default base;
