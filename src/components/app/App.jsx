import { GlobalStyle } from "./styles";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import OrderPage from "/src/components/pages/order-page/order-page";
import MainPage from "/src/components/pages/main-page/main-page";
import products from "/src/mocks/products";
import benefitsList from "/src/mocks/mocks";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppRoute } from "/src/const";
import ScrollTop from "/src/components/ui/scrollTop/scrollTop";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ScrollTop />
        <Routes>
          <Route path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route index element={<MainPage benefitsList={benefitsList} />} />
            <Route
              path={AppRoute.BUY}
              element={<OrderPage products={products} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
