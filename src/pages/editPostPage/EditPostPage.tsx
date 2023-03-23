import React, { useState } from "react";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { updateBlogPost } from "../../redux/user/memberSlice";
import { ActionSvg, FormWrapper, Wrapper } from "./EditPostPage.styled";

// interface Props {
//   onClose: () => void;
//   post: {
//     title: string;
//     body: string;
//   };
// }
interface Post {
  id: string;
  title: string;
  body: string;
  userId: string;
}
interface EditPostPageProps {
  onClose: () => void;
  post: any;
}

const EditPostPage: React.FC<EditPostPageProps> = ({ onClose, post }) => {
  // const [title, setTitle] = useState(post.title);
  // const [body, setBody] = useState(post.body);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleEditPost = () => {
    dispatch(
      updateBlogPost({
        title,
        body,
      }),
    );
    navigate("/");
    onClose();
  };
  return (
    <Wrapper>
      <FormWrapper>
        <div>
          <h1>Edit BLog Post</h1>
          <ActionSvg onClick={onClose}>
            <svg
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </ActionSvg>
        </div>
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

        <Button onClick={handleEditPost}>Edit user</Button>
      </FormWrapper>
    </Wrapper>
  );
};

export default EditPostPage;
