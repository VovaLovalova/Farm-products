import React from "react";
import Footer from "/src/components/layout/footer/footer";
import Header from "/src/components/layout/header/header";
import { MainWrapper } from "./styled";

import { Outlet } from "react-router-dom";

export default function PageWrapper() {
  return (
    <>
      <Header />
      <MainWrapper>
        <Outlet />
      </MainWrapper>
      <Footer />
    </>
  );
}
