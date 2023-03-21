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
  border: 2px solid green;
  height: 100px;

  td {
    border: none;
  }
`;
