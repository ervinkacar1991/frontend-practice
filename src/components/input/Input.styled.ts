import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
  font-size: 18px;
  line-height: 1.5rem;
  color: gray;
`;
export const StyledInput = styled.textarea`
  width: 676px;
  height: 90px;
  background-color: rgb(229 231 235);
  padding: 1rem 0.75rem;
  border-width: 2px;
  outline: none;
  ::placeholder {
    font-size: 15px;
  }
`;
