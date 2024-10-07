import CommonFacality from "@/ComoneComponent/CommonFacality";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { useGetProductsForBookingQuery } from "@/redux/feature/product/productApi";
import { useState } from "react";
import { useForm } from "react-hook-form";

// Define the type for form inputs
interface SearchForm {
  search: string;
}

const BookingPage = () => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchData] = useState('')
  

  // Fetch data from API, including pagination and search terms
  const { data, isLoading} =  useGetProductsForBookingQuery({
    search: searchTerm,
    page,
    limit: 8,
  },
  {
    pollingInterval: 1000,
  });

  const handlePaginatePrev = () => {
    setPage(page - 1);
  };

  const handlePaginateNext = () => {
    if (data?.data?.hasMore) {
      setPage(page + 1);
    }
  };

  // Using useForm with the defined type
  const { register, handleSubmit } = useForm<SearchForm>();

  // Correct the type of 'data' to be of type 'SearchForm'
  const onSubmit = (data: SearchForm) => {
    
    setSearchData(data.search)
    // Perform search logic or any other action with the data
  };

  return (
    <div className="pt-36 mx-auto px-4 sm:px-8 md:px-10 lg:px-20 xl:px-32">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mb-8 w-full  flex justify-center"
      >
        <input
          {...register("search")}
          type="text"
          placeholder="Search by name, location..."
          className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline lg:w-2/3"
        />
        <button
          type="submit"
          className="ml-4 bg-[#12143D] text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline"
        >
          Search
        </button>
      </form>

      <CommonFacality facality={data} isLoading={isLoading}/>

      <div className="pt-8">
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

export default BookingPage;