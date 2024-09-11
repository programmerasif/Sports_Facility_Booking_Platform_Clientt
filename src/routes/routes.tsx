
import Facality from "@/pages/Facality/Facality";
import MainLayout from "../MainLayout";
import Home from "../pages/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import Register from "@/pages/Register/Register";
import Login from "@/pages/Login/Login";
import MainDashboard from "@/pages/Dashboard/MainDashboard";
import BookingManagement from "@/pages/BookingManagement/BookingManagement";
import ManageUser from "@/pages/ManageUser/ManageUser";
import CreateAdmin from "@/pages/CreateAdmin/CreatAdmin";
import Contact from "@/pages/Contact/Contact";
import AboutUs from "@/pages/AboutUs/AboutUs";
import FacilityManagement from "@/pages/FacalityManagement/FacalityManagement";
import ManageUserProfile from "@/UserActivity/ManageUserProfile/ManageUserProfile/ManageUserProfile";
import ManageUsersBooking from "@/UserActivity/ManageBooking/ManageUsersBooking";
import MyBookings from "@/UserActivity/MyBookings/MyBookings";
import BookingPage from "@/UserActivity/BookingPage/BookingPage";
import FacilityDetails from "@/FacilityDetails/FacilityDetails";
import BookingDetails from "@/UserActivity/BookingDetails/BookingDetails";


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
                path:'/contact',
                element:<Contact />
            },
            {
                path:'/about-us',
                element:<AboutUs />
            },
            {
                path:'/login',
                element:<Login />
            },
            {
                path:'/register',
                element:<Register />
            },
            {
                path:'/booking-page',
                element:<BookingPage />
            },
            {
                path:'/facility-details/:id',
                element:<FacilityDetails />
            },
            {
                path:'/booking-details/:id',
                element:<BookingDetails />
            },
        ]
    },
    {
        path: '/dashboard',
        element: <MainDashboard />,
        children:[
            {
                path:'manage-user',
                element:<ManageUser/>
            },
            {
                path:'booking-management',
                element:<BookingManagement/>
            },
            {
                path:'facality-management',
                element:<FacilityManagement/>
            },
            {
                path:'create-admin',
                element:<CreateAdmin />
            },
            {
                path:'manage-user-profile',
                element:<ManageUserProfile />
            },
            {
                path:'manage-users-booking',
                element:<ManageUsersBooking />
            },
            {
                path:'booked-list',
                element:<MyBookings />
            },
        ]
    }
])

export default routs