import styled from "styled-components";

export const StyledLink = styled.a`
  display: flex;
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  color: ${(props) => props.theme.colorBlack};
  align-items: center;
`;

export const StyledText = styled.span`
  margin-left: 28px;
`;
