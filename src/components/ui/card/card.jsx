import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import Disclaimer from "/src/components/ui/disclaimer/disclaimer";
import { CardWrapper, CardRow, CardColumn, CardImage } from "./styled";

export default function Card(props) {
  return (
    <CardWrapper isFarmProduct={props.isFarmProduct}>
      <CardRow>
        <CardImage src={props.image} alt={props.title} width={56} height={56} />
        <CardColumn>
          <Disclaimer type={props.isFarmProduct} />
          <Title level="3" size={TitleSize.SMALL}>
            {props.title}
          </Title>
        </CardColumn>
      </CardRow>
      <p className="card__text">{props.text}</p>
    </CardWrapper>
  );
}
