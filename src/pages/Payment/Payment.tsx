import { useCreateBookingsMutation } from "@/redux/feature/Bookings/bookingApi";
import { useLocation } from "react-router-dom";
import LoadingComponent from "../FacalityManagement/LoadingComponent";
import { useState } from "react";


const Payment = () =>{
    const location = useLocation();
    const slotDetails = location.state?.slotDetails;
    const [makePayment] = useCreateBookingsMutation()
    const [isLoading,setLoading] = useState(false)
    const handlePayment = async () => {
        try {
            setLoading(true)
            const res = await makePayment({ token:slotDetails?.token, date:slotDetails?.date,facilityId:slotDetails?.facilityId,startTime:slotDetails?.startTime,endTime:slotDetails?.endTime})
            setLoading(false)
            // Extract the payment link from the response
            const paymentLink = res?.data?.data?.paymentStatus?.payment_url;
    
            if (paymentLink) {
                // Navigate to the payment link in the same tab
                window.location.href = paymentLink;
            } else {
                console.error('Payment link is not available.');
            }
        } catch (error) {
            console.error('Payment failed:', error);
        }
    };
    
    return(
        <div className="pt-20 w-full mx-auto px-4 sm:px-8 md:px-10 lg:px-20 xl:px-32">
            
        <div className="flex flex-col justify-between items-center ">
            {/* left side */}
            <div className="lg:w-1/2 w-full flex flex-col justify-center items-start gap-4   h-[27rem]  px-5 rounded-md">
    <h2 className="text-2xl font-bold text-gray-900">
        {
            slotDetails?.facilityDetails?.name
        }
    </h2>
    <p className="text-gray-900"><strong>Location: </strong> 
    {
            slotDetails?.facilityDetails?.location
        }
    </p>
    <p className="text-gray-900"><strong>Price: </strong>$ {slotDetails?.facilityDetails?.pricePerHour} per hour</p>
    <p className="text-gray-900">
        {
           slotDetails?.facilityDetails?.description
        }
    </p>
  </div>
            {/* Right side  */}
            <div className=" w-full xl:w-[50%] mx-auto bg-[#EBF5FB] shadow-lg rounded-lg p-6 space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">Payment Details</h2>

            <div className="flex flex-col md:flex-row justify-between space-y-2 md:space-y-0">
                <div>
                    <p className="text-gray-500">Product Name:</p>
                    <p className="text-lg font-semibold text-gray-900">Tennis Court Booking</p>
                </div>
                <div>
                    <p className="text-gray-500">Amount to Pay:</p>
                    <p className="text-lg font-semibold text-gray-900">$50</p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between space-y-2 md:space-y-0">
                <div>
                    <p className="text-gray-500">Start Time:</p>
                    <p className="text-lg font-semibold text-gray-900">10:00 AM</p>
                </div>
                <div>
                    <p className="text-gray-500">End Time:</p>
                    <p className="text-lg font-semibold text-gray-900">12:00 PM</p>
                </div>
            </div>

            <button onClick={handlePayment} className="w-full py-3 px-4 bg-[#4a50c9] hover:bg-[#4a50c9ea] duration-300 text-white font-bold rounded-lg transition-all ">
                Proceed to Payment
            </button>
        </div>
        </div>
        {
            isLoading && <LoadingComponent />
          }
        </div>
    )
}
export default Payment