import styled, { css } from "styled-components";
import checkboxSelect from "/src/assets/checkbox.svg";

import { Swiper } from "swiper/react";

export const ProductSwiper = styled(Swiper)`
  width: 727px;
  position: relative;
  z-index: 0;

  .swiper-pagination {
    display: none;
  }

  .swiper-slide {
    flex-shrink: 1;
  }
`;

export const PageWrapper = styled.div`
  background-color: #f7f7f7;
  padding: 40px 90px 0 90px;
  display: grid;
  grid-template-columns: 353px 727px;
  column-gap: 20px;
  position: absolute;
  top: 80px;
  bottom: 80px;
  overflow-y: scroll;
`;

export const CheckboxLabel = styled.span`
  position: relative;
  display: flex;
  height: 56px;
  font-size: 18px;
  text-align: left;
  align-items: center;
  cursor: pointer;

  &::after {
    content: "";
    right: 0;
    display: block;
    position: absolute;
    height: 22px;
    width: 22px;
    ${(props) =>
      props.$isChecked
        ? css`
            background-color: #fc9b27;
            border: 1px solid rgba(0, 0, 0, 0.1);
            background-image: url(${checkboxSelect});
            background-repeat: no-repeat;
            background-position: center center;
          `
        : css`
            background-color: ${props.theme.backgroundColorGray};
            border: 1px solid rgba(0, 0, 0, 0.1);
          `}
  }
`;

export const CheckboxListWrapper = styled.div`
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
  width: 353px;
  padding: 24px 20px;
  margin-bottom: 18px;
`;

export const OrderWrapper = styled.div`
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
  width: 353px;
  padding: 24px 20px 20px 20px;
`;

export const Input = styled.input`
  padding: 14px 12px;
  margin: 0;
  margin-bottom: 20px;
  width: 100%;
  box-sizing: border-box;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #333333;
  background: #f7f7f7;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const P = styled.p`
  padding: 0;
  margin: 0;
  margin-bottom: 8px;
`;

export const Price = styled.span`
  padding: 0;
  margin: 0;
  margin-bottom: 32px;
  font-weight: 700;
  font-size: 24px;
  line-height: 31px;
  display: block;
  color: #333333;
`;
