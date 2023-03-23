import React from "react";
import { StyledButton } from "./Button.styled";

interface ButtonProps {
  children: React.ReactNode;

  onClick?: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
