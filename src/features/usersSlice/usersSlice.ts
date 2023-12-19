import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { T_User } from "../../types/types";

type CounterState = {
  users: T_User[];
};

const initialState: CounterState = {
  users: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUsers: (state, action) => {
      console.log(state.users);
    },
  },
});

export const { addUsers } = usersSlice.actions;

export default usersSlice.reducer;
