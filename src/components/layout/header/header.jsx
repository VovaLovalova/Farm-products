import React from "react";
import { HeaderWrapper } from "./styled";

import Nav from "/src/components/layout/nav/nav";
import Logo from "/src/components/ui/logo/logo";

export default function Header() {
  return (
    <HeaderWrapper as="header">
      <Logo />
      <Nav />
    </HeaderWrapper>
  );
}
