import styled from "styled-components";
import { TitleSize } from "./title";

const StyledTitle = styled.h1`
  margin: 0;
  margin-bottom: ${(props) => {
    let marginBottom = 0;
    if (props.mb) {
      marginBottom = props.mb;
    }
    return marginBottom + `px`;
  }};
  padding: 0;
  font-weight: 700;

  line-height: ${(props) => {
    let lineHeight = "41px";
    if (props.$size === TitleSize.BIG) {
      lineHeight = "50px";
    }
    if (props.$size === TitleSize.SMALL) {
      lineHeight = "27px";
    }

    if (props.$size === TitleSize.STANDART) {
      lineHeight = "31px";
    }

    return lineHeight;
  }};

  font-size: ${(props) => {
    let fontSize = "36px";
    if (props.$size === TitleSize.BIG) {
      fontSize = "44px";
    }
    if (props.$size === TitleSize.SMALL) {
      fontSize = "18px";
    }

    if (props.$size === TitleSize.STANDART) {
      fontSize = "24px";
    }
    return fontSize;
  }};
`;

export default StyledTitle;
