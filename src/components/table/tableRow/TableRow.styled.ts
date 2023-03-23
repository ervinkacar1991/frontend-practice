import { Link } from "react-router-dom";
import styled from "styled-components";

export const UserRow = styled.tr`
  & > td {
    padding: 10px;
  }
  &:hover {
    background-color: #f5f5f5;
  }
  &:not(:last-child) {
    border-bottom: 1px solid #ddd;
  }
  & > td:first-child {
    text-align: left;
  }
  & > td:first-child {
    background-color: #f9f9f9;
    font-weight: 500;
  }
  & > td:first-child:hover {
    background-color: #eee;
  }
`;
export const Svg = styled.svg`
  width: 24px;
  height: 24px;
  cursor: pointer;
  display: block;
  margin-left: auto;
  margin-right: auto;
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
  display: block;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    color: red;
  }
`;
const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;
