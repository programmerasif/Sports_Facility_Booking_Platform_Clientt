import { motion } from "framer-motion";
import logo from '@/assets/logo/logo.png'
import { useAppSelector } from "@/redux/api/hook";
export const DashboardLogo = () => {
  const {user} = useAppSelector(state => state?.user);
  const role = user?.role;
    return (
      <a
        href="#"
        className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
      >
        <div className="h-5 w-6 bg-white dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
        <div className="flex justify-between items-center gap-10">
          <img src={logo} alt="" className="w-20" /> 
          <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-medium text-white dark:text-white whitespace-pre"
        >
          
        </motion.span>
          <h5 className="bg-gray-50 font-semibold rounded-sm text-black px-3 py-1">
            {
              role == 'admin' ? "Admin" : "User"
            }
            </h5>
          </div>
        
      </a>
    );
  };