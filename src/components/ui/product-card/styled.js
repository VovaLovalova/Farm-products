import styled from "styled-components";

export const CardWrapper = styled.div`
  box-sizing: border-box;
  width: 727px;
  height: 288px;
  padding: 20px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 248px 419px;
  column-gap: 20px;
  box-shadow: 0 10px 20px rgb(0 0 0 / 4%), 0 2px 6px rgb(0 0 0 / 4%),
    0 0 1px rgb(0 0 0 / 4%);
`;

export const ButtonWrapper = styled.div`
  margin-bottom: 16px;
`;

export const Button = styled.button`
  background-color: ${(props) => (props.isActive ? "#88aa4d" : "#f7f7f7")};
  border: ${(props) =>
    props.isActive
      ? "1px solid rgba(0, 0, 0, 0.1)"
      : "1px solid rgba(0, 0, 0, 0.1)"};
  color: ${(props) => (props.isActive ? "#ffffff" : "#333333")};
  padding: 8px 12px;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 8px;
  }
`;
