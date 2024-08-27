
import Facality from "@/pages/Facality/Facality";
import MainLayout from "../MainLayout";
import Home from "../pages/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import Register from "@/pages/Register/Register";
import Login from "@/pages/Login/Login";

const routs = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout />,
        children:[
            {
                path:'/',
                element:<Home />
            },
            {
                path:'/facality',
                element:<Facality />
            },
            {
                path:'/login',
                element:<Login />
            },
            {
                path:'/register',
                element:<Register />
            },
        ]
    }
])

export default routs