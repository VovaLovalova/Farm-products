import React from "react";
import { StyledText, StyledPrice } from "./styled";

export function Description({ product }) {
  return (
    <>
      <StyledText>{product.description}</StyledText>
      <StyledPrice>{`${product.price} руб. / ${product.specifications.weight} гр.`}</StyledPrice>
    </>
  );
}
