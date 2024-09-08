import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (data) => ({
        url: "/auth/userSignup",
        method: "POST",
        body: data,
      }),
    }),
    createAdmin: builder.mutation({
      query: (data) => {
        console.log(data.token);
        
        return {
          url: "/auth/userSignup",
          method: "POST",
          body: data?.userData,
          headers: {
            Authorization: `Bearer ${data?.token}`,
          },
        }
      },
    }),
    login: builder.mutation({
      query: (data) => {
        console.log(data);
        
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
 useLoginMutation
  
} = authApi;