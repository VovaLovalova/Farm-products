import React from "react";
import { BenefitsList, BenefitsWrapper } from "./styled";
import Title from "/src/components/ui/title/title";
import Button from "/src/components/ui/button/button";
import Card from "/src/components/ui/card/card";

export default function Benefits({ benefitsList }) {
  return (
    <BenefitsWrapper>
      {benefitsList?.length ? (
        <>
          <Title level="2">Почему фермерские продукты лучше?</Title>{" "}
          <BenefitsList>
            {benefitsList.map((item) => (
              <li key={item.id}>
                <Card {...item} />
              </li>
            ))}
          </BenefitsList>
          <Button link="/buy">Купить продукты</Button>
        </>
      ) : null}
    </BenefitsWrapper>
  );
}
