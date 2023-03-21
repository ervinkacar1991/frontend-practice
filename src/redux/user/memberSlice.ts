import { getMembers, BlogPost, deleteBlogPost } from "../../data/data";
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
  },
});

export default memberSlice.reducer;

export const selectMembers = (state: RootState) => state.member.blogs;
