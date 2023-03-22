import styled from "styled-components";
import { Link } from "react-router-dom";

export const Svg = styled.svg`
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin-left: 15px;
  &:hover {
    color: green;
  }
`;
export const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;
export const StyledBlogPostRow = styled("tr")`
  border: 1px solid gray;
  height: auto;

  td {
    border: none;
  }
`;
export const TitleDeck = styled.td`
  border: 1px solid gray;
  background-color: #61d095;
  padding: 20px;
  &:hover {
    background-color: #48bf84;
  }
`;
