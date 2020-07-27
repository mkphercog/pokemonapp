import React from "react";
import { ButtonStyled } from "./SharedButton.css";

export const SharedButton: React.FC<SharedButtonProps> = ({
  fun,
  children,
  isChosen,
}) => (
  <ButtonStyled isChosen={isChosen ? isChosen : false} onClick={() => fun()}>
    {children}
  </ButtonStyled>
);

interface SharedButtonProps {
  fun: Function;
  isChosen?: boolean;
}
