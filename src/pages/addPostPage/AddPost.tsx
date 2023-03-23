import React from "react";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import { useNavigate } from "react-router-dom";

import { FormWrapper, Wrapper } from "./AddPostPage.styled";

const AddPost = () => {
  const navigate = useNavigate();

  // const addUser = () => {
  //   navigate("/");
  // };

  return (
    <Wrapper>
      <FormWrapper>
        <h1>Add BLog Post Page</h1>
        <br />
        <Input
          label="Title"
          inputProps={{ type: "text", placeholder: "Enter Title" }}
        />
        <br />
        <Input
          label="Body"
          inputProps={{ type: "text", placeholder: "Enter Body" }}
        />
        <br />
        <Input
          label="Date posted"
          inputProps={{ type: "text", placeholder: "Enter Body" }}
        />
        <Button>Add user</Button>
      </FormWrapper>
    </Wrapper>
  );
};

export default AddPost;
