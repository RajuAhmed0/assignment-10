import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../Provider/AuthProvider';
import { auth, googleProvider } from '../../Firebase/firebase.config';
import { signInWithPopup } from 'firebase/auth';

const Register = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, profileUpdate } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation()


    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then((userInfo) => {
                console.log("User created:", userInfo);
                toast.success("Account created successfully!");
                profileUpdate(data.name, data.photoURL)
                    .then(() => {
                        console.log("Profile updated successfully");
                        navigate(location.state ? location.state : "/login")

                    })
                    .catch((err) => {
                        console.error("Profile update error:", err);
                        toast.error("Profile update failed. Try again.");
                    });

            })
            .catch((error) => {
                if (error.code === "auth/email-already-in-use") {
                    toast.error("This email is already registered!");
                } else {
                    console.error("Registration error:", error);
                    toast.error("Registration failed. Please try again.");
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
        <div className="max-h-full mx-2 flex items-center justify-center bg-gray-100 font-poppins">
            <Toaster position="top-right" />
            <div className="bg-white  shadow-2xl p-10 w-[450px]">
                <h1 className="text-3xl font-semibold text-center text-amber-500 mb-8">Register for an Account</h1>

                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                        <input
                            type="text"
                            {...register("name")}
                            className="w-full bg-[#F3F3F3] px-4 py-3  text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
                            placeholder="Enter your full name"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Email</label>
                        <input
                            type="email"
                            {...register("email")}
                            className="w-full bg-[#F3F3F3] px-4 py-3  text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Photo URL</label>
                        <input
                            type="url"
                            {...register("photoURL")}
                            className="w-full bg-[#F3F3F3] px-4 py-3  text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
                            placeholder="Enter your photo URL"
                            required
                        />
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
                                className="w-full bg-[#F3F3F3] px-4 py-3  text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
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
                    {errors.password && <p className="text-amber-500 text-sm">{errors.password.message}</p>}

                    <button
                        type="submit"
                        value="Register"
                        className="w-full bg-amber-600 text-xl font-semibold text-white py-3  hover:bg-black transition duration-200"
                    >
                        Register
                    </button>

                </form>
                <div className="text-center my-4">
                    <span className="">or login with</span>
                </div>

                <button
                    onClick={handleGoogleLogin}
                    className="flex items-center gap-2 font-semibold border-2 py-2 w-full hover:bg-amber-400 hover:text-white justify-center "
                >
                    <FcGoogle className="text-3xl" /> Login With Google
                </button>
                <div className="text-center mt-6 text-gray-600">
                    Already have an account?{" "}
                    <Link to={"/login"} className="text-amber-500 font-medium hover:underline">
                        Login here
                    </Link>
                </div>


            </div>
        </div>
    );
};

export default Register;