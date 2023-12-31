import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";
import useAdmin from "../../../../hooks/useAdmin";
import useAuth from "../../../../hooks/useAuth";
const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isAdmin, isAdminLoading] = useAdmin();
  // console.log(isAdmin)
  const handleLogOut = () => {
    logOut()
      .then(() => {
        localStorage.removeItem("access-token");
      })
      .catch((error) => console.log(error));
  };

  const getUserProfilePicture = () => {
    // Replace this with your logic to get the user's profile picture URL
    return user.photoURL;
  };

  return (
    <nav className="flex items-center justify-between flex-wrap p-6 shadow-md bg-slate-500">
      <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
        <img
          className="rounded-full w-10 h-10 "
          src="https://i.ibb.co/0MbWfk5/download.jpg"
          alt=""
        />{" "}
        {/* You can give this logo if you want. */}
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <HiMenuAlt3></HiMenuAlt3>
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-sm lg:flex-grow">
          <Link
            to="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
          >
            Home
          </Link>
          <Link
            to="/aboutUS"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
          >
            About Us
          </Link>
          <Link
            to="/courses"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
          >
            Courses
          </Link>
          <Link
            to="/instructors"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
          >
            Instructors
          </Link>
          <Link
            to="/ourService"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
          >
            Services
          </Link>
          <Link
            to="/contactUS"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
          >
            Contact us
          </Link>
          {isAdmin ? (
            <Link
              to="/dashboard/adminHome"
              className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
            >
              Dashboard
            </Link>
          ) : (
            <Link
              to="/dashboard/studenthome"
              className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
            >
              Dashboard
            </Link>
          )}
        </div>
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <img
                src={getUserProfilePicture()}
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
              <button onClick={handleLogOut} className="text-white">
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="text-white text-center">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
