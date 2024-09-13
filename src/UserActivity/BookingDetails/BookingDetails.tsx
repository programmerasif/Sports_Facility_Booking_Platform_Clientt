import { getTodayDate } from "@/conostant";
import Calendar from "@/pages/Calander/Canalder";
import { useAppSelector } from "@/redux/api/hook";
import { useCheckAvailableSlotsMutation, useCheckedReqTimeMutation } from "@/redux/feature/Bookings/bookingApi";
import { useGetSingleProductQuery } from "@/redux/feature/product/productApi";
import {  useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import 'react-clock/dist/Clock.css';
// import PaymentModal from "@/pages/PaymentModal/PaymentModal";
// import PaymentModal from "@/pages/PaymentModal/PaymentModal";

const BookingDetails = () => {
    const [isOpen, setOpen] = useState(false);
    const { id } = useParams();
    const { data } = useGetSingleProductQuery(id);
    const [date, setDate] = useState(getTodayDate());
    const { user } = useAppSelector((state) => state?.user);
    const token = user?.token;
    const [checkAvailableSlot, { data: availableSlot }] = useCheckAvailableSlotsMutation();
    const [isSlotAvailable,{data:isSlotAvailableDB}] = useCheckedReqTimeMutation()
    const [selectedStartTime, setSelectedStartTime] = useState("10:00");
    const [selectedEndTime, setSelectedEndTime] = useState("11:00");
    const navigate = useNavigate();

    const handlePickDate = (selectedDate: Date) => {
        const time = new Date(selectedDate);
        time.setDate(time.getDate());

        const year = time.getFullYear();
        const month = String(time.getMonth() + 1).padStart(2, '0');
        const day = String(time.getDate()).padStart(2, '0');

        const formattedDate = `${year}-${month}-${day}`;
        setDate(formattedDate);
    };

    const handelSlotCheck = async () => {
        await checkAvailableSlot({ token, date, facilityId: id });
    };

    const handelSelectedDate = (slotStartTime: string, slotEndTime: string) => {
      
        setSelectedStartTime(slotStartTime);
        setSelectedEndTime(slotEndTime);
    };
    console.log(isSlotAvailableDB?.data?.available);
    

    const handleSubmit = async() => {
        console.log("Selected Start Time:", selectedStartTime);
        console.log("Selected End Time:", selectedEndTime);

        // Perform additional logic here with start and end times, like making an API request
        await isSlotAvailable({startTime:selectedStartTime,endTime: selectedEndTime, facilityId: id})
        navigate('/payment', { state: { slotDetails: { 
            token, 
            date, 
            facilityId: id, 
             startTime:selectedStartTime, 
               endTime:selectedEndTime,
               facilityDetails: data?.data
            } } });
    };
console.log(isSlotAvailableDB);


    return (
        <div className="pt-24 h-full w-full mx-auto px-4 sm:px-8 md:px-10 lg:px-20 xl:px-32">
            <div className="flex flex-col lg:flex-row items-center lg:items-center mx-auto mt-8 mb-20 rounded-lg w-full gap-20 py-50">

                <div className="lg:w-1/2 w-full mb-6 lg:mb-0 flex justify-start border-r-4 border-gray-200">
                    <div className="w-[85%]">
                        <Calendar handlePickDate={handlePickDate} />
                    </div>
                </div>

                <div className="lg:w-1/2 w-full flex flex-col justify-center items-start gap-4 h-[27rem] px-5 rounded-md">
                    <h2 className="text-2xl font-bold ">
                        {data?.data?.name}
                    </h2>
                    <p><strong>Location: </strong>{data?.data?.location}</p>
                    <p><strong>Price: </strong>$ {data?.data?.pricePerHour} per hour</p>
                    <p>{data?.data?.description}</p>

                    <button
                        className="mt-4 text-gray-100 py-2 px-6 rounded-lg transition bg-[#4a50c9]"
                        onClick={() => {
                            setOpen(true);
                            handelSlotCheck();
                        }}
                    >
                        Check available slot
                    </button>
                </div>
            </div>

            <div className={`flex flex-col justify-center items-center gap-10 ${isOpen ? "block" : "hidden"}`}>
                <h5 className="flex justify-start items-start gap-5 text-2xl font-bold pb-10">
                    <span className="text-[#F7A400]">Available Slots for :</span>
                    <span className="text-[#4a50c9]">{new Date(date).toString().slice(0, 15)}</span>
                </h5>

                <div className="flex justify-center items-start gap-10 bg-[#EBF5FB] p-20">
                    <div>
                        <span className="text-xl font-semibold">Select your slot</span>
                        <div className="grid grid-cols-3 gap-5 pt-5">
                            {availableSlot?.data?.map((slot: { startTime: string, endTime: string }, ind: number) => (
                                <div
                                    key={ind}
                                    className="flex justify-center items-center gap-2 cursor-pointer bg-[#4a50c9] p-4 rounded-md text-gray-100"
                                    onClick={() => handelSelectedDate(slot.startTime, slot.endTime)}
                                >
                                    <span><span className="font-semibold">Start: </span> {slot.startTime}</span>
                                    <span>-</span>
                                    <span><span className="font-semibold">End: </span> {slot.endTime}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <span className="text-xl font-semibold">Manually type your Booking Time</span>
                        <div className="flex flex-col items-center justify-center gap-5 mt-4">
                            {/* Start Time Picker */}
                            <div className="w-full">
                                <label className="block text-gray-600 mb-2 font-semibold">
                                    Start Time:
                                </label>
                                <TimePicker
                                          onChange={(time: string | null) => time && setSelectedStartTime(time)}
                                          value={selectedStartTime}
                                         disableClock={false}
                                        format="h:mm a"
                                         className="text-lg p-3 border border-gray-300 rounded-lg w-full"
                                    />
                            </div>

                            {/* End Time Picker */}
                            <div className="w-full">
                                <label className="block text-gray-600 mb-2 font-semibold">
                                    End Time:
                                </label>
                                <TimePicker
                                    onClick={() => {
                                        console.log("End Time Input Clicked");
                                    }}
                                    onChange={(time) =>time && setSelectedEndTime(time)}
                                    value={selectedEndTime}
                                    disableClock={false}
                                    format="h:mm a"
                                    className="text-lg p-3 border border-gray-300 rounded-lg w-full"
                                />
                                
                            </div>

                            {/* Submit Button */}
                            <NavLink to={'/payment'}
                                className="mt-4 text-gray-100 py-2 px-6 rounded-lg w-full transition bg-[#4a50c9]"
                                onClick={handleSubmit}
                            >
                               Select slot
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default BookingDetails;
