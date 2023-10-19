import axios from 'axios';
import React, { useEffect, useState } from 'react';


import { FaChalkboardTeacher,FaUserTie } from "react-icons/fa";
import Swal from 'sweetalert2';

const ManageUsers = () => {
    const [manageAllUsers,setManageAllUsers] = useState([])
    const [disableInstructor,setDisableInstructor] = useState('')
    const [disableAdmin,setDisableAdmin] = useState('')

    const refetch = () => {
        axios.get(`http://localhost:3000/users`)
            .then(response => {
                // Handle the successful response here
                setManageAllUsers(response.data)

            })
            .catch(error => {
                // Handle errors here
                console.error('Error fetching data:', error);
            });
    }


    useEffect(() => {
        axios.get(`http://localhost:3000/users`)
            .then(response => {
                // Handle the successful response here
                setManageAllUsers(response.data)

            })
            .catch(error => {
                // Handle errors here
                console.error('Error fetching data:', error);
            });
    }, [])
    console.log(manageAllUsers)

    // console.log(manageAllUsers)
    const makeInstructor=(item)=>{
        const role = 'instructor'
        axios.patch(`http://localhost:3000/users/${item._id}?role=${role}`)
        .then(response=>{
            if(response.data.modifiedCount>0){
                Swal.fire(`${item.name} is instructor now.`)
                setDisableInstructor(item._id)
                setDisableAdmin('')
                refetch()
            }
        })
        .catch(error=>console.log(error))
    }
    // TODO:disable fucnt
    const makeAdmin=(item)=>{
        const role = 'admin'
        axios.patch(`http://localhost:3000/users/${item._id}?role=${role}`)
        .then(response=>{
            if(response.data.modifiedCount>0){
                Swal.fire(`${item.name} is Admin now.`)
                setDisableAdmin(item._id)
                setDisableInstructor('')
                refetch()
            }
        })
        .catch(error=>console.log(error))
    }
    return (
        <div>
            
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>User Role</th>
                            <th>Make Instructor</th>
                            <th>Make Admin</th>
                            
                        </tr>
                    </thead>
                     <tbody>
                        {
                            manageAllUsers.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                
                                <td>
                                    {item.name}
                                </td>
                                <td>{item.email}</td>
                                <td>{item.role || 'student'}</td>
                                
                                <td><button disabled={item._id === disableInstructor || item.role === 'instructor'} onClick={()=>makeInstructor(item)} className='btn btn-success btn-sm'><FaChalkboardTeacher></FaChalkboardTeacher>Instructor</button></td>
                                <td><button disabled={item._id === disableAdmin || item.role === 'admin'}  onClick={()=>makeAdmin(item)} className='btn btn-sm btn-success'><FaUserTie></FaUserTie>Admin</button></td>
                                
                            </tr>)
                        }



                    </tbody> 


                </table>
            </div>
        </div>
    );
};

export default ManageUsers;