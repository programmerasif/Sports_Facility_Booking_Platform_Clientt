
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
  } from "@/components/ui/pagination";
  import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import { useAppSelector } from "@/redux/api/hook";
import { useGetUserQuery } from "@/redux/feature/auth/authApi";
import { useState } from "react";
 
  
  const ManageUser = () => {
    const { user } = useAppSelector((state) => state?.user);
    const [page,setPage] = useState(1)
    const token = user?.token;

    const {data} = useGetUserQuery({
        token:token,
        args: [
          { name: "page", value: page },
          { name: "limit", value: "4" },
          { name: "sort", value: 'name' },
        ],
      })
  console.log(data?.data?.users);
  
  const handlePaginatePrev = () =>{
    setPage(page - 1)
   }
  
  
  const handlePaginateNext = () =>{
    if (data?.data?.hasMore) {
      setPage(page + 1)
    }
    
   }
  
    return (
      <div className="sm:px-6 lg:px-20 mt-20 md:mt-28 ">
        <div className="flex sm:flex-col md:flex-row justify-between items-center mb-10 border rounded-md p-2">
          <div className="lg:text-2xl font-semibold text-gray-700 flex justify-center items-center gap-2">
            <span className="text-[#12143D]">
              Users <span className="text-[#F7A400] ps-2"> Management</span>
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
                <TableHead>Phone Number</TableHead>
                <TableHead>Email</TableHead>
                <TableHead className="text-start">Account Created</TableHead>
                <TableHead className="text-center">Status</TableHead>
                
              </TableRow>
            </TableHeader>
            <TableBody>
              {data?.data?.users?.map((item: any) => (
                <TableRow key={item?._id}>
                  <TableCell className="font-bold text-balance text-[#262626e5] w-[22%] bg-[#EBF5FB] rounded-br-full">
                    {item?.name}
                  </TableCell>
                  <TableCell>
                    <img
                      className="size-8 rounded-xl"
                      src={item?.image}
                      alt="user"
                    />
                  </TableCell>
                  <TableCell>
                    
                   {`+88 ${item?.phone} `}
                  </TableCell>
                  <TableCell>
                    {item?.email} 
                  </TableCell>
                  <TableCell>
                  <span className="bg-[#EBF5FB] p-2 rounded-lg">
                    {new Date(item?.createdAt).toLocaleDateString("en-US", {
                      weekday: "short",
                      month: "short",
                      day: "numeric",
                    })}
                     </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-row justify-center items-center gap-2">
                      <span
                        className={`text-green-500 font-semibold ${
                          item?.isDeleted  && "text-red-500"
                        }`}
                      >
                        {item?.isDeleted ? "Blocked" : "Regular" } 
                        {item?.role == 'admin'? <sup className="text-xs text-gray-600 bg-green-200 p-1 rounded-xl">admin</sup> : "" } 
                      </span>
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
  };
  
  export default ManageUser;
