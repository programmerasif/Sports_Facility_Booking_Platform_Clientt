/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink } from "@/components/ui/pagination";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import ViewDetailsModal from "@/pages/ViewDetailsModal/ViewDetailsModal";

import { useAppSelector } from "@/redux/api/hook";
import {useCancelBookingMutation, useUsersBookingsQuery } from "@/redux/feature/Bookings/bookingApi";
import { useState } from "react";
import Swal from "sweetalert2";


const ManageUsersBooking = () =>{
    const { user } = useAppSelector((state) => state?.user);
    const token = user?.token;
    const [page,setPage] = useState(1)  
    const {data} = useUsersBookingsQuery({
    token:token,
    args: [
      { name: "page", value: page },
      { name: "limit", value: "4" },
      { name: "sort", value: 'name' },
    ],
  });

const [cancelBooking] = useCancelBookingMutation()
  const handlePaginatePrev = () =>{
    setPage(page - 1)
   }
   
  
  const handlePaginateNext = () =>{
    if (data?.data?.hasMore) {
      setPage(page + 1)
    }
    
   }
  const handelCancel = async(id:string) =>{
  
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async(result) => {
        if (result.isConfirmed) {
            await cancelBooking({token,id})
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });  
  }
  
    return (
        <div className="sm:px-6 lg:px-20 mt-20 md:mt-28 ">
          <div className="flex sm:flex-col md:flex-row justify-between items-center mb-10 border rounded-md p-2">
            <div className="lg:text-2xl font-semibold text-gray-700 flex justify-center items-center gap-2">
              <span className="text-[#12143D]">
               Your <span className="text-[#F7A400] ps-2"> Booking</span>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6 text-[#F7A400]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </span>
            </div>
            
          </div>
          <div className="bg-[#fbfcfd] shadow-sm min-h-[40vh]">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Image</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead className="text-start">Appoint Date</TableHead>
                  <TableHead className="text-center">Status</TableHead>
                  <TableHead className="text-center">View Details</TableHead>
                  <TableHead className="text-center">Cancel Booking</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data?.data.facility?.map((item: any) => (
                  <TableRow key={item?._id}>
                    <TableCell className="font-bold text-balance text-[#262626e5] w-[22%] bg-[#EBF5FB] rounded-br-full">
                      {item?.facility?.name}
                    </TableCell>
                    <TableCell>
                      <img
                        className="size-8 rounded-xl"
                        src={item?.facility?.image}
                        alt="product"
                      />
                    </TableCell>
                    <TableCell>
                      <span className="text-green-500 font-semibold">$</span>{" "}
                      {item?.payableAmount} Pre-hour
                    </TableCell>
                    <TableCell>
                      {item?.startTime} to {item?.endTime}
                    </TableCell>
                    <TableCell>
                      {new Date(item?.date).toLocaleDateString("en-US", {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                      })}
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-row justify-center items-center gap-2">
                        <span
                          className={`text-green-500 font-semibold ${
                            item?.isBooked != "confirmed" && "text-red-500"
                          }`}
                        >
                          {item?.isBooked}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="font-bold text-balance text-[#262626e5] bg-[#EBF5FB] py-2 text-gray-500 flex justify-center items-center rounded-md">
            
                      <ViewDetailsModal modalData={{status:item?.isBooked,price:item?.payableAmount,description:item?.facility.description,img:item?.facility?.image,name:item?.facility?.name}}/>
                      </div>
                    </TableCell>
                   
                   <TableCell>
                      <div onClick={()=>handelCancel(item._id)} className="font-bold text-balance text-[#262626e5] bg-red-100 py-2 text-red-500 flex justify-center items-center rounded-md">
            
                        <button className="">Cancel Booking</button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="pt-8 ">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <button
                  className={`${
                    page === 1
                     ? "bg-gray-300 md:px-6 md:py-3 sm:py-2 px-3 text-sm rounded-full text-gray-100"
                     : "bg-white md:px-6 md:py-3 sm:py-2 px-3 text-sm text-black font-semibold rounded-full"
                  } `}
                 onClick={() => handlePaginatePrev()}
                 disabled={page === 1}
                  >
                    Previous
                  </button>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">{}</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    {page}
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">{}</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                 <button
                 className={`${
                   !data?.data?.hasMore
                     ? "bg-gray-300 md:px-6 md:py-3 sm:py-2 px-3 text-sm rounded-full text-gray-100"
                     : "bg-white md:px-6 md:py-3 sm:py-2 px-3 text-sm text-black font-semibold rounded-full"
                 } `}
                 onClick={handlePaginateNext}
                  disabled={!data?.data?.hasMore}
                  >
                    Next
                  </button> 
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      );
}
export default ManageUsersBooking