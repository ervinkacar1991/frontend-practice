import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { deleteUser, getUsers, User } from "../../data/data";
import { RootState } from "../store";

export const fetchUsers = createAsyncThunk<User[]>(
  "users/fetchUsers",
  async () => {
    const data = await getUsers();
    return data;
  },
);

export const handleDeleteUser = createAsyncThunk(
  "user/deleteUser",
  async (userId: number) => {
    await deleteUser(userId);
    const data = await getUsers();

    return data;
  },
);

export interface UserState {
  userList: User[];
}

const initialState = {
  userList: [],
} as UserState;

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // TODO: Add any needed reducers here
    // myAwesomeReducer() {}
  },
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, { payload }) => {
      state.userList.push(...payload);
    });
    builder.addCase(handleDeleteUser.fulfilled, (state, action) => {
      // console.log(state.userList.length);
      state.userList = action.payload;
    });
  },
});

// TODO: Export any redux actions if needed
// export const { myAwesomeReducer } = userSlice.actions;

export default userSlice.reducer;

export const selectUsers = (state: RootState) => state.user.userList;
