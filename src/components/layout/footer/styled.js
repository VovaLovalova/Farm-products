import styled from "styled-components";

export const FooterWrapper = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${(props) => props.theme.pageWidth};
  height: ${(props) => props.theme.footerHeight};
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 90px;
  background-color: ${(props) => props.theme.colorWhite};
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;
