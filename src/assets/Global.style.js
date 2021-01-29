import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
*{margin: 0;}
::selection {
  background: #b3b3b3;
}
body {
    margin: 0;
    padding: 0;
    background-color:#0f0f0f;
    color: #fff;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
    font-family: -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}


`

export default GlobalStyle;