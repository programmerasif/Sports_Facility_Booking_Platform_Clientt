import { Outlet, useLocation } from "react-router-dom";
import Navbr from "./pages/NavBr/Navbr";
import Footer from "./pages/Footer/Footer";


const MainLayout = () => {
    const location = useLocation();
    const locationPath = location.pathname;
    const islogin = locationPath == "/login";
    const isRegister = locationPath == "/register";
    console.log(islogin)
    return (
        <div className="">
            {
                !islogin && !isRegister &&  <Navbr />
            }
           
            <div className="">
            <Outlet />
            </div>
            {
                !islogin && !isRegister &&  <Footer />
            }
            
        </div>
    );
};

export default MainLayout;