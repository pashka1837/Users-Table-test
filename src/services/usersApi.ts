import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { T_ReturnData } from "../types/types";

export const userApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (builder) => ({
    getUsers: builder.query<T_ReturnData, string | void>({
      query: (page: string) => ({
        url: `api/users?page=${page}`,
      }),
      transformResponse: (response: T_ReturnData) => response,
    }),
  }),
});

export const { useGetUsersQuery } = userApi;
