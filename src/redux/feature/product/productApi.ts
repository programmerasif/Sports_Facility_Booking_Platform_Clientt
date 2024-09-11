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
      createProducts: builder.mutation({
          query: (data) => {
          
          if (!data?.token) {
            console.log('token not found');
            
          }
          
            return {
              url: `/facility`,
              method: "post",
              headers: {
                Authorization: `${data?.token}`,
              },
              body:data?.facility
            };
          },
        
        }),
      updateProducts: builder.mutation({
          query: (data) => {
          
          if (!data?.token) {
            console.log('token not found');
            
          }
          
            return {
              url: `/facility/${data.id}`,
              method: "put",
              headers: {
                Authorization: `${data?.token}`,
              },
              body:data?.updatedFacilityData
            };
          },
        
        }),
      deleteProducts: builder.mutation({
          query: (data) => {
            console.log(data?.token , data?.id);
          if (!data?.token) {
            console.log('token not found');
            
          }
          
          
            return {
              url: `/facility/${data?.id}`,
              method: "delete",
              headers: {
                Authorization: `${data?.token}`, 
                'Content-Type': 'application/json',  
            }
            };
          },
        
        }),
      getSingleProduct: builder.query({
          query: (id) => {
           
            
            return {
              url: `/facility/${id}`,
              method: "get",
            };
          },   
        }),
   
    
  }),
});

export const {
  useGetProductsQuery,
  useDeleteProductsMutation,
  useCreateProductsMutation,
  useUpdateProductsMutation,
 useGetSingleProductQuery
} = productApi;