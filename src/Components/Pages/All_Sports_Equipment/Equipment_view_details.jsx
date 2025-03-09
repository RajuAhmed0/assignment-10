
import { Link, useLoaderData } from 'react-router-dom';

const Equipment_View_details = () => {

    const allSportsData = useLoaderData()
    console.log(allSportsData);

    return (
        <div>
            <div className="flex justify-center items-center min-h-screen p-6">
                <div className="max-w-5xl w-full shadow-xl p-6 lg:flex">
                    {/* Product Image */}
                    <div className="lg:w-1/2 flex justify-center">
                        <img
                            src={ allSportsData.image}
                            alt="Product"
                            className="w-full max-w-sm transition-transform duration-500 hover:scale-105"
                        />
                    </div>

                    {/* Product Details */}
                    <div className="lg:w-1/2 mt-6 lg:mt-0 lg:pl-6">
                        <h2 className="text-3xl font-bold text-gray-800">{ allSportsData.name}</h2>
                        <p className="text-amber-600 text-2xl font-semibold mt-2">{ allSportsData.price}</p>
                        <div className="mt-4">
                            <span className="font-semibold">Description:</span> { allSportsData.description}
                        </div>
                        <div className="mt-4">
                            <span className="font-semibold">Brand Name:</span> { allSportsData.brand}
                        </div>
                        <div className="mt-4">
                            <span className="font-semibold">Stock:</span> { allSportsData.stock}
                        </div>

                        <div className="mt-6 flex gap-4">
                            <Link to={"/all-sports-equipment"}>
                                <button className="bg-amber-600 hover:-rotate-3 hover:bg-black text-white px-6 py-3">
                                    Back to Home
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Equipment_View_details;
