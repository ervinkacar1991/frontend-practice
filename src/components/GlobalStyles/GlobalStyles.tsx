import React from "react";
import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = React.memo(
  createGlobalStyle`${css`
    * {
      margin: 0;
      box-sizing: border-box;
      padding: 0;
      border: 0;
      font-family: "Montserrat", sans-serif;
    }

    table {
      width: 55%;
      border-collapse: collapse;
      border-spacing: 0;
      margin-top: 50px;
      display: block;
      margin-right: auto;
      margin-left: auto;
    }
    th {
      padding: 15px;
      font-size: 18px;
      font-weight: 500;
      text-align: left;
    }
    th:first-child {
      text-align: left;
    }
    th:first-child {
      background-color: #f9f9f9;
      font-weight: 500;
    }
    th:first-child:hover {
      background-color: #eee;
    }
  `}`,
);
