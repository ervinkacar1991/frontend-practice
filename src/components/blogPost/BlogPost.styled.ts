import styled from "styled-components";
import { Link } from "react-router-dom";

export const Svg = styled.svg`
  width: 24px;
  height: 24px;
  cursor: pointer;
  display: block;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    color: green;
  }
`;
export const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;
export const StyledBlogPostRow = styled("tr")`
  background-color: #ececec;
  &:not(:last-child) {
    border-bottom: 1px solid #ddd;
  }

  td {
    border: none;
    border-right: 1px solid gray;
  }
  &:hover {
    background-color: gray;
  }
`;
export const DeleteIconWrapper = styled.svg`
  width: 24px;
  height: 24px;
  cursor: pointer;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;

  &:hover {
    color: red;
  }
`;
export const AddIconWrapper = styled.svg`
  width: 24px;
  height: 24px;
  cursor: pointer;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;

  &:hover {
    color: #61d095;
  }
`;

export const TitleDeck = styled.td`
  padding: 10px;
  border: 1px solid gray;
  transition: background-color 0.2s ease-in-out;
`;
