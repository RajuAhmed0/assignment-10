import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
            });
    };
    console.log("Email Photo :", user?.photoURL);
    return (
        <nav className="bg-white shadow-sm w-full">
            <div className="container max-w-7xl mx-auto xl:px-0 md:px-3 px-2 flex items-center justify-between py-4">
                {/* Logo */}
                <div className="lg:text-2xl md:text-xl text-2xl font-bold flex items-center">
                    <span className="text-black">IronGrip</span>
                    <span className="text-yellow-400">Sports</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6 lg:text-base md:text-sm text-base font-medium text-black">
                    <NavLink to="/" className={({ isActive }) => isActive ? "text-yellow-500" : "hover:text-yellow-500 transition duration-500"}>
                        HOME
                    </NavLink>
                    <NavLink to="/all-sports-equipment" className={({ isActive }) => isActive ? "text-yellow-500" : "hover:text-yellow-500 transition duration-500"}>
                        All Sports Equipment
                    </NavLink>
                    <NavLink to="/add-equipment" className={({ isActive }) => isActive ? "text-yellow-500" : "hover:text-yellow-500 transition duration-500"}>
                        Add Equipment
                    </NavLink>
                    <NavLink to="/my-equipment-list" className={({ isActive }) => isActive ? "text-yellow-500" : "hover:text-yellow-500 transition duration-500"}>
                        My Equipment List
                    </NavLink>
                </div>

                {/* Login & Register Section */}
                <div className="hidden md:flex items-center space-x-4">
                    <div className="flex gap-4">
                        {user ? (
                            <>
                                <img src={user.photoURL} alt="Profile" className="w-10 h-10 rounded-full" />
                                <button onClick={handleLogOut} className="lg:px-6 px-2 py-1 text-black hover:text-white lg:text-base md:text-sm text-base font-semibold bg-yellow-500 rounded-lg hover:bg-yellow-400 transition duration-300">
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link to="/login">
                                    <button className="lg:px-6 px-2 lg:py-2 py-1 text-black hover:text-white lg:text-base md:text-sm text-base font-semibold bg-yellow-500 rounded-lg hover:bg-yellow-400 transition duration-300">
                                        Login
                                    </button>
                                </Link>
                                <Link to="/register">
                                    <button className="lg:px-6 px-2 lg:py-2 py-1 text-black hover:text-white lg:text-base md:text-sm text-base font-semibold bg-yellow-500 rounded-lg hover:bg-yellow-400 transition duration-300">
                                        Register
                                    </button>
                                </Link>
                            </>
                        )}
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
                    <div className="w-6 h-1 bg-black mb-1"></div>
                    <div className="w-6 h-1 bg-black mb-1"></div>
                    <div className="w-6 h-1 bg-black"></div>
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white shadow-md py-4 px-6 flex flex-col space-y-4 font-medium text-black">
                    <NavLink to="/" className={({ isActive }) => isActive ? "text-yellow-500" : "hover:text-yellow-500"}>
                        HOME
                    </NavLink>
                    <NavLink to="/all-sports-equipment" className={({ isActive }) => isActive ? "text-yellow-500" : "hover:text-yellow-500"}>
                        All Sports Equipment
                    </NavLink>
                    <NavLink to="/add-equipment" className={({ isActive }) => isActive ? "text-yellow-500" : "hover:text-yellow-500"}>
                        Add Equipment
                    </NavLink>
                    <NavLink to="/my-equipment-list" className={({ isActive }) => isActive ? "text-yellow-500" : "hover:text-yellow-500"}>
                        My Equipment List
                    </NavLink>

                    {/* Login & Register in Mobile Menu */}
                    <div className="flex flex-col space-y-4">
                        {user ? (
                            <>
                                <img src={user.photoURL} alt="Profile" className="w-10 h-10 rounded-full" />
                                <button onClick={handleLogOut} className="px-6 py-2 text-black hover:text-white text-base font-semibold bg-yellow-500 rounded-lg hover:bg-yellow-400 transition duration-300">
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link to="/login">
                                    <button className="px-6 py-2 text-black hover:text-white text-base font-semibold bg-yellow-500 rounded-lg hover:bg-yellow-400 transition duration-300">
                                        Login
                                    </button>
                                </Link>
                                <Link to="/register">
                                    <button className="px-6 py-2 text-black hover:text-white text-base font-semibold bg-yellow-500 rounded-lg hover:bg-yellow-400 transition duration-300">
                                        Register
                                    </button>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
