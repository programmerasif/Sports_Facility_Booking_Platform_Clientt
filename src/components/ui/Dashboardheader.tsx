import { useAppSelector } from "@/redux/api/hook";
import { NavLink } from "react-router-dom";

const Dashboardheader = () => {
    const {user} = useAppSelector(state => state?.user);
    const today = new Date();
  
    const formattedDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
    
    return (
    <div className="bg-gray-50 flex justify-between items-center w-full shadow-xl py-1 md:py-0 px-2 md:px-4">
        <div className="py-6 hidden md:block">
            <div className="font-semibold">Today</div>
            <div className="text-sm">{formattedDate}</div>
        </div>
        <div className="bg-gray-200 flex justify-center items-center gap-5 rounded-full px-1 py-1">
            <NavLink to={'/dashboard'}><div className="rounded-full p-1 md:p-3 font-semibold bg-white cursor-pointer text-[#F7A400]">Dashboard</div></NavLink>
            
           <NavLink to={'/'}> <div className="rounded-full p-1 md:p-3 font-semibold cursor-pointer ">Website</div></NavLink>
        </div>
        <div className="flex justify-center items-center gap-5">
        <div>
        <div className="flex flex-col">
        <span className="font-semibold"> {user?.name?.slice(0,12)} </span>
        <span className="text-sm text-[#12143D]"> {user?.role =='admin' ? "Authority" : "Customer"} </span>
        </div>
        </div> 
        <div><img src={'https://i.ibb.co/fnfBTSN/Untitled-design-1.png'} alt="" className="w-8 md:w-12 rounded-full ring" /></div> 
        </div>
        </div>
    );
};

export default Dashboardheader;