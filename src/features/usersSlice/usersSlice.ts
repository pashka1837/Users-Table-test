import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CounterState, T_ReturnData } from "../../types/types";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (page: string) => {
    const response = await fetch(`/api/users?page=${page}`);
    return (await response.json()) as T_ReturnData;
  }
);

const initialState: CounterState = {
  users: [],
  filterByFileld: {
    _id: "min",
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
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setFilter: (state, action: PayloadAction<string>) => {
      const key = action.payload;
      if (state.filterByFileld[key])
        state.filterByFileld[key] =
          state.filterByFileld[key] === "min" ? "max" : "min";
      else state.filterByFileld = { [`${key}`]: "min" };
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.curPage = action.payload;
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

export const { setSearch, setFilter, setPage } = usersSlice.actions;

export default usersSlice.reducer;
