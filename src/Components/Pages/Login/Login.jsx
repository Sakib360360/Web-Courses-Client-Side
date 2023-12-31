import { toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";

import axios from "axios";
import { useContext } from "react";
import { TbFidgetSpinner } from "react-icons/tb";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const { loading, setLoading, signIn, signInWithGoogle } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // Handle submit
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signIn(email, password)
      .then((result) => {
        console.log(result.user);

        if (result.user) {
          axios
            .post("https://web-courses-server-side.vercel.app/jwt", {
              email: result.user?.email,
            })
            .then((res) => {
              localStorage.setItem("access-token", `${res.data}`);
            });
        } else {
          localStorage.removeItem("access-token");
        }

        navigate(from, { replace: true });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
        toast.error(err.message);
      });
  };

  // Handle google signin
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        if (result.user) {
          axios
            .post("https://web-courses-server-side.vercel.app/jwt", {
              email: result.user?.email,
            })
            .then((res) => {
              localStorage.setItem("access-token", `${res.data}`);
            });
        } else {
          localStorage.removeItem("access-token");
        }

        const loggedInUser = result.user;

        const saveUser = {
          name: loggedInUser.displayName,
          email: loggedInUser.email,
          role: "student",
          photo: loggedInUser.photoURL,
        };
        fetch("https://web-courses-server-side.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then(() => {
            navigate(from, { replace: true });
          });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
        toast.error(err.message);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-50 shadow-md text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Log In</h1>
          <p className="text-sm text-gray-400">
            Sign in to access your account
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-orange-500 bg-gray-100 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                required
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-orange-500 bg-gray-100 text-gray-900"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-orange-500 w-full rounded-md py-3 text-white"
            >
              {loading ? (
                <TbFidgetSpinner className="m-auto animate-spin" size={24} />
              ) : (
                "Continue"
              )}
            </button>
          </div>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <div
          onClick={handleGoogleSignIn}
          className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
        >
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className="px-6 text-sm text-center text-gray-400">
          Don't have an account yet?{" "}
          <Link
            to="/register"
            className="hover:underline hover:text-orange-500 text-gray-600"
          >
            Sign up
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;
