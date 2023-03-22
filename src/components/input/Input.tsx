import React from "react";
import { InputWrapper, Label, StyledInput } from "./Input.styled";

interface InputProps {
  label: string;
  inputProps: Record<string, string>;
}

const Input: React.FC<InputProps> = ({ label, inputProps }) => {
  return (
    <InputWrapper>
      <Label>{label}</Label>
      <StyledInput {...inputProps} />
    </InputWrapper>
  );
};

export default Input;
