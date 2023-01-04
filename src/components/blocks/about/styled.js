import styled from "styled-components";
import Section from "/src/components/styled/section/section";
import Title from "../../ui/title/title";

export const StyledSection = styled(Section)`
  background-color: #d8ecfe;
  min-height: 600px;
  padding: 183px 553px 183px 90px;
  flex-direction: column;

  &::after {
    content: "";
    position: absolute;
    width: 446px;
    height: 446px;
    border-radius: 50%;
    background-color: #c4e2ff;
    top: 80px;
    right: 72px;
  }
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 24px;
`;

export const StyledText = styled.p`
  width: 538px;
  margin: 0;
  padding: 0;
  margin-top: 24px;
`;

export const ImgWrapper = styled.div`
  position: absolute;
  top: 56px;
  right: 172px;
  z-index: 2;
`;
