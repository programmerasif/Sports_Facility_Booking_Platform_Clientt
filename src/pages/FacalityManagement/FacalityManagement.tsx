/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink } from "@/components/ui/pagination";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useAppSelector } from "@/redux/api/hook";
import { useDeleteProductsMutation, useGetProductsQuery } from "@/redux/feature/product/productApi";
import { useState } from "react";
import AddModal from "./AddModal";
import UpdateModal from "./UpdateModal";
import Swal from "sweetalert2";



const FacilityManagement = () => {

    const [deleteFacility]  = useDeleteProductsMutation() 
    const {user} = useAppSelector(state => state?.user)
    const [page,setPage] = useState(1)

    const { data: Facility } = useGetProductsQuery( [
        { name: "page", value: page },
        { name: "limit", value: "4" },
        { name: "sort", value: 'name' },
      ],
    );
    
    const handlePaginatePrev = () =>{
      setPage(page - 1)
     }
    
    const handlePaginateNext = () =>{
      if (Facility?.data?.hasMore) {
        setPage(page + 1)
      }
      
     }
    

    const handelDelete = async(id:string,token:string) =>{
      
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async (result) => {
        if (result.isConfirmed) {
          await deleteFacility({id,token})
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
            Facility <span className="text-[#F7A400] ps-2"> Management</span>
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
          <button className="p-2 bg-[#dbe8f0] rounded-md ">
          

            <AddModal />
          </button>
        </div>
        <div className="bg-[#fbfcfd] shadow-sm min-h-[40vh]">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Image</TableHead>
                <TableHead>Price</TableHead>
                <TableHead className="text-start">Location</TableHead>
                <TableHead className="text-center">Status</TableHead>
                <TableHead className="text-start">Update</TableHead>
                <TableHead className="text-start">Remove</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Facility?.data?.facility?.map((item: any) => (
                <TableRow key={item?._id}>
                  <TableCell className="font-bold text-balance text-[#262626e5] w-[22%] bg-[#EBF5FB] rounded-br-full">
                    {item?.name}
                  </TableCell>
                  <TableCell>
                    <img
                      className="size-8 rounded-xl"
                      src={item?.image}
                      alt="product"
                    />
                  </TableCell>
                  <TableCell>
                    <span className="text-green-500 font-semibold">$</span>{" "}
                    {item?.pricePerHour} Pre-hour
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-row justify-start items-start gap-2">
                     {item?.location}
                    </div>
                  </TableCell>
  
                  <TableCell>
                    <div className="flex flex-row justify-center items-center gap-2 cursor-pointer">
                    {
                      item?.isDeleted ? <span className="text-red-500 font-semibold bg-red-100 px-2 rounded-md"> Removed</span> : <span className="text-green-500 font-semibold bg-green-100 px-2 rounded-md">Active</span>
                    }
                    </div>
                  </TableCell>
                  <TableCell>
                    <button className=" bg-green-100 px-3 py-1 rounded-md">
                   
                    <UpdateModal singleItem={item}/>
                    </button>
                  </TableCell>
                  <TableCell>
                    <button className={` font-semibold  px-3 py-1 rounded-md ${item?.isDeleted ? "disabled bg-gray-200" : "bg-red-100 text-red-500"}`} onClick={() => handelDelete(item?._id,user?.token as string)}> //todo
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                     <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
                     <path fillRule="evenodd" d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.133 2.845a.75.75 0 0 1 1.06 0l1.72 1.72 1.72-1.72a.75.75 0 1 1 1.06 1.06l-1.72 1.72 1.72 1.72a.75.75 0 1 1-1.06 1.06L12 15.685l-1.72 1.72a.75.75 0 1 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                    </button>
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
                 onClick={handlePaginatePrev}
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
                 !Facility?.data?.hasMore
                   ? "bg-gray-300 md:px-6 md:py-3 sm:py-2 px-3 text-sm rounded-full text-gray-100"
                   : "bg-white md:px-6 md:py-3 sm:py-2 px-3 text-sm text-black font-semibold rounded-full"
               } `}
               onClick={handlePaginateNext}
                disabled={!Facility?.data?.hasMore}
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

export default FacilityManagement;