import React, { InputHTMLAttributes } from "react";
import { InputWrapper, Label, StyledInput } from "./Input.styled";

interface InputProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  inputProps: Record<string, string>;
}

const Input: React.FC<InputProps> = ({ label, inputProps, ...rest }) => {
  return (
    <InputWrapper>
      <Label>{label}</Label>
      <StyledInput {...inputProps} {...rest} />
    </InputWrapper>
  );
};

export default Input;
