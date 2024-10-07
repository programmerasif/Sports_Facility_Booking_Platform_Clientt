import { baseApi } from "@/redux/api/baseApi";
import { TQueryParam } from "@/types/types";


const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
   
    getAllBookings: builder.query({
      
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
    createBookings: builder.mutation({
      
        query: ({ token, date,facilityId,startTime,endTime}) => {
          
          
          
          return {
            url: `bookings`,
            method: "post",
            body:{
              date,
              startTime:startTime,
              endTime:endTime,
              facility:facilityId
          },
            headers: {
                Authorization: `${token}`, 
                'Content-Type': 'application/json',  
                
            }
          };
        },
      
      }),
    checkedReqTime: builder.mutation({
      
        query: ({  date,facilityId,startTime,endTimes}) => {
          
          
          return {
            url: `checkSlotAvailableOrNot`,
            method: "post",
            body:{
              date,
              startTime:startTime,
              endTime:endTimes,
              facility:facilityId
          }
          };
        },
      
      }),
    usersBookings: builder.query({
      
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
          url: "bookings/user",
          method: "GET",
          params: params,
          headers: {
              Authorization: `${token}`, 
              'Content-Type': 'application/json',  
              
          }
        };
      },
    
    }),
    cancelBooking: builder.mutation({
      
      query: ({ token,id}) => {
      

        
        return {
          url: `/bookings/${id}`,
          method: "delete",
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
 useCheckAvailableSlotsMutation,
 useCreateBookingsMutation,
 useCheckedReqTimeMutation,
 useUsersBookingsQuery,
 useCancelBookingMutation
  
} = bookingApi;