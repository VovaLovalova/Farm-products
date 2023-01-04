import styled from "styled-components";

export const HeaderWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${(props) => props.theme.pageWidth};
  height: ${(props) => props.theme.footerHeight};
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 90px;
  background-color: ${(props) => props.theme.colorWhite};
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
  z-index: 5;
`;
