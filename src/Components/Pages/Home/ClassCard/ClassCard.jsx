import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../../../hooks/useAuth";

const ClassCard = ({ cls }) => {
  const {
    picture,
    price,
    students,
    seats,
    title,
    instructor_name,
    instructor_email,
  } = cls;

  // const [isAdmin,] = useAdmin()
  // const [isInstructor,] = useInstructor()
  const { user } = useAuth();
  const [disabled, setDisabled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSelect = (cls) => {
    if (user?.email) {
      const selectedClass = {
        selectedClassId: cls._id,
        email: user?.email,
        title,
        picture,
        instructor_name,
        instructor_email,
        price,
        seats,
      };
      // posting selected class in the server
      axios
        .post("http://localhost:3000/cart", selectedClass)
        .then((response) => {
          if (response.data.insertedId) {
            Swal.fire("Selected");
          }
        });
    } else {
      Swal.fire({
        title: "You need to login.",
        showCancelButton: true,
        confirmButtonText: "Login",
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="bg-white shadow-xl p-2 rounded-lg">
      <div className="w-full rounded-lg overflow-hidden">
        <img className="w-full" src={picture} alt={title} />
      </div>

      <div className="mt-4">
        <h1 className="font-bold">{title}</h1>
        <p className="text-[#FF7426] font-bold">${price}</p>
        <p className="my-3">Sets available: {seats - students}</p>
        <button
          disabled={cls.seats < 1 ? true : false}
          onClick={() => handleSelect(cls)}
          className="bg-[#FF7426] text-white px-4 py-2 text-[1rem] rounded-full"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ClassCard;
