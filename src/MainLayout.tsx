import { Outlet } from "react-router-dom";
import Navbr from "./pages/NavBr/Navbr";
import Footer from "./pages/Footer/Footer";


const MainLayout = () => {
    return (
        <div className="bg-gray-50">
            <Navbr />
            <div className="">
            <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;