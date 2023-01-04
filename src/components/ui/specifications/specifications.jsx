import React from "react";
import { StyledText } from "./styled";

export function Specifications({ product }) {
  return (
    <>
      <StyledText>
        <b>Масса:</b> {`${product.specifications.weight} гр.`}
      </StyledText>
      <StyledText>
        <b>Срок годности:</b> {product.specifications.expirationDate}
      </StyledText>
      <StyledText>
        <b>Порода:</b> {product.specifications.breed}
      </StyledText>
      <StyledText>
        <b>Место происхождения:</b> {product.specifications.placeOfOrigin}
      </StyledText>
    </>
  );
}
