import { TQueryParam } from "@/types/types";
import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
   
    getProducts: builder.query({
        query: (args) => {
        
          const params = new URLSearchParams();
  
          if (args) {
            args.forEach((item: TQueryParam) => {
              params.append(item.name, item.value as string);
            });
          }
         
          
          return {
            url: `/facility?${params.toString()}`,
            method: "GET",
          };
        },
      
      }),
      deleteProducts: builder.mutation({
          query: (data) => {
          
          if (!data?.token) {
            console.log('token not found');
            
          }
          
            return {
              url: `/facility/${data?.id}`,
              method: "delete",
              headers: {
                Authorization: `${data?.token}`,
              },
            };
          },
        
        }),
   
    
  }),
});

export const {
  useGetProductsQuery,
  useDeleteProductsMutation
} = productApi;