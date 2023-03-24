import {
  getMembers,
  BlogPost,
  deleteBlogPost,
  editBlogPost,
} from "../../data/data";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const fetchMembers = createAsyncThunk<BlogPost[]>(
  "members/fetchMembers",
  async () => {
    const blogPostData = await getMembers();
    return blogPostData;
  },
);
export const handleDeletePost = createAsyncThunk(
  "post/deletePost",
  async (postId: string) => {
    await deleteBlogPost(postId);
    const data = await getMembers();

    return data;
  },
);

export const updateBlogPost = createAsyncThunk(
  "blogPosts/updateBlogPost",
  async (data: Omit<BlogPost, "id">) => {
    const blogPosts = await getMembers();
    const index = blogPosts.findIndex((post) => post.userId === data.userId);
    if (index !== -1) {
      const response = await editBlogPost(blogPosts[index].id, data);
      console.log("sdadsaD", { response });
      return response;
    } else {
      throw new Error("Blog post not found");
    }
  },
);

export interface MemberState {
  blogs: BlogPost[];
}

const initialMemberState = {
  blogs: [],
} as MemberState;

export const memberSlice = createSlice({
  name: "member",
  initialState: initialMemberState,
  reducers: {
    // TODO: Add any needed reducers here
    // myAwesomeReducer() {}
  },
  extraReducers(builder) {
    builder.addCase(fetchMembers.fulfilled, (state, { payload }) => {
      state.blogs.push(...payload);
    });
    builder.addCase(handleDeletePost.fulfilled, (state, action) => {
      state.blogs = action.payload;
    });
    builder.addCase(updateBlogPost.fulfilled, (state, action) => {
      const index = state.blogs.findIndex(
        (post) => post.id === action.payload.id,
      );
      if (index !== -1) {
        state.blogs[index] = action.payload;
      }
    });
  },
});

export default memberSlice.reducer;

export const selectMembers = (state: RootState) => state.member.blogs;
