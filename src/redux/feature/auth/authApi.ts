import { TQueryParam } from "@/types/types";
import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      
      query: ({ token, args }) => {

          
        if (!token) {
          console.log('token missing');
          
        }
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        
        return {
          url: "/auth",
          method: "GET",
          params: params,
          headers: {
              Authorization: `${token}`, 
              'Content-Type': 'application/json',  
              
          }
        };
      },
    }),
    createUser: builder.mutation({
      query: (data) => ({
        url: "/auth/userSignup",
        method: "POST",
        body: data,
      }),
    }),
    createAdmin: builder.mutation({
      query: (data) => { 
        return {
          url: "/auth/userSignup",
          method: "POST",
          body: data?.userData,
          headers: {
            Authorization: `${data?.token}`,
          },
        }
      },
    }),
    login: builder.mutation({
      query: (data) => {
        
        
        return {
          url: "/auth/login",
          method: "POST",
          body:data
        }
      },
    }),
   
  }),
});

export const {
 useCreateUserMutation,
 useCreateAdminMutation,
 useLoginMutation,
 useGetUserQuery
  
} = authApi;