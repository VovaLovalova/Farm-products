import styled from "styled-components";

export const DisclaimerWrapper = styled.div`
  width: 178px;
  box-sizing: border-box;
  padding: 2px 10px;
  text-align: center;
  background-color: ${(props) =>
    props.isFarmProduct ? props.theme.colorGoodDscl : props.theme.colorBadDscl};
`;

export const DisclaimerText = styled.div`
  font-size: 14px;
  line-height: 21px;
  color: #ffffff;
  margin: 0;
`;
