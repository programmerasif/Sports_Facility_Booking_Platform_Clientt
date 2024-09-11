import { baseApi } from "@/redux/api/baseApi";
import { TQueryParam } from "@/types/types";


const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
   
    getAllBookings: builder.query({
      
        query: ({ token, args }) => {
          console.log(token);
          
          
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
                Authorization: `${token}`, 
                'Content-Type': 'application/json',  
                
            }
          };
        },
      
      }),
    checkAvailableSlots: builder.mutation({
      
        query: ({ token, date,facilityId}) => {
          console.log(token);
          
        
          
          return {
            url: `check-availability/${facilityId}?date=${date}`,
            method: "GET",
            headers: {
                Authorization: `${token}`, 
                'Content-Type': 'application/json',  
                
            }
          };
        },
      
      }),
   
    
  }),
});

export const {
 useGetAllBookingsQuery,
 useCheckAvailableSlotsMutation
  
} = bookingApi;