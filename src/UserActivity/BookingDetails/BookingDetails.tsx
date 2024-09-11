import { BottomGradient } from "@/components/ui/BottomGradient"
import { Input } from "@/components/ui/input"
import { LabelInputContainer } from "@/components/ui/LabelInputContainer"
import Calendar from "@/pages/Calander/Canalder"
import { useAppSelector } from "@/redux/api/hook"
import { useCheckAvailableSlotsMutation} from "@/redux/feature/Bookings/bookingApi"
import { useGetSingleProductQuery } from "@/redux/feature/product/productApi"
import { dateFormValues } from "@/types/types"
import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { useParams } from "react-router-dom"
import { Label } from "recharts"

const BookingDetails = () =>{
    const [isOpen,setOpen] = useState(false)
    const {id}= useParams()
    const {data} = useGetSingleProductQuery(id)
    const [date,setDate] = useState('')
    const { user } = useAppSelector((state) => state?.user);
    const token = user?.token;
    const [checkAvailableSlot,{data:availableSlot}] = useCheckAvailableSlotsMutation()
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<dateFormValues>();
    

    
const handlePickDate = (date: Date) => {
  
  const time = new Date(date);
 
  time.setDate(time.getDate() );
  
  const year = time.getFullYear();
  const month = String(time.getMonth() + 1).padStart(2, '0');
  const day = String(time.getDate()).padStart(2, '0');
  
  const formattedDate = `${year}-${month}-${day}`;
  
  setDate(formattedDate);
};
    const handelSlotCheck = async() =>{
      await checkAvailableSlot({token,date,facilityId:id})   
    }
    const handelSelectedDate = (startTime,endTime) =>{
        console.log(startTime,endTime);
        
    }
    
    
    const onSubmit: SubmitHandler<dateFormValues> = async (data) => {
        console.log(data);
        
        
      };
    return(
        <div className="pt-24 h-full w-full mx-auto px-4 sm:px-8 md:px-10 lg:px-20 xl:px-32">
        <div className="flex flex-col lg:flex-row items-center lg:items-center mx-auto mt-8 mb-20 rounded-lg w-full gap-20 py-50" >
        

        <div className="lg:w-1/2 w-full mb-6 lg:mb-0 flex justify-start border-r-4 border-gray-200">
<div className="w-[85%]">
<Calendar handlePickDate={handlePickDate} />
</div>
</div>


<div className="lg:w-1/2 w-full flex flex-col justify-center items-start gap-4   h-[27rem]  px-5 rounded-md">
<h2 className="text-2xl font-bold ">
    {
        data?.data?.name
    }
</h2>
<p className=""><strong>Location: </strong> 
{
        data?.data?.location
    }
</p>
<p className=""><strong>Price: </strong>$ {data?.data?.pricePerHour} per hour</p>
<p className="">
    {
       data?.data?.description
    }
</p>


<button className="mt-4  text-gray-100  py-2 px-6 rounded-lg transition bg-[#4a50c9]" onClick={() => {
    setOpen(true) ,handelSlotCheck()
}}>
  Check available slot
</button>
</div>

        </div>
        <div className={` flex flex-col justify-center items-center gap-10 ${isOpen ? "block" : "hidden"}`}>
        <h5 className=" flex justify-start items-start gap-5 text-2xl font-bold pb-10 "><span className="text-[#F7A400]">Available Slots for : </span>  <span className="text-[#4a50c9]">{new Date(date).toString().slice(0,15)}</span></h5>
           <div  className="flex justify-center items-start gap-10 bg-[#EBF5FB] p-20">
            <div>
            <span className="text-xl font-semibold">Select your slot</span>
            <div className="grid grid-cols-3 gap-5 pt-5">
            {
                availableSlot?.data?.map((slot:{startTime:string, endTime:string},ind:number) => (
                    
                        <div key={ind} className="flex justify-center items-center gap-2 bg-[#4a50c9] p-4 rounded-md text-gray-100" onClick={() => handelSelectedDate(slot.startTime,slot.endTime)}> 
                        <span> <span className="font-semibold">Start: </span> {slot.startTime}</span>
                        <span>-</span>
                        <span><span className="font-semibold">End: </span> {slot.endTime}</span>
                        
                    </div>
                ))
            }
            </div>
            </div>
            <div> 
            <span className="text-xl font-semibold"> Manually type your Booking Time</span>
            <div>
            <form className="my-8 flex flex-col gap-10  rounded-md mt-20" onSubmit={handleSubmit(onSubmit)}>
            

            <LabelInputContainer>
                <Label htmlFor="startTime">Start Date</Label>
                <Input
                className="bg-white"
                  id="startTime"
                  placeholder="startTime"
                  type="text"
                  {...register("startTime", { required: "First name is required" })}
                />
                {errors.startTime && <p className="text-red-600">{errors.startTime.message}</p>}
              </LabelInputContainer>
            <LabelInputContainer>
                <Label htmlFor="endTime">End Time</Label>
                <Input
                className="bg-white"
                  id="endTime"
                  placeholder="endTime"
                  type="text"
                  {...register("endTime", { required: "First name is required" })}
                />
                {errors.endTime && <p className="text-red-600">{errors.endTime.message}</p>}
              </LabelInputContainer>

            <button
              className="bg-gradient-to-br relative group/btn bg-[#24287a] w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              Set Time &rarr;
              <BottomGradient />
            </button>
          </form>
            </div>
            </div>
           </div>
        </div>
        </div>
        )
}
export default BookingDetails