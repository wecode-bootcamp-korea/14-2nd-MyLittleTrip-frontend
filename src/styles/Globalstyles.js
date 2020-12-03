import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
const GlobalStyles = createGlobalStyle`
  ${reset}
  *{
    box-sizing: border-box;
    outline: none;
  }

  input{
    border-style: none;
    cursor: pointer;
  }
  
  button{
    border-style: none;
    cursor: pointer;
  }

  a{
    text-decoration: none;
  }
`;
export default GlobalStyles; 
