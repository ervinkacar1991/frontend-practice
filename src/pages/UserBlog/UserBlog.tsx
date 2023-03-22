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
  Svg,
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
          <Title>{blog?.title || "Title Placeholder"}</Title>
        </TitleWrapper>

        <Main>
          <p>{blog?.body}</p>
        </Main>
        <Detail>
          <Link to="/">
            <Button style={{ padding: "10px", cursor: "pointer" }}>Back</Button>
          </Link>
          <div>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
              />
            </Svg>
          </div>
          <div>{blog?.datePosted}</div>
        </Detail>
      </CardItem>
    </Wrapper>
  );
};

export default UserBlog;
