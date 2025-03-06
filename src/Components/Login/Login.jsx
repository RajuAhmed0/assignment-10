import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div className='mt-[38px] max-w-[1140px] mx-auto pb-28'>
                <div className="max-w-[752px] max-h-[750px] mt-11 shadow-xl flex mx-auto font-poppins rounded-md">
                    <div className="bg-white rounded-[5px] p-[73px] mb-[125px] w-[752px]">
                        <h1 className="text-[35px] font-semibold text-center text-amber-400">Login your account</h1>
                        <div className='border my-[50px]'></div>
                        <form className='p-[21px]'/*  onSubmit={handleSubmit(onSubmit)} */>
                            <div className="mb-4">

                                <label className="block text-gray-700 font-medium mb-2">Email </label>
                                <input type="email" /* {...register("email")}  */className="w-full railwayFont bg-[#F3F3F3] px-[20px] py-[20.5px]" placeholder="Enter your email address" required />
                            </div>
                            <div className="mb-4">

                                <label className="block text-gray-700 font-medium mb-2">Password </label>
                                <input type="password"  /* {...register("password")} */ className="w-full railwayFont bg-[#F3F3F3] px-[20px] py-[20.5px]" placeholder="Enter your password" required />
                            </div>
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
                            // onClick={handleGoogleLogin}
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
            </div>
        </div>
    );
};

export default Login;