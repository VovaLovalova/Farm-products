import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  height: 100%;
  background-color: #989898;
  margin-left: calc(100vw - 100%);
}

body,
html {
  margin: 0;
}

body {
  position: relative;
  min-height: 100%;
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.fontSizeDefault};
  line-height: 27px;
  font-weight: 400;
  color: ${(props) => props.theme.colorBlack};
  background-color: ${(props) => props.theme.colorWhite};
}

ul,
ol {
  list-style: none;
  padding:0;
  margin: 0;
}

a {
  text-decoration: none;
}`;
