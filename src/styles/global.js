

import { createGlobalStyle } from 'styled-components';
//import Fundo from "../../assets/indice.jpg";
export const GlobalStyle = createGlobalStyle`
{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  outline: 0;
}

body, html {
  background-color: #fff;
  font-family: 'Helvetica Neue', 'Helvetica', Arial, sans-serif;
  text-rendering: optimizeLegibility !important;
  webkit-font-smoothing: antialiased !important;
  height: 100%;
  width: 100%;
}
`;