import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
    return (
        <div className='py-7'>
             <h1 className="text-center text-4xl text-amber-500 font-bold mt-2 mb-6">
                   All Product
                </h1>
            <div className="border shadow-lg p-4 w-72 relative bg-white ">
                <div className="absolute top-2 right-2 bg-amber-400 text-white text-xs font-bold px-2 py-1 rounded">
                    SALE!
                </div>
                <img
                    src="https://i.ibb.co.com/xxgTNcD/pngegg-18.png"
                    alt="Bike"
                    className="w-full h-40 object-contain transition-transform duration-500 hover:scale-110"
                />
                <div className="mt-4">
                    <h2 className="text-yellow-500">BIKE</h2>

                    <div className="flex items-center mt-1">
                        <span className="text-amber-500 text-lg">★★★★★</span>
                    </div>
                    <div className="mt-2">

                        <span className="text-xl font-bold text-black ">$1,500</span>
                    </div>
                    <Link to={"view_details"}><button className="mt-4 w-full bg-amber-500 text-white py-2 hover:text-black  font-semibold  hover:bg-yellow-500">
                        View Details
                    </button></Link>
                </div>
            </div>
        </div>
    );
};

export default Products;