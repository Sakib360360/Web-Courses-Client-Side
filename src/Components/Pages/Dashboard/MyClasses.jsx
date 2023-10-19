import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';

const MyClasses = () => {
    const [myClasses, setMyClasses] = useState([])
    const { user } = useAuth()
    const navigate = useNavigate()


    // console.log(myClasses)
    useEffect(() => {
        axios.get(`http://localhost:3000/my-courses/${user?.email}`)
            .then(response => {
                // console.log(response.data)
                setMyClasses(response.data)
            })
    }, [])



    


    return (
        <div>
            
            
       
            
            {/* show all in table */}
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Class</th>
                            <th>Instructor</th>
                            <th>Price</th>
                            <th>Available Seats</th>
                            <th>Status</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myClasses.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="flex flex-col">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.picture} />
                                            </div>
                                            <div>
                                                <h1>{item.title}</h1>
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    {item.instructor_name}
                                </td>
                                <td>{item.price}</td>
                                <td>{item.seats}</td>
                                <td>{item.status}</td>
                                {/* TODO: onclick show more */}
                                
                            </tr>)
                        }



                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyClasses;