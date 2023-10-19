import axios from "axios";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";


const useAdmin = () => {
    const { user, loading } = useAuth();
    // const axios secure with react query
    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axios.get(`http://localhost:3000/users/role/${user?.email}`);
            console.log('is admin response', res)
            return res.data.role;
        }
    })
    return [isAdmin, isAdminLoading]
}
export default useAdmin;