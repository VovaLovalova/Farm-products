import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 540px;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  background-color: ${(props) =>
    props.isFarmProduct ? props.theme.colorGoodCard : props.theme.colorBadCard};
`;

export const CardRow = styled.div`
  display: flex;
`;

export const CardColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CardImage = styled.img`
  margin-right: 22px;
`;
