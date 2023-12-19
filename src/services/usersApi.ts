import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { T_User } from "../types/types";

export const userApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (builder) => ({
    getUsers: builder.query<T_User[], string>({
      query: () => `api/users`,
    }),
  }),
});

export const { useGetUsersQuery } = userApi;
