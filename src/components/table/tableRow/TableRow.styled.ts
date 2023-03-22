import styled from "styled-components";

export const UserRow = styled.tr`
  &:hover {
    background-color: #ececec;
  }
`;
export const Svg = styled.svg`
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin-left: 15px;
`;
export const SvgContainer = styled.div`
  width: 100px;
  display: flex;
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
