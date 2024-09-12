import CommonFacality from "@/ComoneComponent/CommonFacality";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink } from "@/components/ui/pagination";
import { useGetProductsQuery } from "@/redux/feature/product/productApi";
import { useState } from "react";

const BookingPage = () =>{
    const [page,setPage] = useState(1)  
    const { data } = useGetProductsQuery([
        { name: "page", value: page },
        { name: "limit", value: "8" },
        { name: "sort", value: 'name' },
      ]);
      const handlePaginatePrev = () =>{
        setPage(page - 1)
       }
       
      
      const handlePaginateNext = () =>{
        if (data?.data?.hasMore) {
          setPage(page + 1)
        }
        
       }
    return (
     <div className="pt-36 mx-auto px-4 sm:px-8 md:px-10 lg:px-20 xl:px-32 ">
        <CommonFacality  facality={data}/>
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
    )
}
export default BookingPage