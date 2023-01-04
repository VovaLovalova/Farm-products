import React from "react";
import { TitleSize } from "../../ui/title/title";
import { ReactComponent as Farmer } from "/src/assets/farmer.svg";
import { StyledSection, StyledTitle, StyledText, ImgWrapper } from "./styled";

export default function About() {
  return (
    <StyledSection>
      <StyledTitle level="1" size={TitleSize.BIG}>
        Магазин фермерских продуктов с доставкой
      </StyledTitle>
      <StyledText>
        Все продукты изготавливаются под заказ. Фермеры начинают готовить
        продукты за день до отправки заказа клиентам. Именно поэтому мы
        принимаем заказы заранее и доставляем продукты максимально свежими.
      </StyledText>
      <ImgWrapper>
        <Farmer />
      </ImgWrapper>
    </StyledSection>
  );
}
