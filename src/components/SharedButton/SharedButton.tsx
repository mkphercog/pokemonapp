import React from "react";
import { ButtonStyled } from "./SharedButton.css";

export const SharedButton: React.FC<SharedButtonProps> = ({
  fun,
  children,
}) => <ButtonStyled onClick={() => fun()}>{children}</ButtonStyled>;

interface SharedButtonProps {
  fun: Function;
}
