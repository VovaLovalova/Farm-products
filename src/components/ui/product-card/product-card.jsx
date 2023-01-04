import React, { useState } from "react";
import { CardWrapper, Button, ButtonWrapper } from "./styled";
import Title, { TitleSize } from "/src/components/ui/title/title";
import { Tabs } from "/src/components/ui/tabs/tabs";

export function ProductCard({ product }) {
  const [activeTab, setActiveTab] = useState(0);
  const [isActiveDesc, setActiveDesc] = useState(true);
  const [isActiveSpec, setActiveSpec] = useState(false);
  const [isActiveInt, setActiveInt] = useState(false);

  const handlerBuy = (event) => {
    if (event.currentTarget.innerText === "Описание") {
      setActiveTab(0);
      setActiveDesc(true);
      setActiveSpec(false);
      setActiveInt(false);
    }
    if (event.currentTarget.innerText === "Характеристики") {
      setActiveTab(1);
      setActiveDesc(false);
      setActiveSpec(true);
      setActiveInt(false);
    }
    if (event.currentTarget.innerText === "Свойства") {
      setActiveTab(2);
      setActiveDesc(false);
      setActiveSpec(false);
      setActiveInt(true);
    }
  };

  return (
    <>
      <CardWrapper>
        <img src={product.src} alt={product.name} width="248" height="248" />
        <div>
          <Title size={TitleSize.STANDART} level="3" mb={16}>
            {product.title}
          </Title>
          <ButtonWrapper>
            <Button onClick={handlerBuy} isActive={isActiveDesc}>
              Описание
            </Button>
            <Button onClick={handlerBuy} isActive={isActiveSpec}>
              Характеристики
            </Button>
            <Button onClick={handlerBuy} isActive={isActiveInt}>
              Свойства
            </Button>
          </ButtonWrapper>
          <Tabs product={product} activeTab={activeTab} />
        </div>
      </CardWrapper>
    </>
  );
}
