import React from "react";
import { StyledText } from "./styled";

export function Internals({ product }) {
  return (
    <>
      <StyledText>
        <b>Энергетическая ценность:</b> {product.internals.energyValue}
      </StyledText>
      <StyledText>
        <b>Пищевая ценность:</b> {product.internals.nutritionalValue}
      </StyledText>
    </>
  );
}
