// import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const useMenu = () => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('Data URL') // TO DO  
            .then(res => res.json())
            .then(data => {
                setMenu(data);
                setLoading(false);
            });
    }, [])

    // const {data: menu = [], isLoading: loading, refetch} = useQuery({
    //     queryKey: ['menu'],
    //     queryFn: async() => {
    //         const res = await fetch('Data URL'); // TO DO
    //         return res.json();
    //     }
    // })

    return [menu, loading, /* refetch */]
}

export default useMenu;