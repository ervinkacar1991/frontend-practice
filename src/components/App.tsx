import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { GlobalStyles } from "./GlobalStyles/GlobalStyles";
import UserBlog from "../pages/UserBlog/UserBlog";
import HomePage from "../pages/homePage/HomePage";

const StyledWrapper = styled.div`
  padding: 24px;
`;

export const App = () => {
  return (
    <StyledWrapper>
      <GlobalStyles />

      <Routes>
        // move to homepage
        <Route path="/" element={<HomePage />} />
        <Route path="/blog-post/:blogId" element={<UserBlog />} />
      </Routes>
    </StyledWrapper>
  );
};
