
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
import Payment from "@/pages/Payment/Payment";
import NotFoundPage from "@/pages/NotFoundPage/NotFoundPage";
import AdminPrivateRouts from "@/PrivateRouts/AdminPrivateRouts";
import UserPrivateRouts from "@/PrivateRouts/UserPrivateRouts";


const routs = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/facality',
                element: <Facality />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/about-us',
                element: <AboutUs />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/booking-page',
                element: <UserPrivateRouts><BookingPage /></UserPrivateRouts>
                
            },
            {
                path: '/facility-details/:id',
                element: <FacilityDetails />
            },
            {
                path: '/booking-details/:id',
                element: <UserPrivateRouts><BookingDetails /></UserPrivateRouts>
                
            },
            {
                path: '/payment',
                element:<UserPrivateRouts><Payment /></UserPrivateRouts>
                 
            },
        ]
    },
    {
        path: '/dashboard',
        element: <MainDashboard />,
        children: [
            {
                path: 'manage-user',
                element:<AdminPrivateRouts>
                    <ManageUser />
                </AdminPrivateRouts>
                
                
            },
            {
                path: 'booking-management',
                element: <AdminPrivateRouts>
                <BookingManagement />
            </AdminPrivateRouts>
                
            },
            {
                path: 'facality-management',
                element:<AdminPrivateRouts>
                <FacilityManagement />
            </AdminPrivateRouts>
                 
            },
            {
                path: 'create-admin',
                element: 
                <AdminPrivateRouts>
                <CreateAdmin />
            </AdminPrivateRouts>
            },
            {
                path: 'manage-user-profile',
                element: <UserPrivateRouts><ManageUserProfile /></UserPrivateRouts>
                
            },
            {
                path: 'manage-users-booking',
                element: <UserPrivateRouts><ManageUsersBooking /></UserPrivateRouts>
                
            },
            {
                path: 'booked-list',
                element: <UserPrivateRouts><MyBookings /></UserPrivateRouts>
                
            },
        ]
    },
    // Universal 404 Route
    {
        path: '*',
        element: <NotFoundPage /> 
    }
]);

export default routs;