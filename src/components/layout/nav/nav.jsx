import React from "react";
import Button from "/src/components/ui/button/button";
import { AppRoute } from "/src/const";
import { useLocation } from "react-router-dom";

const buttons = [
  {
    to: AppRoute.MAIN,
    button: <Button link={AppRoute.MAIN}>Главная</Button>
  },
  {
    to: AppRoute.BUY,
    button: <Button link={AppRoute.BUY}>Купить продукты</Button>
  }
];

export default function Nav() {
  const pageUrl = useLocation().pathname;
  return (
    <ul>
      <li>
        {buttons
          .filter((button) => button.to !== pageUrl)
          .map((button) => button.button)}
      </li>
    </ul>
  );
}
