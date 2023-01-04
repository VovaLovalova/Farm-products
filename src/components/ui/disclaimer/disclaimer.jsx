import React from "react";
import { DisclaimerWrapper, DisclaimerText } from "./styled";

export default function Disclaimer({ type }) {
  return (
    <DisclaimerWrapper isFarmProduct={type}>
      <DisclaimerText>
        {type ? `Фермерские продукты` : `Магазинные продукты`}
      </DisclaimerText>
    </DisclaimerWrapper>
  );
}
