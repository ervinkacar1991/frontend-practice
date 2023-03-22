import React from "react";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";

import { FormWrapper } from "./AddPostPage.styled";

const AddPost = () => {
  return (
    <FormWrapper>
      <Input
        label="Title"
        inputProps={{ type: "text", placeholder: "Enter Title" }}
      />
      <br />
      <Input
        label="Body"
        inputProps={{ type: "text", placeholder: "Enter Body" }}
      />
      <Input
        label="Date posted"
        inputProps={{ type: "text", placeholder: "Enter Body" }}
      />
      <Button></Button>
    </FormWrapper>
  );
};

export default AddPost;
