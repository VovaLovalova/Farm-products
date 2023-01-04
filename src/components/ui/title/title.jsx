import React from "react";
import StyledTitle from "./styled";

export const TitleSize = {
  BIG: "big",
  SMALL: "small",
  STANDART: "standart",
  DEFAULT: ""
};

export default function Title({ children, size, level, mb }) {
  return (
    <StyledTitle as={`h${level}`} $size={size} mb={mb}>
      {children}
    </StyledTitle>
  );
}
