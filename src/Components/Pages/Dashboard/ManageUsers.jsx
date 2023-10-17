import React from 'react';
import { Link } from 'react-router-dom';

const ManageUsers = () => {
    return (
        <div>
            <div className="flex h-screen bg-gray-100">
                <div className="bg-gray-800 text-white w-64 flex-shrink-0 p-4">
                    <div className="mb-4">
                        <p className="text-2xl font-bold">Menu</p>
                        <ul className="mt-2">
                            <li className="mb-2">
                                <Link  className="text-gray-300 hover:text-white">Dashboard</Link>
                            </li>
                            <li className="mb-2">
                                <Link to={'/manageUsers'}  className="text-gray-300 hover:text-white">Manage Users</Link>
                            </li>
                            <li>
                                <Link  className="text-gray-300 hover:text-white">Manage Instructors</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex-1 overflow-x-hidden overflow-y-auto">
                    <div className="p-4">
                        {/* Your main content goes here */}
                        <p className="text-3xl font-bold mb-4">Welcome to the Dashboard</p>
                        <p className='text-3xl px-8 my-8 text-black' >
                            Manage Users
                        </p>
                        <p>Data to come</p>

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
                    {/* <tbody>
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



                    </tbody> */}


                </table>
            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageUsers;