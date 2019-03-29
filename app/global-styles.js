import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  .container {
    padding: 0;
  }
  
  h1 {
    font-size: 20px !important;
    margin: 0;
  }
  
  h2 {
    font-size: 18px !important;
    margin: 0;
  }
  
  h3 {
    font-size: 16px !important;
    margin: 0;
  }
  
  p,
  label.col-form-label,
  input.form-control-plaintext {
    font-size: 14px;
  }
  
  .font-size-20 {
    font-size: 20px;
  }
`;

export default GlobalStyle;
