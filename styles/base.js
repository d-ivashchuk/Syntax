import { injectGlobal } from 'styled-components';

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
    border-top: 3px solid yellow;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: '💪';
    font-weight: 100;
  }

  img {
    max-width: 100%;
  }

  li {
    line-height: 1.7;
  }

  a {
    color: yellow;
    text-decoration: none;
  }

  .tagline {
    font-size: 2.5rem;
    margin: 0;
    @media (max-width: 1000px) {
      text-align: center;
    }
    @media (max-width: 800px) {
      font-size: 1.5rem;
    }
  }

  .wrapper, .header, .footer {
    max-width: 1000px;
    margin: 0 auto;
    &--text {
      background: white;
      padding: 2rem;
      font-size: 1.7rem;
    }
    @media (max-width: 1000px) {
      padding: 0 2rem;
    }
  }
`;

export default base;
