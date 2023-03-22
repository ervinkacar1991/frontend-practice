import React from "react";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";

import { FormWrapper, Wrapper } from "./editPostPage.styled";

const EditPostPage = () => {
  return (
    <Wrapper>
      <FormWrapper>
        <h1>Edit BLog Post</h1>
        <br />
        <Input
          label="Title"
          inputProps={{ type: "text", placeholder: "Update Title" }}
        />
        <br />
        <Input
          label="Body"
          inputProps={{ type: "text", placeholder: "Update Body" }}
        />
        <br />

        <Button>Edit user</Button>
      </FormWrapper>
    </Wrapper>
  );
};

export default EditPostPage;
