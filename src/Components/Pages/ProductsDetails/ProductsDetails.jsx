import React from 'react';
import { Link, useLoaderData} from 'react-router-dom';

const ProductsDetails = () => {


    const sportsData = useLoaderData()
    console.log(sportsData);


    return (
        <div>
            <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
                <div className="max-w-5xl w-full bg-white shadow-xl  p-6 lg:flex">
                    {/* Product Image */}
                    <div className="lg:w-1/2 flex justify-center">
                        <img
                            src={sportsData.Image}
                            alt="Product"
                            className="w-full max-w-sm transition-transform duration-500 hover:scale-105"
                        />
                    </div>

                    {/* Product Details */}
                    <div className="lg:w-1/2 mt-6 lg:mt-0 lg:pl-6">
                        <h2 className="text-3xl font-bold text-gray-800"> {sportsData.Item_Name}</h2>
                        <p className="text-amber-600 text-2xl font-semibold mt-2">${sportsData.Price}</p>
                        <div className="mt-4">
                            <span className="font-semibold">Description:</span>{sportsData.Description}
                        </div>


                        <div className="mt-4">
                            <span className="font-semibold">Category Name:</span>{sportsData.Category_Name}
                        </div>
                        <div>
                            <span className="font-semibold">Rating:</span> {sportsData.Rating}
                        </div>
                        <div className="mt-2">
                            <span className="font-semibold">Delivery:</span> {sportsData.Processing_Time}
                        </div>
                        <div className="mt-2">
                            <span className="font-semibold">Availability:</span> <span className="text-amber-600">In Stock</span>
                        </div>

                        <div className="mt-4">
                            <span className="font-semibold">Stock:</span>
                            {sportsData.Stock_Status}
                        </div>



                        <div className="mt-6 flex gap-4">
                            <Link to={"/"}><button className="bg-amber-600 hover:-rotate-3 hover:bg-black text-white px-6 py-3">Back to Home</button></Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsDetails;