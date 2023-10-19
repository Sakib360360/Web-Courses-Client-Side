import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';



const ManageClasses = () => {
    const [status, setStatus] = useState('pending')
    // const [enrolledClasses, setEnrolledClasses] = useState([])
    // const { user } = useContext(AuthContext)
    // const [axiosInstance] = useAxiosSecure()
    // const [allClasses, refetch] = useManageClasses()
    // const [textareaValue, setTextareaValue] = useState('');
    // const [sendItem,setSendItem] = useState({})
    const [allCourses, setAllCourses] = useState([])
    // const [updated,setUpdated]  =useState()
    const refetch = () => {
        axios.get(`http://localhost:3000/allCourses`)
            .then(response => {
                // Handle the successful response here
                setAllCourses(response.data)

            })
            .catch(error => {
                // Handle errors here
                console.error('Error fetching data:', error);
            });
    }

    useEffect(() => {
        axios.get(`http://localhost:3000/allCourses`)
            .then(response => {
                // Handle the successful response here
                setAllCourses(response.data)

            })
            .catch(error => {
                // Handle errors here
                console.error('Error fetching data:', error);
            });
    }, [])


    console.log(allCourses)



    // handle approve
    const handleApprove = (item) => {
        const status = 'approved'
        // console.log(item)

            axios.patch(`http://localhost:3000/pending-courses/${item._id}?status=${status}`)
                .then(response => {
                    if (response.data.modifiedCount) {
                        Swal.fire('Approved')
                        setStatus('approved')
                        refetch()
                    }
                })
                .catch(error => console.log(error))
        
    }
    // handle deny
    const handleDeny = (item) => {
        const status = 'denied'

        axios.patch(`http://localhost:3000/pending-courses/${item._id}?status=${status}`)
            .then(response => {
                if (response.data.modifiedCount) {
                    Swal.fire('Denied')
                    setStatus('denied')
                    refetch()
                }
            })
            .catch(error => console.log(error))

    }
    // handle feedback
    // const handleSendFeedback = (item)=>{
    //     setSendItem(item)
    // }
    // const handleFeedback = () => {
    //     const feedback =textareaValue;
    //     axiosInstance.put(`/sendFeedback/${sendItem._id}`,{feedback})
    //     .then(response => {
    //         if (response.data.modifiedCount>0) {

    //             Swal.fire('Sent')
    //             refetch()
    //         }
    //     })
    //     .catch(error => console.log(error))


    // }




    // useEffect(() => {
    //     axiosInstance.get(`/enrolledClasses`)
    //         .then(response => {
    //             setEnrolledClasses(response.data)
    //         })
    //         .catch(error => console.log(error))
    // }, [])

    // console.log(allClasses,enrolledClasses)
    // const matchingIds = enrolledClasses.filter(item => {
    //     const selectedId = item.selectedId;
    //     return allClasses.some(obj => obj.id === selectedId);
    //   });

    //   const totalCount = matchingIds.length;

    //   console.log(totalCount);



    console.log(allCourses)

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
                            <th>Instructor Name</th>
                            <th>Instructor Email</th>
                            <th>Price</th>
                            <th>Available Seats</th>

                            <th>Status</th>
                            <th>Action</th>
                            <th>Action</th>
                            <th></th>
                            {/* <th>Feedback</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allCourses.map((item, index) => <tr key={item._id}>
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
                                <td>{item.instructor_email}</td>
                                <td>{item.price}</td>
                                <td>{item.seats}</td>
                                <td>{item.status}</td>
                                <td><button disabled={item.status === 'pending' ? false : true} onClick={() => handleApprove(item)} className='btn btn-success btn-sm'>Approve</button></td>
                                <td><button disabled={item.status === 'pending' ? false : true} onClick={() => handleDeny(item)} className='btn btn-sm btn-error'>Deny</button></td>
                                {/* TODO: onclick show more
                                 {/* <>
                                    <div className="modal" id="my_modal_8">
                                        <div className="modal-box">
                                            <h3 className="font-bold text-lg">Send feedback !</h3>

                                            <textarea onChange={(e) => setTextareaValue(e.target.value)} className='border-black border' name="feedback" id="" cols="60" rows="5"></textarea>
                                            <div className="modal-action">
                                                <button onClick={handleFeedback} className=""><a href="#" className="btn">Send</a></button>

                                            </div>
                                        </div>
                                    </div>
                                </> */}
                                {/* <td><button  onClick={()=>handleSendFeedback(item)} className=''><a href="#my_modal_8" disabled={item.status === 'pending'} className="btn btn-sm">Send Feedback</a></button></td> */}
                            </tr>)
                        }



                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default ManageClasses;