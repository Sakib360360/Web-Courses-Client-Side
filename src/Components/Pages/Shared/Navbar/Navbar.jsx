import { BsFillBookFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useEffect, useState } from "react";
// import useCart from "../../../../hooks/useCart";  
// import  { useContext } from "react";
// import { AuthContext } from "your-auth-context"; // Import your AuthContext
// import { useAdmin } from "your-admin-context"; // Import your admin context

const Navbar = () => {
  //   const { user, logOut } = useContext(AuthContext);
    // const [cart] = useCart();
  //   const [isAdmin] = useAdmin();

  const isAdmin = true; // fake
  const [scrolling, setScrolling] = useState(false);

  //   const handleLogOut = () => {
  //     logOut()
  //       .then(() => {})
  //       .catch((error) => console.log(error));
  //   };

  //   const getUserProfilePicture = () => {
  //     // Replace this with your logic to get the user's profile picture URL
  //     return user.profilePictureUrl;
  //   };



  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/aboutUS">About Us</Link>
      </li>
      <li>
        <Link to="/courses">Courses</Link>
      </li>
      <li>
        <Link to="/ourService">Our Service</Link>
      </li>
      <li>
        <Link to="/contactUs">Contact Us</Link>
      </li>

      {isAdmin ? (
        <li>
          <Link to="/adminDashboard">Dashboard</Link>
        </li>
      ) : (
        <li>
          <Link to="/dashboard/userhome">Dashboard</Link>
        </li>
      )}

     {/*  { <li>
        <Link to="/dashboard/mycart">
          <button className="btn gap-2">
            <div className="badge badge-secondary">+{cart?.length || 0}</div>
          </button>
        </Link>
      </li>} */}

      {/*   {user ? (
        <>
          <li>
            <img src={getUserProfilePicture()} alt="Profile" className="profile-pic" />
          </li>
          <li>
            <button onClick={handleLogOut} className="btn btn-active">
              LogOut
            </button>
          </li>
        </>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )} */}
    </>
  );

  const navbarClasses = `navbar fixed z-10 shadow  mx-auto autoPlay ${
    scrolling ? "bg-[#FEB546] bg-opacity-40" : ""
  } text-black`;

  return (
    <>
      <div className="navBackGround">
        <div className={navbarClasses}>
        <div className="navbar  mx-auto  autoPlay">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navOptions}
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl">
              <span className="font-bold text-2xl iconColor">
                <BsFillBookFill></BsFillBookFill>
              </span>{" "}
              <span className="text-black text-2xl font-extrabold">Online School</span>
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu text-black font-semibold menu-horizontal px-1">{navOptions}</ul>
          </div>
          <div className="navbar-end">
            {/* {user && <img className="rounded-md w-[50px] h-[50px]" src={getUserProfilePicture()} alt="Profile" />} */}
          </div>
          <div className="navbar-end">
            <img
              className="  rounded-full w-[50px] h-[50px]"
              src="https://i.ibb.co/0MbWfk5/download.jpg"
              alt=""
            />
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
