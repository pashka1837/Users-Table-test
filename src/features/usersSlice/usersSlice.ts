import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { T_FilterByField, T_ReturnData, T_User } from "../../types/types";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (page: string) => {
    const response = await fetch(`/api/users?page=${page}`);
    return (await response.json()) as T_ReturnData;
  }
);

type CounterState = {
  users: T_User[];
  filterByFileld: T_FilterByField;
  search: string;
  totalPages: number;
  curPage: number;
  isLoading: boolean;
  isError: boolean;
  error: string;
};

const initialState: CounterState = {
  users: [],
  filterByFileld: {
    id: false,
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
  },
  search: "",
  totalPages: 0,
  curPage: 1,
  isLoading: false,
  isError: false,
  error: "",
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUsers: (state, action: PayloadAction<T_User[]>) => {
      state.users = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action: PayloadAction<T_ReturnData>) => {
        const { users, totalPages } = action.payload;
        state.users = users;
        state.totalPages = totalPages;
        state.isLoading = false;
      }
    );
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message!;
      console.log(action.error);
    });
  },
});

export const { addUsers } = usersSlice.actions;

export default usersSlice.reducer;
