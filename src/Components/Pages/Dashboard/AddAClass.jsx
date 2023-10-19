import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';

const AddAClass = () => {
    const { register, handleSubmit } = useForm();
    const { user } = useAuth()
    // console.log(user)
    // const imgKey = import.meta.env.VITE_imgbb_api_key;
    // const imgURLHosting = `https://api.imgbb.com/1/upload?key=${imgKey}`
    const onSubmit = (data) => {
        
        
            
                    
                    data.price = parseFloat(data.price)
                    const newItem = {
                        title: data.className,
                        seats: parseInt(data.availableSeats),
                        price: data.price,
                        instructor_name: user?.displayName,
                        instructor_email: user?.email,
                        status: data.status,
                        course_description:data.description,
                        students:0,
                        picture:data.picture

                    };
                    axios.post('http://localhost:3000/courses', newItem)
                        .then(response => {
                            if (response.data.insertedId) {
                                Swal.fire('Added')
                            }
                        })
                        .catch(error => console.log(error))
                    // console.log(newItem)
                }

          
   
    return (
        // TODO: button disabled when any field is not filled
        <div className='mb-12 '>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto border border-black p-8 rounded-xl mt-8">
                <div className="mb-4">
                    <label htmlFor="className" className="block text-gray-700 font-bold mb-2">
                        Class Name
                    </label>
                    <input
                        type="text"
                        id="className"
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter class name"
                        {...register('className', { required: true })}
                    />
                </div>



                <div className="mb-4">
                    <label htmlFor="instructorName" className="block text-gray-700 font-bold mb-2">
                        Instructor Name
                    </label>
                    <input
                        type="text"
                        value={user?.displayName}
                        id="instructorName"
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter instructor name"
                        {...register('instructorName', { required: true })}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="instructorEmail" className="block text-gray-700 font-bold mb-2">
                        Instructor Email
                    </label>
                    <input
                        type="email"
                        value={user?.email}
                        id="instructorEmail"
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter instructor email"
                        {...register('instructorEmail', { required: true })}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="availableSeats" className="block text-gray-700 font-bold mb-2">
                        Available Seats
                    </label>
                    <input
                        type="number"
                        min='0'
                        id="availableSeats"
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter available seats"
                        {...register('availableSeats', { required: true })}
                    />
                </div>
                {/* <div className="mb-4">
                    <label htmlFor="availableSeats" className="block text-gray-700 font-bold mb-2">
                        Students
                    </label>
                    <input
                        type="number"
                        min='0'
                        id="students"
                        defaultValue={0}
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="students"
                        {...register('students', { required: true })}
                    />
                </div> */}

                <div className="mb-4">
                    <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
                        Price
                    </label>
                    <input
                        type="text"
                        id="price"
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter price"
                        {...register('price', { required: true })}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
                        Description
                    </label>
                    <input
                        type="text"
                        id="description"
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter description"
                        {...register('description', { required: true })}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="status" className="block text-gray-700 font-bold mb-2">
                        Status
                    </label>
                    <select
                        id="status"
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        {...register('status', { required: true })}
                    >

                        <option value="pending">Pending</option>

                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="picture" className="block text-gray-700 font-bold mb-2">
                        Class Image
                    </label>
                    <input type="text" {...register('picture', { required: true })} className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " placeholder='Image url' />

                </div>

                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddAClass;