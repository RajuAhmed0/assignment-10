import React, { useContext, useEffect } from "react";
import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";


const View_Details = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const product = useLoaderData();
    console.log(product);

    const handleSubmitForm = (e) => {
        e.preventDefault();
        const form = e.target;

        const updatedEquipment = {
            image: form.image.value,
            itemName: form.itemName.value,
            categoryName: form.categoryName.value,
            description: form.description.value,
            price: form.price.value,
            rating: form.rating.value,
            customization: form.customization.value,
            processingTime: form.processingTime.value,
            stockStatus: form.stockStatus.value,
            userEmail: user?.email,
            userName: user?.displayName,
        };
        console.log(updatedEquipment);

        // Validate the form
        if (
            !updatedEquipment.image ||
            !updatedEquipment.itemName ||
            !updatedEquipment.categoryName ||
            !updatedEquipment.description ||
            !updatedEquipment.price ||
            !updatedEquipment.rating ||
            !updatedEquipment.stockStatus
        ) {
            Swal.fire({
                title: "Error!",
                text: "All fields are required.",
                icon: "warning",
                confirmButtonText: "OK",
            });
            return;
        }

        // Send PUT request to update the product
        fetch(`https://assignment-10-server-omega-five.vercel.app/myEquipment/${product._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedEquipment),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    navigate('/my-equipment-list')
                    Swal.fire({
                        title: "Success!",
                        text: "Equipment Update successfully!",
                        icon: "success",
                        confirmButtonText: "OK",
                    });
                } else {
                    Swal.fire({
                        title: "Success!",
                        text: "Equipment Update successfully!",
                        icon: "success",
                        confirmButtonText: "OK",
                    });
                }
            });
    };

    return (
        <div>
            <div className="min-h-screen py-36 flex items-center justify-center  p-5"  >
                <div className="bg-base-100 shadow-md p-10 w-full max-w-4xl" >
                    <h2 className="text-2xl font-bold text-center mb-6 text-amber-500">
                        Update Now Equipment
                    </h2>
                    <form onSubmit={handleSubmitForm} className="space-y-6">
                        {/* Image URL */}
                        <div className="space-y-2">
                            <label className="">
                                Image URL
                            </label>
                            <input
                                type="url"

                                name="image"
                                defaultValue={product.image}
                                placeholder="Enter the image URL"
                                className="w-full px-4 py-2 border bg-base-100 focus:outline-none focus:ring-2 focus:ring-amber-400"
                                required
                            />
                        </div>
                        {/* Item Name */}
                        <div className="space-y-2">
                            <label className="">
                                Item Name
                            </label>
                            <input
                                type="text"

                                name="itemName"
                                defaultValue={product.itemName}
                                placeholder="Enter the item name"
                                className="w-full px-4 py-2 border bg-base-100  focus:outline-none focus:ring-2 focus:ring-amber-400"
                                required
                            />
                        </div>
                        {/* Category Name */}
                        <div className="space-y-2">
                            <label className="">
                                Category Name
                            </label>
                            <select

                                name="categoryName"
                                defaultValue={product.categoryName}
                                className="w-full px-4 py-2 border bg-base-100  focus:outline-none focus:ring-2 focus:ring-amber-400"
                                required
                            >
                                <option value="">
                                    Select a category
                                </option>
                                <option value="cricket">Cricket</option>
                                <option value="football">Football</option>
                                <option value="basketball">Basketball</option>
                                <option value="swimming">Swimming</option>
                                <option value="badminton">Badminton</option>
                                <option value="volleyball">Volleyball</option>
                                <option value="hockey">Hockey</option>
                            </select>
                        </div>
                        {/* Description */}
                        <div className="space-y-2">
                            <label className="">
                                Description
                            </label>
                            <textarea

                                name="description"
                                defaultValue={product.description}
                                placeholder="Enter a brief description"
                                className="w-full px-4 py-2 border bg-base-100  focus:outline-none focus:ring-2 focus:ring-amber-400"
                                rows="3"
                                required
                            ></textarea>
                        </div>
                        {/* Price */}
                        <div className="space-y-2">
                            <label className="">
                                Price
                            </label>
                            <input
                                type="number"

                                name="price"
                                defaultValue={product.price}
                                placeholder="Enter the price"
                                className="w-full px-4 py-2 border bg-base-100  focus:outline-none focus:ring-2 focus:ring-amber-400"
                                required
                            />
                        </div>
                        {/* Rating */}
                        <div className="space-y-2">
                            <label className="">
                                Rating
                            </label>
                            <input
                                type="number"

                                name="rating"
                                defaultValue={product.rating}
                                placeholder="Enter the rating (1-5)"
                                className="w-full px-4 py-2 border bg-base-100  focus:outline-none focus:ring-2 focus:ring-amber-400"
                                min="1"
                                max="5"
                                required
                            />
                        </div>
                        {/* Customization */}
                        <div className="space-y-2">
                            <label className="">
                                Customization
                            </label>
                            <input
                                type="text"

                                name="customization"
                                defaultValue={product.customization}
                                placeholder="e.g., Bat with extra grip"
                                className="w-full px-4 py-2 border bg-base-100  focus:outline-none focus:ring-2 focus:ring-amber-400"
                            />
                        </div>
                        {/* Processing Time */}
                        <div className="space-y-2">
                            <label className="">
                                Processing Time
                            </label>
                            <input
                                type="text"

                                name="processingTime"
                                defaultValue={product.processingTime}
                                placeholder="e.g., 3-5 days"
                                className="w-full px-4 py-2 border bg-base-100  focus:outline-none focus:ring-2 focus:ring-amber-400"
                            />
                        </div>
                        {/* Stock Status */}
                        <div className="space-y-2">
                            <label className="">
                                Stock Status
                            </label>
                            <input
                                type="text"

                                name="stockStatus"
                                defaultValue={product.stockStatus}
                                placeholder="Available quantity"
                                className="w-full px-4 py-2 border bg-base-100  focus:outline-none focus:ring-2 focus:ring-amber-400"
                                required
                            />
                        </div>
                        {/* User Info */}
                        <div className="space-y-2">
                            <label className="">User Email</label>
                            <input
                                type="email"
                                value={user?.email}
                                readOnly
                                className="w-full px-4 py-2 border bg-base-100  "
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="">User Name</label>
                            <input
                                type="text"
                                value={user?.displayName}
                                readOnly
                                className="w-full px-4 py-2 border bg-base-100 "
                            />
                        </div>
                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-amber-500 text-white py-2 hover:bg-amber-600 transition-all"
                                data-aos="fade-up"
                            >
                                Update Product
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default View_Details;
