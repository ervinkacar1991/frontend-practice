import React from "react";
import { InputWrapper, Label } from "./Input.styled";

interface InputProps {
  label: string;
  inputProps: string;
}

const Input: React.FC<InputProps> = ({ label, inputProps }) => {
  return (
    <InputWrapper>
      <Label>{label}</Label>
      <Input>{...inputProps}</Input>
    </InputWrapper>
  );
};

export default Input;
