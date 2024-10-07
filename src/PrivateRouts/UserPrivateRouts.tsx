/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { useAppSelector } from "@/redux/api/hook";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UserPrivateRouts = ({children}: any) => {
    const { user } = useAppSelector((state) => state?.user);
    const navigate = useNavigate();
    const token = user?.token;
    
    useEffect(() => {
        if (!token ) {
            Swal.fire({
                position: "center",
                icon: "info",
                title: "You Have to login first",
                showConfirmButton: false,
                timer: 1500
              });
            navigate('/');
        }
        
    }, [token, navigate,user?.role]);

    // If the token exists, render the children
    if (token) {
        return children;
    }

  
    return null;
}

export default UserPrivateRouts;