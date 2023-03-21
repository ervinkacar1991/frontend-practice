import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Wrapper,
  CardItem,
  Title,
  Main,
  Detail,
  TitleWrapper,
  Button,
} from "./UserBlog.styled";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../hooks/useAppDispatch";

import { useTypedSelector } from "../../hooks/useTypedSelector";
import { fetchMembers, selectMembers } from "../../redux/user/memberSlice";
import { useDispatch } from "react-redux";

const UserBlog = () => {
  const { blogId } = useParams();
  const dispatch = useAppDispatch();
  console.log("blogId", blogId);
  const blogs = useTypedSelector(selectMembers);
  console.log("blogs", blogs);

  if (!blogs.length) {
    dispatch(fetchMembers());
  }

  const blog = useMemo(() => {
    if (blogId) {
      return blogs.find((blog) => blog.id === blogId);
    }
  }, [blogId, blogs]);

  return (
    <Wrapper>
      <CardItem>
        <TitleWrapper>
          <Link to="/">
            <Button style={{ padding: "10px", cursor: "pointer" }}>Back</Button>
          </Link>

          <Title>{blog?.title || "Title Placeholder"}</Title>
        </TitleWrapper>

        <Main>
          <p>{blog?.body}</p>
        </Main>
        <Detail>{blog?.datePosted}</Detail>
      </CardItem>
    </Wrapper>
  );
};

export default UserBlog;
