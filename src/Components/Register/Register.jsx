import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className='mt-[38px] max-w-[1140px] mx-auto pb-28'>
                <div className="max-w-[752px] max-h-[850px] mt-11 shadow-xl flex mx-auto font-poppins rounded-md">
                    <div className="bg-white rounded-[5px] p-[73px] mb-[125px] w-[752px]">
                        <h1 className="text-3xl font-semibold text-center text-amber-400 mb-8">Register for an Account</h1>

                        <form className="space-y-6 " /* onSubmit={handleSubmit(onSubmit)} */>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                                <input
                                    type="text"
                                    // {...register("name")}
                                    className="w-full railwayFont bg-[#F3F3F3] px-4 py-3  text-gray-700 focus:outline-none focus:ring-2 focus:ring-black"
                                    placeholder="Enter your full Name"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    // {...register("email")}
                                    className="w-full railwayFont bg-[#F3F3F3] px-4 py-3  text-gray-700 focus:outline-none focus:ring-2 focus:ring-black"
                                    placeholder="Enter your Email"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Photo URL</label>
                                <input
                                    type="photoURL"
                                    // {...register("photoURL")}
                                    className="w-full railwayFont bg-[#F3F3F3] px-4 py-3  text-gray-700 focus:outline-none focus:ring-2 focus:ring-black"
                                    placeholder="Enter your photo URL"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Password</label>
                                <input
                                    type="password"
                                    // {...register("password")}
                                    className="w-full railwayFont bg-[#F3F3F3] px-4 py-3  text-gray-700 focus:outline-none focus:ring-2 focus:ring-black"
                                    placeholder="Enter your Password"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                value="Register"
                                className="w-full bg-amber-400 text-xl font-semibold text-white py-3  hover:bg-black transition duration-200"
                            >
                                Register
                            </button>

                        </form>
                        <div className="text-center my-4">
                            <span className="text-amber-bg-amber-400">or login with</span>
                        </div>


                        <button
                            /*   onClick={handleGoogleLogin} */
                            className="flex items-center gap-2 font-semibold border-2 py-2 w-full hover:bg-amber-400 hover:text-white justify-center "
                        >
                            <FcGoogle className="text-3xl" /> Login With Google
                        </button>

                        <div className="text-center mt-6 text-gray-600">
                            Already have an account?{" "}
                            <Link to={"/login"} className="text-amber-400 font-medium hover:underline">
                                Login here
                            </Link>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;