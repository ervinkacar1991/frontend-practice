import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { GlobalStyles } from "./GlobalStyles/GlobalStyles";
import UserBlog from "../pages/UserBlog/UserBlog";
import HomePage from "../pages/homePage/HomePage";
import AddPost from "../pages/addPostPage/AddPost";

const StyledWrapper = styled.div`
  padding: 24px;
`;

export const App = () => {
  return (
    <StyledWrapper>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog-post/:blogId" element={<UserBlog />} />
        <Route path="/:userId/add-post" element={<AddPost />} />
      </Routes>
    </StyledWrapper>
  );
};
