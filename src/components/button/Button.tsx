import React from "react";
import { StyledButton } from "./Button.styled";

interface ButtonProps {
  children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
