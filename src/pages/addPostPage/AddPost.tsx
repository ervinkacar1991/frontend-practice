import React, { useState } from "react";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { FormWrapper, Wrapper } from "./AddPostPage.styled";
import { addBlogPostHandler } from "../../redux/user/memberSlice";
import { v4 as uuidv4 } from "uuid";

const AddPost = () => {
  const { userId } = useParams();
  const [addedPost, setAddedPost] = useState<{
    id: string;
    userId: number;
    title: string;
    body: string;
    datePosted: string;
  }>({
    id: uuidv4(),
    userId: Number(userId),
    title: "",
    body: "",
    datePosted: "",
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const addPost = () => {
    dispatch(addBlogPostHandler(addedPost));
    navigate("/");
  };

  return (
    <Wrapper>
      <FormWrapper>
        <h1>Add Blog Post Page</h1>
        <br />
        <Input
          label="Title"
          value={addedPost.title}
          onChange={(e) => {
            setAddedPost({ ...addedPost, title: e.target.value });
          }}
          inputProps={{ type: "text", placeholder: "Enter Title" }}
        />
        <br />
        <Input
          label="Body"
          value={addedPost.body}
          onChange={(e) => {
            setAddedPost({ ...addedPost, body: e.target.value });
          }}
          inputProps={{ type: "text", placeholder: "Enter Body" }}
        />
        <br />
        <Input
          label="Date posted"
          value={addedPost.datePosted}
          onChange={(e) => {
            setAddedPost({ ...addedPost, datePosted: e.target.value });
          }}
          inputProps={{ type: "text", placeholder: "Enter Body" }}
        />
        <Button onClick={addPost}>Add user</Button>
      </FormWrapper>
    </Wrapper>
  );
};

export default AddPost;
