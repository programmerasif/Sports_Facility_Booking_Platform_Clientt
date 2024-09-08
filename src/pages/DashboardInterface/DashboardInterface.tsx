import Dashboardheader from "@/components/ui/Dashboardheader";
import DashboardFirstLook from "@/DashboardFirstLook/DashboardFirstLook";
import { Outlet, useLocation } from "react-router-dom";

const DashboardInterface = () => {
    const location = useLocation();
    let locationPath = location.pathname;
    if (locationPath == "/dashboard/") {
        locationPath = "/dashboard"
    }
  return (
    <div className="flex flex-col w-full">
        <Dashboardheader />
        <div className="m-5">
        {
            locationPath == ('/dashboard' || '/dashboard/') ? <DashboardFirstLook /> : <Outlet />
        }
        </div>
      
    </div>
 
    
  );
};
export default DashboardInterface