import React from "react";
import { ReactComponent as Image } from "/src/assets/logo.svg";
import { StyledLink, StyledText } from "./styled";

export default function Logo() {
  return (
    <StyledLink href="/">
      <Image />
      <StyledText>Фермерские продукты</StyledText>
    </StyledLink>
  );
}
