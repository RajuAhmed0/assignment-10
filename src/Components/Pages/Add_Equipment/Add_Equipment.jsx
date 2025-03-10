import React, { useContext, useState, useEffect } from "react";
import Swal from "sweetalert2"; // Ensure this import is correct
import { AuthContext } from "../../Provider/AuthProvider";

const Add_Equipment = () => {
    const { user } = useContext(AuthContext);
    const handleSubmitForm = (e) => {
        e.preventDefault();
        const form = e.target;

        const newEquipment = {
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

        console.log(newEquipment);
        
        // POST the new product to database
        fetch(`https://assignment-10-server-omega-five.vercel.app/myEquipment`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newEquipment),
        })
            .then((res) => res.json())
            .then((response) => {
                if (response.ok) {
                    Swal.fire({
                        title: "Success!",
                        text: "Product added successfully!",
                        icon: "success",
                        confirmButtonText: "OK",
                    });
                } else {
                    Swal.fire({
                        title: "Success!",
                        text: "Product added successfully!",
                        icon: "success",
                        confirmButtonText: "OK",
                    }).then(() => {
                        // Clear form fields after submission
                        form.reset();
                    });
                }
            })
            .catch((error) => {
                console.error("Error adding product:", error);
                Swal.fire({
                    title: "Error!",
                    text: "An error occurred while adding the product.",
                    icon: "error",
                    confirmButtonText: "OK",
                });
            });
    };

    return (
        <div>

            <div
                className="min-h-screen  flex items-center justify-center  to-purple-50 p-5"
                data-aos="fade-up"
            >
                <div
                    className=" shadow-md p-10 w-full max-w-4xl"
                    data-aos="zoom-in"
                >
                    <h2 className="text-2xl font-bold text-center mb-6 text-amber-400">
                        Add New Equipment
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
                                placeholder="Enter the image URL"
                                className="w-full px-4 py-2 bg-base-100 border focus:outline-none focus:ring-2 focus:ring-amber-400"
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
                                placeholder="Enter the item name"
                                className="w-full px-4 py-2 bg-base-100 border focus:outline-none focus:ring-2 focus:ring-amber-400"
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
                                className="w-full px-4 py-2 bg-base-100 border focus:outline-none focus:ring-2 focus:ring-amber-400"
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
                                placeholder="Enter a brief description"
                                className="w-full px-4 py-2 bg-base-100 border focus:outline-none focus:ring-2 focus:ring-amber-400"
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
                                min={1}
                                name="price"
                                placeholder="Enter the price"
                                className="w-full px-4 py-2 bg-base-100 border focus:outline-none focus:ring-2 focus:ring-amber-400"
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
                                placeholder="Enter the rating (1-5)"
                                className="w-full px-4 py-2 bg-base-100 border focus:outline-none focus:ring-2 focus:ring-amber-400"
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
                                placeholder="e.g., Bat with extra grip"
                                className="w-full px-4 bg-base-100 py-2 border focus:outline-none focus:ring-2 focus:ring-amber-400"
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
                                placeholder="e.g., 3-5 days"
                                className="w-full px-4 bg-base-100 py-2 border focus:outline-none focus:ring-2 focus:ring-amber-400"
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
                                placeholder="Available quantity"
                                className="w-full px-4 bg-base-100 py-2 border focus:outline-none focus:ring-2 focus:ring-amber-400"
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
                                className="w-full px-4 py-2 border bg-base-100"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="">User Name</label>
                            <input
                                type="text"
                                value={user?.displayName}
                                readOnly
                                className="w-full px-4 py-2 border bg-base-100"
                            />
                        </div>
                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="w-full py-3 bg-amber-600 text-white hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                            >
                                Add Equipment
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Add_Equipment;
