import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
const GlobalStyles = createGlobalStyle`
  ${reset}

  *{
    box-sizing: border-box;
  }

  input{
    border-style: none;
  }

  a{
    text-decoration: none;
  }
`;
export default GlobalStyles;