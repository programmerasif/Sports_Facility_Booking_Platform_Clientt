

import { useGetSingleProductQuery } from "@/redux/feature/product/productApi"
import { useParams } from "react-router-dom"

const FacilityDetails = () =>{
    const id = useParams()
   
    const {data} = useGetSingleProductQuery(id)
   
    
   console.log(data?.data?.image);
   
    return(
        <div className="pt-24 h-full w-full mx-auto px-4 sm:px-8 md:px-10 lg:px-20 xl:px-32">
            <div className="flex flex-col lg:flex-row items-center lg:items-center mx-auto mt-8 mb-20 rounded-lg w-full gap-20 py-20" >
            
 
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0 flex justify-start border-r-4 border-gray-200">
    <img 
      src={data?.data?.image}
      alt="Product Image" 
      className="w-[85%] h-auto rounded-lg shadow-lg"
    />
  </div>

  
  <div className="lg:w-1/2 w-full flex flex-col justify-center items-start gap-4 bg-gradient-to-r from-[#2d3298] to-[#4a50c9]  h-[27rem]  px-5 rounded-md">
    <h2 className="text-2xl font-bold text-white">
        {
            data?.data?.name
        }
    </h2>
    <p className="text-gray-100"><strong>Location: </strong> 
    {
            data?.data?.location
        }
    </p>
    <p className="text-gray-100"><strong>Price: </strong>$ {data?.data?.pricePerHour} per hour</p>
    <p className="text-gray-100">
        {
           data?.data?.description
        }
    </p>
    
   
    <button className="mt-4 bg-gray-100 text-gray-900  py-2 px-6 rounded-lg hover:bg-gray-50 transition">
      Book Now
    </button>
  </div>

            </div>
        </div>
    )
}
export default FacilityDetails