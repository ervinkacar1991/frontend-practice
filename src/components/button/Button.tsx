import React from "react";
import { StyledButton } from "./Button.styled";

interface ButtonProps {
  children: React.ReactNode;
  onAddUser?: () => void;
}

const Button = ({ children, onAddUser }: ButtonProps) => {
  return <StyledButton onClick={onAddUser}>{children}</StyledButton>;
};

export default Button;
