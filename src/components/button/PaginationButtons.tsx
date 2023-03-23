import React from "react";
import { StyledButton } from "./Button.styled";

interface PaginationButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

const PaginationButtons = ({
  children,
  disabled,
  onClick,
}: PaginationButtonProps) => {
  return (
    <StyledButton disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default PaginationButtons;
