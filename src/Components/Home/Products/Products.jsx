import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
    const [sportsData, setSportsData] = useState([]);

    useEffect(() => {
        fetch('https://assignment-10-server-omega-five.vercel.app/sports')
            .then(res => res.json())
            .then(data => setSportsData(data))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div className="py-7 max-w-7xl mx-auto xl:px-0 px-2">
        <h1 className="text-center text-4xl text-amber-500 font-bold mt-2 mb-6">
            All Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
            {sportsData?.map((sports, i) => (
                <div key={i} className="border shadow-lg p-4 w-full relative bg-white ">
                    <div className="absolute top-2 right-2 bg-amber-400 text-white text-xs font-bold px-2 py-1">
                        SALE!
                    </div>
                    <img
                        src={sports.Image}
                        alt={sports.name}
                        className="w-full h-40 object-contain transition-transform duration-500 hover:scale-110"
                    />
                    <div className="mt-4">
                        <h2 className="text-yellow-500 font-semibold">{sports.Item_Name}</h2>
                        <div className="flex items-center mt-1">
                            <span className="text-amber-500 text-lg">★★★★★</span>
                        </div>
                        <div className="mt-2">
                            <span className="text-xl font-bold text-black">${sports.Price}</span>
                        </div>
                        <Link to={`/view_details/${sports._id}`}>
                            <button className="mt-4 w-full bg-amber-500 text-white py-2  hover:text-black font-semibold hover:bg-yellow-500 transition-all duration-300">
                                View Details
                            </button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    </div>
    
    );
};

export default Products;
