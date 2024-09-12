import { Dialog, DialogContent, DialogDescription, DialogHeader } from "@/components/ui/dialog";
import { useCreateBookingsMutation } from "@/redux/feature/Bookings/bookingApi";
import { DialogTrigger, DialogClose } from "@radix-ui/react-dialog";
import { useState } from "react";
interface PaymentModalProps {
  isAvailable: boolean;
  paymentData: {
    token: string;
    date: string;
    facilityId: string;
    startTime: string;
    endTime: string;
  };
}
const PaymentModal: React.FC<PaymentModalProps> = ({ isAvailable, paymentData }) => {
  // const { token, date, facilityId, startTime, endTime } = paymentData;
  const [payURL,setPayURL] = useState('')
 
 const [makePayment] = useCreateBookingsMutation()

 const handelPayment = async() =>{
  const res = await makePayment(paymentData)
  setPayURL(res?.data?.data?.paymentStatus?.payment_url);
  
 }
 
 
  return (
    <div className="w-[100%]">
      <Dialog>
        <DialogTrigger className="w-full">Select Slot</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            
            <button onClick={handelPayment} className={`text-center bg-[#4a50c9] text-gray-100 py-4 rounded-md mt-5 ${!isAvailable || payURL ? "hidden" : "flex justify-center items-center"}`}>Make your Payment</button>
            <div className="flex flex-col justify-center items-center">
              <span className="font-semibold">Click the to pay</span>
              <div className={`flex justify-end mt-4 ${isAvailable ? "hidden" : "flex"}`}>
            <DialogClose asChild>
            <a href={payURL} className="text-sm text-[#4a50c9] cursor-pointer text-center">{payURL}</a>
            </DialogClose>
          </div>
            
            </div>
            {
              !isAvailable && <DialogDescription className="text-center pt-4">
              Opps! Sorry this facility is not available time slot, or user booked recently, chose for another day.
            </DialogDescription>
            }
          </DialogHeader>
          {/* Close Button */}
          <div className={`flex justify-end mt-4 ${isAvailable ? "hidden" : "flex"}`}>
            <DialogClose asChild>
              <button className="px-4 py-2 bg-[#4a50c9] text-white rounded-md w-full">Close</button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PaymentModal;