import { baseApi } from "@/redux/api/baseApi";
import { TQueryParam } from "@/types/types";


const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // addProduct: builder.mutation({
    //   query: (product) => ({
    //     url: "/products/creat-product",
    //     method: "POST",
    //     body: product,
    //   }),
    // }),
    getAllBookings: builder.query({
      
        query: ({ token, args }) => {
          console.log(token ,"token ====>");
          
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
            url: "/bookings",
            method: "GET",
            params: params,
            headers: {
                Authorization: `Bearer ${token}`, 
                'Content-Type': 'application/json',  
                
            }
          };
        },
      
      }),
   
    
  }),
});

export const {
 useGetAllBookingsQuery
  
} = bookingApi;