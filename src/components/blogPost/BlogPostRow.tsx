import React from "react";
import { BlogPost } from "../../data/data";
import { ActionSvg, SvgContainer } from "../table/tableRow/TableRow.styled";
import { StyledBlogPostRow, Svg, TitleDeck } from "./BlogPost.styled";
import { StyledLink } from "./BlogPost.styled";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { handleDeletePost } from "../../redux/user/memberSlice";

interface IProps {
  userBlogs: BlogPost[];
}

const BlogPostRow: React.FC<IProps> = ({ userBlogs }) => {
  const dispatch = useAppDispatch();

  const blogPostDeleteHandler = async (post: BlogPost) => {
    const data = await dispatch(handleDeletePost(post.id)).unwrap();
    console.log(data);
  };

  return (
    <>
      {userBlogs.map((blog) => (
        <StyledBlogPostRow key={`blogPost-${blog.id}`}>
          <td>
            <StyledLink to={`/blog-post/${blog.id} `}>
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
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </Svg>
            </StyledLink>
          </td>

          <TitleDeck colSpan={5}>{blog.id}</TitleDeck>

          <td>
            <ActionSvg onClick={() => blogPostDeleteHandler(blog)}>
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
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </ActionSvg>
          </td>
        </StyledBlogPostRow>
      ))}
    </>
  );
};

export default BlogPostRow;
