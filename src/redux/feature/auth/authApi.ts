// import { TQueryParam } from "@/types/types";
import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    creatUser: builder.mutation({
      query: (data) => ({
        url: "/auth/signup",
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body:data
      }),
    }),
   
  }),
});

export const {
 useCreatUserMutation,
 useLoginMutation
  
} = authApi;