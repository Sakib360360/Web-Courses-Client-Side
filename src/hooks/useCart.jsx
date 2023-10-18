import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider'; // TO DO IMPORT KORTA HOBA

const useCart = () => {
    const { user } = useContext(AuthContext); // TO DO IMPORT KORTA HOBA
    const token= localStorage.getItem('access-token')

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = await fetch(`/* TO DO URL  *//carts?email=${user?.email}`, //TO DO URL
            {headers:{
                authorization:`bearer ${token}`
            }})
            return res.json();
        },
    })

    return [cart, refetch]

}
export default useCart;