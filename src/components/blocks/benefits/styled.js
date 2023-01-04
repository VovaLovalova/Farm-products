import styled from "styled-components";

import { Ul, Section } from "/src/components/styled/index";

export const BenefitsList = styled(Ul)`
  display: grid;
  grid-template-columns: 540px 540px;
  gap: 20px;
  margin-bottom: 64px;
  margin-top: 64px;
`;

export const BenefitsWrapper = styled(Section)`
  padding: 100px 90px;
  background-color: ${(props) => props.theme.colorWhite};
  flex-direction: column;
  align-items: center;
`;
