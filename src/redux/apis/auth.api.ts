import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CreateUserRequest } from "../../types/dto/create-user-request";
import { LoginUserRequest } from "../../types/dto/login-user-request";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    //@TODO add env variable for baseQuery
    baseUrl: "http://localhost:3001/auth",
  }),
  endpoints: (build) => ({
    createUser: build.mutation<any, CreateUserRequest>({
      query: (createUserRequest) => ({
        url: "/signup",
        method: "POST",
        body: createUserRequest,
        credentials: "include",
      }),
    }),
    loginUser: build.mutation<any, LoginUserRequest>({
      query: (loginUserRequest) => ({
        url: "/login",
        method: "POST",
        body: loginUserRequest,
        credentials: "include",
      }),
    }),
    logoutUser: build.mutation<any, void>({
      query: () => ({
        url: "/logout",
        credentials: "include",
      }),
    }),
    validateUser: build.mutation<any, void>({
      query: () => ({
        url: "/validate",
        method: "GET",
        credentials: "include",
      }),
    }),
  }),
});

export const {
  useCreateUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useValidateUserMutation,
} = authApi;
