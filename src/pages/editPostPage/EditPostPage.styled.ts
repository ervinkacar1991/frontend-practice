import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  left: 0;
`;

export const FormWrapper = styled.div`
  border: 1px solid rgb(55 65 81);
  padding: 20px;
  border-radius: 8px 8px 0 0;
  margin-top: 50px;
  color: rgb(55 65 81);
  background-color: white;
  div {
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
  }
`;
export const ActionSvg = styled.svg`
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin-left: 15px;
  &:hover {
    color: red;
  }
`;
