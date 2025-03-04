import React from 'react';
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-100 border-t-4 border-yellow-400">
                <div className="max-w-7xl mx-auto xl:px-0 md:px-3 px-6 py-10">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Logo & Contact */}
                        <div>
                            <h2 className="text-2xl font-bold text-yellow-500 flex items-center">
                                IronGrip Sports<span className="text-gray-800">.</span>
                            </h2>
                            <div className="mt-4">
                                <p className="text-gray-600">Got questions? Call us 24/7</p>
                                <p className="text-lg font-semibold text-gray-700">
                                    (800) 8001-8588, (0600) 874 548
                                </p>
                            </div>
                            <p className="mt-4 text-gray-600">
                                <span className="font-semibold">Contact info</span>
                                <br />
                                17 Princess Road, London, UK
                            </p>
                            {/* Social Icons */}
                            <div className="flex space-x-4 mt-4">
                                <a className="text-gray-600 text-3xl hover:text-gray-800">
                                    <i className=" "><FaFacebook /></i>
                                </a>
                                <a className="text-gray-600 text-3xl hover:text-gray-800">
                                    <i className=" "><FaTwitter /></i>
                                </a>
                                <a className="text-gray-600 text-3xl hover:text-gray-800">
                                    <i className=""><FaPinterest /></i>
                                </a>
                                <a className="text-gray-600 text-3xl hover:text-gray-800">
                                    <i className=""><FaInstagram /></i>
                                </a>
                            </div>
                        </div>

                        {/* Find In Fast */}
                        <div>
                            <h3 className="text-lg font-semibold text-yellow-500">Find In Fast</h3>
                            <ul className="mt-4 space-y-2 text-gray-600">
                                <li><a className="hover:text-gray-800">Accessories</a></li>
                                <li><a className="hover:text-gray-800">Gaming</a></li>
                                <li><a className="hover:text-gray-800">Cricket Bat</a></li>
                                <li><a className="hover:text-gray-800">Football</a></li>
                                <li><a className="hover:text-gray-800">T-Shirt</a></li>
                                <li><a className="hover:text-gray-800">Badminton</a></li>
                            </ul>
                        </div>

                        {/* Information */}
                        <div>
                            <h3 className="text-lg font-semibold text-yellow-500">Information</h3>
                            <ul className="mt-4 space-y-2 text-gray-600">
                                <li><a className="hover:text-gray-800">About Us</a></li>
                                <li><a className="hover:text-gray-800">Contact Us</a></li>
                                <li><a className="hover:text-gray-800">All Collections</a></li>
                                <li><a className="hover:text-gray-800">Privacy Policy</a></li>
                                <li><a className="hover:text-gray-800">Terms & Conditions</a></li>
                            </ul>
                        </div>

                        {/* In the Spotlight */}
                        <div>
                            <h3 className="text-lg font-semibold text-yellow-500">In the Spotlight</h3>
                            <ul className="mt-4 space-y-2 text-gray-600">
                                <li><a className="hover:text-gray-800">Next-Level Gear</a></li>
                                <li><a className="hover:text-gray-800">Toys</a></li>
                                <li><a className="hover:text-gray-800">Champions’ Choice</a></li>
                                <li><a className="hover:text-gray-800">Home Products</a></li>
                                <li><a className="hover:text-gray-800">Elite Gear Showcase</a></li>
                                <li><a className="hover:text-gray-800">Sports & Outdoors</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <hr className="border-yellow-500 " />
                    <p className="text-center text-gray-800 md:text-sm text-xs mt-5 pb-3">
                        Copyright 2025 – IronGrip Sports | Designed By Raju Ahmed
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;