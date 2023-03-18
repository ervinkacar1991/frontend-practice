import React from "react";
import { Svg } from "./BlogPost.styled";

const BlogPost = () => {
  return (
    <tr>
      <td>
        <Svg></Svg>
      </td>
      <td>Date posted</td>
      <td>Title</td>
      <td>Body</td>
    </tr>
  );
};

export default BlogPost;
