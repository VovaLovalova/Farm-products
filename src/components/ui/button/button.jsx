import React from "react";
import StyledButton from "./style";

export default function Button({ children, link, width, onClick, isDisabled }) {
  return (
    <StyledButton
      onClick={onClick}
      disabled={isDisabled}
      {...(link ? { to: link } : { as: "button", type: "button" })}
      width={width}
    >
      {children}
    </StyledButton>
  );
}
