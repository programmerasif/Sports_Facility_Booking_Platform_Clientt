

import { useAppSelector } from "@/redux/api/hook"
import { useGetSingleProductQuery } from "@/redux/feature/product/productApi"
import { useParams,useNavigate } from "react-router-dom"
import Swal from "sweetalert2"


const FacilityDetails = () =>{
    const {id} = useParams()
    const {data} = useGetSingleProductQuery(id)
    const navigate = useNavigate();
    const { user } = useAppSelector((state) => state?.user);
    const token = user?.token;
   
    
   console.log(data?.data?.image);
   const handleBooking = () => {
    
    if (token) {
      
      navigate(`/booking-details/${data?.data?._id}`);
    } else {
      Swal.fire({
        title: "Please Sign-in or Sign-up",
        text: "To Book this Facility You have to Login First",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate(`/login`);
        }
      });
      
    }
  };
   
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

  
  <div className="lg:w-1/2 w-full flex flex-col justify-center items-start gap-4   h-[27rem]  px-5 rounded-md">
    <h2 className="text-2xl font-bold text-gray-900">
        {
            data?.data?.name
        }
    </h2>
    <p className="text-gray-900"><strong>Location: </strong> 
    {
            data?.data?.location
        }
    </p>
    <p className="text-gray-900"><strong>Price: </strong>$ {data?.data?.pricePerHour} per hour</p>
    <p className="text-gray-900">
        {
           data?.data?.description
        }
    </p>
    
   
    <button onClick={handleBooking}  className="mt-4 bg-[#4a50c9] text-gray-100  py-2 px-6 rounded-lg hover:bg-[#656acc] transition">
      Book Now
    </button>
  </div>

            </div>
        </div>
    )
}
export default FacilityDetails