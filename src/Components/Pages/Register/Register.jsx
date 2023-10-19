import { Link, useLocation, useNavigate } from 'react-router-dom'

import { FcGoogle } from 'react-icons/fc'
import { TbFidgetSpinner } from 'react-icons/tb'
import useAuth from '../../../hooks/useAuth'
import Swal from 'sweetalert2'
import { toast } from 'react-hot-toast'

const Register = () => {
  const {
    loading,
    setLoading,
    signInWithGoogle,
    createUser,
    updateUserProfile,
  } = useAuth();
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  // Handle user registration
  const handleSubmit = event => {
    event.preventDefault()
    const name = event.target.name.value
    const email = event.target.email.value
    const password = event.target.password.value
    const photo = event.target.password.value

        createUser(email, password)
        .then(() => {
          updateUserProfile(name, photo)
            .then(() => {
              // eslint-disable-next-line no-undef
              const saveUser = { name: name, email: email, photo: photo , role: "student" };
              fetch("http://localhost:3000/users", {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(saveUser),
              })
                .then((res) => res.json())
                .then((data) => {
                  console.log(data)
                  if (data.insertedId) {
                   // reset();
                    Swal.fire({
                      position: "center",
                      icon: "success",
                      title: "User created successfully.",
                      showConfirmButton: false,
                      timer: 1500,
                    });
                    navigate(from, { replace: true });
                  }
                });
            
            })
            .catch(err => {
              setLoading(false)
              console.log(err.message)
              toast.error(err.message)
            })
        })
        .catch(err => {
          setLoading(false)
          console.log(err.message)
          toast.error(err.message)
        })
    
    }
  // Handle google signin
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(result => {

        console.log(result.user)
         const loggedInUser = result.user;
        console.log(loggedInUser);

        const saveUser = {
          name: loggedInUser.displayName,
          email: loggedInUser.email,
          role: "student",
          photo: loggedInUser.photoURL
        };
        fetch("http://localhost:3000/users", {
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
        
      
      .catch(err => {
        setLoading(false)
        console.log(err.message)
        toast.error(err.message)
      })
  }
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-50 shadow-md text-gray-900'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
          <p className='text-sm text-gray-400'>Welcome to Online School</p>
        </div>
        <form
          onSubmit={handleSubmit}
          noValidate=''
          action=''
          className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Enter Your Name Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-orange-500 bg-gray-100 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Photo
              </label>
              <input
                type='text'
                name='photo'
                id='photo'
                placeholder='Enter Profile Image '
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-orange-500 bg-gray-100 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Email address
              </label>
              <input
                type='email'
                name='email'
                id='email'
                required
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-orange-500 bg-gray-100 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <div className='flex justify-between'>
                <label htmlFor='password' className='text-sm mb-2'>
                  Password
                </label>
              </div>
              <input
                type='password'
                name='password'
                id='password'
                required
                placeholder='*******'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-orange-500 bg-gray-100 text-gray-900'
              />
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='bg-orange-500 w-full rounded-md py-3 text-white'
            >
              {loading ? (
                <TbFidgetSpinner className='m-auto animate-spin' size={24} />
              ) : (
                'Continue'
              )}
            </button>
          </div>
        </form>
        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-sm dark:text-gray-400'>
            Signup with social accounts
          </p>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>
        <div
          onClick={handleGoogleSignIn}
          className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'
        >
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className='px-6 text-sm text-center text-gray-400'>
          Already have an account?{' '}
          <Link
            to='/login'
            className='hover:underline hover:text-orange-500 text-gray-600'
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

export default Register