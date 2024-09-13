import { useAppSelector } from "@/redux/api/hook";
import { useNavigate } from "react-router-dom";


const UserPrivateRouts = ({children}) =>{
    const { user } = useAppSelector((state) => state?.user);
    const navigate = useNavigate();
    const token = user?.token;
    if (token) {
        return children
    }
    else{
        navigate('/')
    }
}
export default UserPrivateRouts