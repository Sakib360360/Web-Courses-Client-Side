import React, { useEffect, useState } from "react";
import { FaAmazonPay, FaTrashAlt } from "react-icons/fa";

import Swal from "sweetalert2";

import axios from "axios";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const StudentSelectedClasses = () => {
  const [selectedClasses, setSelectedClasses] = useState([]);
  const { user } = useAuth();
  console.log(selectedClasses);
  const refetch = () => {
    axios
      .get(
        `https://web-courses-server-side.vercel.app/cart?email=${user?.email}`
      )
      .then((response) => {
        // Handle the successful response here
        setSelectedClasses(response.data);
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    axios
      .get(
        `https://web-courses-server-side.vercel.app/cart?email=${user?.email}`
      )
      .then((response) => {
        // Handle the successful response here
        setSelectedClasses(response.data);
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error fetching data:", error);
      });
  }, []);

  // const paymentItemPass =(item)=>{
  //     setPaymentItem(item)
  // }
  const handleDelete = (id) => {
    Swal.fire({
      title: "Do you want to delete?",
      icon: "warning",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://web-courses-server-side.vercel.app/cart/${id}`)
          .then((response) => {
            // console.log(response)
            if (response.data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted successfully");
            }
          });
      } else if (result.isDenied) {
        Swal.fire("Not deleted");
      }
    });
  };
  // console.log(selectedClasses)
  return (
    <div>
      {/* show all classes in table */}
      {/* table */}
      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Class</th>
                <th>Instructor</th>
                <th>Price</th>
                <th>Available Seats</th>
                <th>Delete</th>
                <th>Pay</th>
              </tr>
            </thead>
            <tbody>
              {selectedClasses.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="flex flex-col">
                        {/* <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item?.picture} />
                                                </div> */}
                        <div>
                          <h1>{item.title}</h1>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.instructor_name}</td>
                  <td>{item.price}</td>
                  <td>{item.seats}</td>
                  <td>
                    <button
                      className="btn hover:bg-transparent hover:text-red-500 btn-out btn-sm bg-transparent"
                      onClick={() => handleDelete(item._id)}
                    >
                      <FaTrashAlt></FaTrashAlt>
                    </button>
                  </td>
                  <td>
                    <Link to="../payment">
                      <button
                        className="btn btn-out btn-sm bg-transparent hover:bg-transparent hover:text-primary"
                        onClick={() => paymentItemPass(item)}
                      >
                        <FaAmazonPay className="w-18"></FaAmazonPay>
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}

              {/*  */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentSelectedClasses;
