import { BsFillBookFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Navbar.css";
import useAuth from "../../../../hooks/useAuth";

// import { useCart } from "your-cart-context"; // Import your cart context
// import { useAdmin } from "your-admin-context"; // Import your admin context

const Navbar = () => {
     const { user, logOut } = useAuth();
    // const [cart] = useCart();
    // const [isAdmin] = useAdmin();

  const isAdmin = true; // fake

    const handleLogOut = () => {
       logOut()
       .then(() => {})
       .catch((error) => console.log(error));
     };

     const getUserProfilePicture = () => {
       // Replace this with your logic to get the user's profile picture URL
       return user.photoURL;
     };

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
          <Link to="/dashboard/adminHome">Dashboard</Link>
        </li>
      ) : (
        <li>
          <Link to="/dashboard/userhome">Dashboard</Link>
        </li>
      )}

     <li>
        <Link to="/dashboard/mycart">
          <button className="btn gap-2">
           {/*  <div className="badge badge-secondary">+{cart?.length || 0}</div> */}
          </button>
        </Link>
      </li> 

        {user ? (
        <>
          <li>
            <img src={getUserProfilePicture()} alt="Profile" className="profile-pic" />
          </li>
          <li>
            <button onClick={handleLogOut} className="btn btn-active">
              Logout
            </button>
          </li>
        </>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )} 
    </>
  );

  return (
    <>
      <div className="navBackGround">
        <div className="navbar mx-auto  autoPlay text-white">
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
              <span className="font-bold">
                <BsFillBookFill></BsFillBookFill>
              </span>{" "}
              Online School
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu font-semibold menu-horizontal px-1">{navOptions}</ul>
          </div>
          <div className="navbar-end">
             {user && <img className="rounded-md w-[50px] h-[50px]" src={getUserProfilePicture()} alt="Profile" />} 
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
    </>
  );
};

export default Navbar;
