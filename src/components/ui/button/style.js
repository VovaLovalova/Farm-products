import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledButton = styled(Link)`
  border: none;
  background-color: ${(props) => props.theme.colorForButton};
  color: ${(props) => props.theme.colorWhite};
  font-size: ${(props) => props.theme.fontSizeDefault};
  font-family: ${(props) => props.theme.font};
  line-height: 27px;
  font-weight: 400;
  margin: 0;
  box-sizing: border-box;
  width: ${(props) => {
    let width = 260;
    if (props.width) {
      width = props.width;
    }
    return width + `px`;
  }};
  padding: 16.5px;
  cursor: pointer;
  display: block;
  text-align: center;

  &:hover {
    background-color: ${(props) => props.theme.colorForButtonHover};
    box-shadow: inset 0px 4px 0px rgba(0, 0, 0, 0.14);
  }

  &:active {
    box-shadow: none;
  }

  &:disabled {
    background-color: grey;
    box-shadow: none;
  }
`;

export default StyledButton;
