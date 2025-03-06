import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../../Firebase/firebase.config';

const Login = () => {


    const [passwordVisible, setPasswordVisible] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { login } = useContext(AuthContext);


    const onSubmit = (data) => {
        login(data.email, data.password)
            .then(userInfo => {
                console.log("User Logged In:", userInfo);

                Swal.fire({
                    title: "Login Successful!",
                    text: "Welcome back! You are now logged in.",
                    icon: "success",
                    confirmButtonColor: "#3085d6",
                    confirmButtonText: "OK"
                }).then(() => {
                    navigate(location.state ? location.state : "/");
                });
            })
            .catch(error => {
                console.error("Login Error:", error);

                if (error.code === 'auth/wrong-password') {
                    toast.error("Incorrect password. Try again.");
                } else if (error.code === 'auth/user-not-found') {
                    toast.error("No account found with this email.");
                } else {
                    toast.error("Failed to login. Please check your details.");
                }
            });
    };


    // google login 
    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log("Google Sign-In Success:", result.user);
                toast.success("Google Login Successful!");
                navigate(location.state ? location.state : "/");
            })
            .catch(error => {
                console.error("Google Sign-In Error:", error);
                toast.error("Google Sign-In Failed.");
            });
    };




    return (
        <div>
            <Toaster position="top-right" />
            <div className='mt-[38px] max-w-[1140px] mx-auto pb-28'>
                <div className="max-w-[752px] max-h-[750px] mt-11 shadow-xl flex mx-auto font-poppins rounded-md">
                    <div className="bg-white rounded-[5px] p-[73px] mb-[125px] w-[752px]">
                        <h1 className="text-[35px] font-semibold text-center text-amber-400">Login your account</h1>
                        <div className='border my-[50px]'></div>
                        <form className='p-[21px]' onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-4">

                                <label className="block text-gray-700 font-medium mb-2">Email </label>
                                <input type="email" {...register("email")} className="w-full railwayFont bg-[#F3F3F3] focus:outline-none focus:ring-2 focus:ring-amber-500 px-[20px] py-[20.5px]" placeholder="Enter your email address" required />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Password</label>
                                <div className='relative'>
                                    <input
                                        type={passwordVisible ? "text" : "password"}
                                        {...register("password", {
                                            required: 'Password is required', minLength: {
                                                value: 6, message: 'Password must be 6 characters'
                                            },

                                            pattern: {
                                                value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/, message: 'Password must be include one uppercase, lowercase letter and number'
                                            }
                                        })}
                                        className="w-full bg-[#F3F3F3] px-[20px] py-[20.5px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
                                        placeholder="Enter your password"
                                    />

                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setPasswordVisible(!passwordVisible);
                                        }}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                                    >
                                        {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                                    </button>

                                </div>

                            </div>
                            {errors.password && <p className="text-amber-500 text-sm mt-2">{errors.password.message}</p>}
                            <button
                                type="submit" to='/'
                                className="w-full mt-4 bg-amber-500 text-xl font-semibold text-white py-4  hover:bg-black transition"
                            >
                                Login
                            </button>
                        </form>

                        <div className="text-center my-4">
                            <span className="text-amber-400">or login with</span>
                        </div>


                        <button
                            onClick={handleGoogleLogin}
                            className="flex items-center gap-2 font-semibold border-2 py-2 w-full hover:bg-amber-500 hover:text-white justify-center "
                        >
                            <FcGoogle className="text-3xl" /> Login With Google
                        </button>

                        <p className="text-center mt-6 text-gray-600">
                            Don’t Have An Account?{" "}
                            <Link to="/register" className="text-amber-400 font-medium hover:underline">
                                Register
                            </Link>
                        </p>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Login;