import React, { useState } from "react";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { updateBlogPost } from "../../redux/user/memberSlice";
import { ActionSvg, FormWrapper, Wrapper } from "./EditPostPage.styled";
import { BlogPost } from "../../data/data";

interface EditPostPageProps {
  onClose: () => void;
  post: BlogPost;
}

const EditPostPage: React.FC<EditPostPageProps> = ({ onClose, post }) => {
  const [editedPost, setEditedPost] = useState({
    title: post?.title,
    body: post?.body,
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  console.log({ post });

  const handleEditPost = () => {
    dispatch(
      updateBlogPost({
        ...post,
        ...editedPost,
      }),
    );

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
          value={editedPost.title}
          onChange={(e) =>
            setEditedPost({
              ...editedPost,
              title: e.target.value,
            })
          }
          inputProps={{
            type: "text",
            placeholder: "Update Title",
          }}
        />
        <br />
        <Input
          value={editedPost.body}
          onChange={(e) =>
            setEditedPost({
              ...editedPost,
              body: e.target.value,
            })
          }
          label="Body"
          inputProps={{
            type: "text",
            placeholder: "Update Body",
          }}
        />
        <br />

        <Button onClick={handleEditPost}>Edit user</Button>
      </FormWrapper>
    </Wrapper>
  );
};

export default EditPostPage;
