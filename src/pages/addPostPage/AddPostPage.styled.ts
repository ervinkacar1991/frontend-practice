import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  left: 0;
`;

export const FormWrapper = styled.div`
  margin-top: 50px;
  color: rgb(55 65 81);
`;
export const ActionSvg = styled.svg`
  width: 24px;
  height: 24px;
  color: #48bf84;

  cursor: pointer;
  margin-left: 15px;
  &:hover {
    color: #439775;
  }
`;
