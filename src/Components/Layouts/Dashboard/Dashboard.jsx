import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { FaChalkboardTeacher,FaRegAddressBook,FaHome,FaUsers,FaUsersCog,FaCcStripe,FaFolder,FaFolderOpen } from "react-icons/fa";
import Navbar from '../../Pages/Shared/Navbar/Navbar';
import Footer from '../../Pages/Shared/Footer/Footer';

const Dashboard = () => {
    // const { user } = useContext(AuthContext)
    // const [isInstructor, isInstructorLoading] = useInstructor()
    // const [isAdmin, isAdminLoading] = useAdmin()
    // console.log('isAdmin',isAdmin)
    const isAdmin = false;
    const isInstructor = false;
    
    
    const navItems = <>

        {
            isInstructor && <>
                <li><NavLink to='/dashboard/instructorHome'>Instructor Home <FaHome></FaHome></NavLink></li>
                <li><NavLink to='/dashboard/addAClass'>Add a Class <FaRegAddressBook></FaRegAddressBook></NavLink></li>
                <li><NavLink to='/dashboard/myClasses'>My Classes <FaChalkboardTeacher></FaChalkboardTeacher></NavLink></li>
            </>
        }
        {
            isAdmin && <>
                <li><NavLink to='/dashboard/adminHome'>Admin Home <FaHome></FaHome></NavLink></li>
                <li><NavLink to='/dashboard/manageClasses'>Manage Classes <FaChalkboardTeacher></FaChalkboardTeacher></NavLink></li>
                <li><NavLink to='/dashboard/manageUsers'>Manage Users <FaUsersCog></FaUsersCog></NavLink></li>
            </>
        }
        {
            !isAdmin && !isInstructor ? <>
                <li><NavLink to='/dashboard/studenthome'>Home <FaHome></FaHome></NavLink></li>
                <li><NavLink to='/dashboard/selectedClasses'>My Selected Classes <FaFolder></FaFolder></NavLink></li>
                <li><NavLink to='/dashboard/enrolledClasses'>My Enrolled Classes <FaFolderOpen></FaFolderOpen></NavLink></li>
                <li><NavLink to='/dashboard/paymentHistory'>My Pyament History <FaCcStripe></FaCcStripe></NavLink></li>
            </> : null
        }



    </>
    return (




        <div className="drawer relative lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-no-repeat bg-cover flex flex-col bg-[url('https://e0.pxfuel.com/wallpapers/1019/142/desktop-wallpaper-light-blue-for-background.jpg')] items-center relative justify-center">
                    {/* Page content here */}
                    <div className='w-full absolute hidden md:block  top-0 left-0'>
                    {/* <Navbar></Navbar> */}
                    
                    </div>
                    <div className=' top-4 fixed right-1/2 z-20'>
                    <label htmlFor="my-drawer-2" className="btn btn-outline drawer-button lg:hidden">Dashboart Menu</label>
                    </div>
                    
                    <div className='min-h-screen w-full mt-24'>
                    <Outlet></Outlet>
                    </div>
                    <div className='w-full  '>
                    <Footer></Footer>
                    </div>
                    

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-72 h-full bg-no-repeat bg-cover flex flex-col bg-[url('https://e0.pxfuel.com/wallpapers/1019/142/desktop-wallpaper-light-blue-for-background.jpg')] text-black">
                        {/* Sidebar content here */}
                        {navItems}
                        <div className='absolute left-8 bottom-8 '>
                        <Link to={'/'} className='btn btn-outline'>Go bake to home</Link>
                        </div>
                    </ul>
                    
                </div>
            </div>
    );
};

export default Dashboard;











// {



//     <div className="drawer">


//             <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
//             <div className="drawer-content flex flex-col">
//                 {/* Navbar */}
//                 <div className="w-full navbar bg-base-300 ">
//                     <div className="flex-none lg:hidden">
//                         <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
//                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
//                         </label>
//                     </div>
//                     <div className="flex-1 px-2 mx-2"><Link to='/'>Language-Camp</Link></div>
//                     <div className="flex-none hidden lg:block">
//                         <ul className="menu menu-horizontal">
//                             {/* Navbar menu content here */}
                            
//                         </ul>
//                     </div>
//                     <div>
//                         {user?.displayName}
//                     </div>
//                 </div>
//                 {/* Page content here */}

//             </div>
//             <div className="drawer-side">
//                 <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
//                 <ul className="menu p-4 w-80 h-full bg-base-200">
//                     {/* Sidebar content here */}
//                     {navItems}

//                 </ul>

//             </div>
//         </div>
// }




