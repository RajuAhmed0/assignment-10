import React from 'react';

const Add_Equipment = () => {
    return (
        <div>
            <div>

                <div
                    className="  flex items-center justify-center  to-purple-50 p-5"
                    data-aos="fade-up"
                >
                    <div
                        className=" shadow-md p-10 w-full max-w-3xl"
                        data-aos="zoom-in"
                    >
                        <h2 className="text-2xl font-bold text-center mb-6 text-amber-400">
                            Add New Equipment
                        </h2>
                        <form /* onSubmit={handleSubmitForm} */ className="space-y-6">
                            {/* Image URL */}
                            <div className="space-y-2">
                                <label  className="">
                                    Image URL
                                </label>
                                <input
                                    type="url"
                                    id="image"
                                    name="image"
                                    placeholder="Enter the image URL"
                                    className="w-full px-4 py-2 bg-base-100 border focus:outline-none focus:ring-2 focus:ring-amber-400"
                                    required
                                />
                            </div>
                            {/* Item Name */}
                            <div className="space-y-2">
                                <label  className="">
                                    Item Name
                                </label>
                                <input
                                    type="text"
                                    id="itemName"
                                    name="itemName"
                                    placeholder="Enter the item name"
                                    className="w-full px-4 py-2 bg-base-100 border focus:outline-none focus:ring-2 focus:ring-amber-400"
                                    required
                                />
                            </div>
                            {/* Category Name */}
                            <div className="space-y-2">
                                <label  className="">
                                    Category Name
                                </label>
                                <select
                                    id="categoryName"
                                    name="categoryName"
                                    className="w-full px-4 py-2 bg-base-100 border focus:outline-none focus:ring-2 focus:ring-amber-400"
                                    required
                                >
                                    <option value="" >
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
                                <label  className="">
                                    Description
                                </label>
                                <textarea
                                    id="description"
                                    name="description"
                                    placeholder="Enter a description"
                                    className="w-full px-4 py-2 bg-base-100 border focus:outline-none focus:ring-2 focus:ring-amber-400"
                                    rows="3"
                                    required
                                ></textarea>
                            </div>
                            {/* Price */}
                            <div className="space-y-2">
                                <label  className="">
                                    Price
                                </label>
                                <input
                                    type="number"
                                    id="price"
                                    name="price"
                                    min="1"
                                    placeholder="Enter the price"
                                    className="w-full px-4 py-2 bg-base-100 border focus:outline-none focus:ring-2 focus:ring-amber-400"
                                    required
                                />
                            </div>
                            {/* Rating */}
                            <div className="space-y-2">
                                <label  className="">
                                    Rating
                                </label>
                                <input
                                    type="number"
                                    id="rating"
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
                                <label  className="">
                                    Customization
                                </label>
                                <input
                                    type="text"
                                    id="customization"
                                    name="customization"
                                    placeholder="e.g., Bat with extra grip"
                                    className="w-full px-4 bg-base-100 py-2 border focus:outline-none focus:ring-2 focus:ring-amber-400"
                                />
                            </div>
                            {/* Processing Time */}
                            <div className="space-y-2">
                                <label  className="">
                                    Processing Time
                                </label>
                                <input
                                    type="text"
                                    id="processingTime"
                                    name="processingTime"
                                    placeholder="e.g., 3-5 days"
                                    className="w-full px-4 bg-base-100 py-2 border focus:outline-none focus:ring-2 focus:ring-amber-400"
                                />
                            </div>
                            {/* Stock Status */}
                            <div className="space-y-2">
                                <label  className="">
                                    Stock Status
                                </label>
                                <input
                                    type="text"
                                    id="stockStatus"
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
                             /*        value={user?.email || ""} */
                                    readOnly
                                    className="w-full px-4 py-2 border bg-base-100"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="">User Name</label>
                                <input
                                    type="text"
                                  /*   value={
                                        user?.displayName || matchedUser
                                            ? matchedUser.name
                                            : "name not found"
                                    } */
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
        </div>
    );
};

export default Add_Equipment;