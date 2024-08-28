import Dashboardheader from "@/components/ui/Dashboardheader";
import DashboardFirstLook from "@/DashboardFirstLook/DashboardFirstLook";
import { Outlet, useLocation } from "react-router-dom";

const DashboardInterface = () => {
    const location = useLocation();
    let locationPath = location.pathname;
    if (locationPath == "/dashoard/") {
        locationPath = "/dashoard"
    }

    console.log(locationPath);
  return (
    <div className="flex flex-col w-full">
        <Dashboardheader />
        <div className="m-5">
        {
            locationPath == ('/dashoard' || '/dashoard/') ? <DashboardFirstLook /> : <Outlet />
        }
        </div>
      
    </div>
 
    
  );
};
export default DashboardInterface