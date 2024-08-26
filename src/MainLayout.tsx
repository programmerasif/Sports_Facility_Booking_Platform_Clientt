import { Outlet } from "react-router-dom";
import Navbr from "./pages/NavBr/Navbr";


const MainLayout = () => {
    return (
        <div>
            <Navbr />
            <Outlet />
            <h5>This is footer</h5>
        </div>
    );
};

export default MainLayout;