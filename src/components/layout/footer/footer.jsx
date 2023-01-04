import React from "react";
import { FooterWrapper } from "./styled";

import Logo from "/src/components/ui/logo/logo";
import Copyright from "/src/components/ui/copyright/copyright";

export default function Footer() {
  return (
    <FooterWrapper>
      <Logo />
      <Copyright />
    </FooterWrapper>
  );
}
