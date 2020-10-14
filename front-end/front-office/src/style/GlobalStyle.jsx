import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box
}
body {
    margin: 0;
    padding: 0;
    background-color: #f1f1f1 !important;
    font-family: 'Poppins', sans-serif;
    overflow: hidden;
}
`;
 
export default GlobalStyle;