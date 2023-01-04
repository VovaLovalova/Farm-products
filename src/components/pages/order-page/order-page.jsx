import React, { useState } from "react";
import { PageWrapper, CheckboxLabel, CheckboxListWrapper } from "./styled";
import CheckboxList from "/src/components/ui/checkbox-list/checkbox-list";
import Title, { TitleSize } from "/src/components/ui/title/title";

import { OrderWrapper, Input, P, Price } from "./styled";
import Button from "/src/components/ui/button/button";

import "swiper/swiper.scss";
import { ProductSwiper } from "./styled";
import { ProductCard } from "/src/components/ui/product-card/product-card";
import { SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Mousewheel, Scrollbar } from "swiper/core";
import "swiper/swiper-bundle.min.css";
SwiperCore.use([Mousewheel, Pagination, Scrollbar]);

export default function OrderPage({ products }) {
  const [swiperRef, setSwiperRef] = useState(null);
  const [selectProductIds, setSelectProductIds] = useState([]);
  const selectProducts = selectProductIds.map((id) =>
    products.find((product) => product.id === id)
  );
  const fullPrice = selectProducts.reduce(
    (sum, product) => (sum += product.price),
    0
  );
  const handleOnClickProduct = (value, index) => {
    if (!selectProductIds.includes(value)) {
      swiperRef.slideTo(index, 0);
    }
  };
  const [address, setAddress] = useState("");

  const handleBuyClick = (event) => {
    event.preventDefault();
    alert(`Спасибо за заказ, вы купили:\n${selectProducts.map(
      (product) => `${product.title} - ${product.price} руб.\n`
    )}
    Итого: ${fullPrice} руб.
    Доставка по адресу: ${address}.`);
  };
  return (
    <PageWrapper>
      <form>
        <CheckboxListWrapper>
          <Title size={TitleSize.SMALL} level="2" mb={27}>
            Выберите продукты
          </Title>
          {products.length > 0 ? (
            <CheckboxList
              labelComponent={CheckboxLabel}
              name={"select-products"}
              isGridList={false}
              options={products.map((product) => ({
                value: product.id,
                title: product.title
              }))}
              selectValues={selectProductIds}
              onChange={setSelectProductIds}
              onClickLabel={handleOnClickProduct}
            />
          ) : (
            <p>Продукты были слишком вкусными и их разобрали</p>
          )}
        </CheckboxListWrapper>
        <OrderWrapper>
          <Title size={TitleSize.SMALL} level="2" mb={24}>
            Сделать заказ
          </Title>
          <Input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Введите адрес доставки"
          />
          <P>Цена</P>
          <Price>{fullPrice} руб.</Price>
          <Button
            width={310}
            onClick={handleBuyClick}
            isDisabled={!(selectProductIds.length && address)}
          >
            Купить
          </Button>
        </OrderWrapper>
      </form>
      <ProductSwiper
        onSwiper={setSwiperRef}
        spaceBetween={12}
        direction="vertical"
        slidesPerView="auto"
        scrollbar={{ draggable: true }}
        mousewheel
        pagination={{
          type: "fanction"
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </ProductSwiper>
    </PageWrapper>
  );
}
