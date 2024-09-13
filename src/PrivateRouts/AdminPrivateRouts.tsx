/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppSelector } from "@/redux/api/hook";
import { useNavigate } from "react-router-dom";


const AdminPrivateRouts = ({children}:any) =>{
    const { user } = useAppSelector((state) => state?.user);
    const navigate = useNavigate();
    const role = user?.role;
    if (role == 'admin') {
        return children
    }
    else{
        navigate('/')
    }
}
export default AdminPrivateRouts