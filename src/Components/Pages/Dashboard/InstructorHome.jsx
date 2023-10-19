import useAuth from "../../../hooks/useAuth";


const InstructorHome = () => {
    const {user} = useAuth();
    return (
        <div className="h-screen items-center justify-center bg-no-repeat bg-cover flex flex-col bg-[url('https://e0.pxfuel.com/wallpapers/1019/142/desktop-wallpaper-light-blue-for-background.jpg') relative justify-center">
        <p className="text-center text-black text-2xl font-bold">
              Welcome to your Dashboard <span className="text-orange-500 text-3xl">{user.displayName}</span> 
          </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
          {/* Total Users Card */}
          <div className="bg-gray-50 text-gray-900 rounded-lg shadow-md p-4">
              <h2 className="text-2xl font-bold mb-2">Total Students</h2>
              <p className="text-lg">900</p>
          </div>

          {/* Total Classes Card */}
          <div className="bg-gray-50 text-gray-900 rounded-lg shadow-md p-4">
              <h2 className="text-2xl font-bold mb-2">Uploaded Classes</h2>
              <p className="text-lg">20</p>
          </div>

          {/* Total Earnings Card */}

          <div className="bg-gray-50 text-gray-900 rounded-lg shadow-md p-4">
              <h2 className="text-2xl font-bold mb-2">Total Earnings</h2>
              <p className="text-lg">$5000</p>
          </div>

      </div>
  </div>
    );
};

export default InstructorHome;