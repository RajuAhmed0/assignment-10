import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Fade } from "react-awesome-reveal"
import { AuthContext } from "../../Provider/AuthProvider";

const My_Equipment_List = () => {
    const { user } = useContext(AuthContext);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        fetch(
            `http://localhost:4000/myEquipment`
        )
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }
        , [user]);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen ">
                <div className="spinner animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-amber-500"></div>
            </div>
        );
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (products.length === 0) {
        return (
            <div className="min-h-[500px] ">
                <Fade direction="down">
                    <div className="text-center font-bold  text-3xl mt-8">
                        No equipment found for your email.
                    </div>
                </Fade>
                <div className="">
                    <div className="flex w-96 mx-auto my-10 flex-col gap-4">
                        <div className="skeleton h-44 w-full"></div>
                        <div className="skeleton h-4 w-32"></div>
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-full"></div>
                    </div>
                    <div className="flex w-96 mx-auto my-10 flex-col gap-4">
                        <div className="skeleton h-44 w-full"></div>
                        <div className="skeleton h-4 w-32"></div>
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-full"></div>
                    </div>
                </div>
            </div>
        );
    }
    const hundleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:4000/myEquipment/${_id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            setProducts(products.filter((product) => product._id !== _id));
                            Swal.fire("Deleted!", "Your file has been deleted.", "success");
                        }
                    })
                    .catch(() => Swal.fire("Error!", "Something went wrong.", "error"));
            }
        });
    };

    return (
        <div>

            <div className="min-h-[620px] p-4 md:mx-10">
                <Fade direction="down">
                    <h1 className="text-2xl text-blue-500 my-9 font-bold">
                        My Equipment List ({products.length})
                    </h1>
                </Fade>
                <Fade direction="up" triggerOnce>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 mt-4">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                data-aos="fade-up"
                                className="flex flex-col justify-between group p-5 shadow-lg overflow-hidden "
                            >
                                <img
                                    src={product.image}
                                    alt={product.itemName}
                                    className="w-full h-60  object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <h2 className="text-2xl mt-5 text-yellow-500 font-semibold mb-4">
                                    {product.itemName}
                                </h2>
                                <p className=" ">
                                    <strong>Description: </strong>
                                    {product.description}
                                </p>
                                <p className="">
                                    Customization: {product.customization}
                                </p>

                                <p className="">
                                    Processing Time: {product.processingTime} days
                                </p>
                                <p className="">
                                    Category: {product.categoryName}
                                </p>
                                <p className="text-amber-500 font-bold mt-2">
                                    Price: ${product.price}
                                </p>
                                <p>
                                    Stock Status: {product.stockStatus}
                                </p>
                                <p className=" font-bold mt-2">
                                    Rating: {product.rating}
                                </p>
                                <div className="flex justify-between items-center">

                                    <Link

                                        to={`/productsUpdate/${product._id}`}
                                        className="btn mt-4 bg-orange-500 text-white py-2 px-4 rounded-none hover:bg-orange-600 transition-colors"
                                    >
                                        Update
                                    </Link>

                                    <Link

                                        onClick={() => hundleDelete(product._id)}
                                        className="btn mt-4 bg-amber-400 text-white py-2 px-4 rounded-none hover:bg-amber-500 transition-colors"
                                    >
                                        {/* Delete */}
                                        Delete
                                    </Link>

                                </div>

                            </div>
                        ))}
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default My_Equipment_List;
