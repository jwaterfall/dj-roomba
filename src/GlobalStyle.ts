import {createGlobalStyle} from 'styled-components';
import {normalize} from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
      box-sizing: border-box;
    }
    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }
    *:not(input, textarea){
      user-select: none;
  }
  
  :root {
    font-size: 16px;
    @media (max-width: 1400px) {
      font-size: 16px;
    }
    @media (max-width: 1200px) {
      font-size: 16px;
    }
    @media (max-width: 992px) {
      font-size: 16px;
    }
    @media (max-width: 768px) {
      font-size: 17px;
    }
    @media (max-width: 576px) {
      font-size: 18px;
    }
  
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
  
    input[type='text']::-ms-clear {
      display: none;
      width: 0;
      height: 0;
    }
    input[type='text']::-ms-reveal {
      display: none;
      width: 0;
      height: 0;
    }
    input[type='search']::-webkit-search-decoration,
    input[type='search']::-webkit-search-cancel-button,
    input[type='search']::-webkit-search-results-button,
    input[type='search']::-webkit-search-results-decoration {
      display: none;
    }
  }
  
  body {
    font-family: 'Roboto', sans-serif;
    color: hsl(0, 0%, 100%);
  }
  `;

export default GlobalStyle;
