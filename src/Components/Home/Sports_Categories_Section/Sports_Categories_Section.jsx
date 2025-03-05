import React from 'react';

const Sports_Categories_Section = () => {

    const categories = [
        {
            name: "Footwear",
            products: 5,
            image: "https://i.ibb.co.com/gFD91DHn/ea25c52c-dffc-41f0-9cca-ae5bc7bcd273-removebg-preview.png",
            bg: "bg-white",
        },
        {
            name: "Headwear",
            products: 4,
            image: "https://i.ibb.co.com/JjwQ6ysW/pngegg-23-removebg-preview.png",
            bg: "bg-white",
        },
        {
            name: "Equipment",
            products: 7,
            image: "https://i.ibb.co.com/4gZRjD6b/Daco-4973295-removebg-preview.png",
            bg: "bg-white",
        },
        {
            name: "Apparel",
            products: 8,
            image: "https://i.ibb.co.com/MyZHcHY0/pngegg-removebg-preview.png",
            bg: "bg-white",
        },
        {
            name: "Trousers ",
            products: 4,
            image: "https://i.ibb.co.com/nsvJQvpx/pngegg-12-removebg-preview-1.png",
            bg: "bg-white",
        },
        {
            name: "Accessories",
            products: 8,
            image: "https://i.ibb.co.com/xyXRCXx/pngegg-16-removebg-preview-1.png",
            bg: "bg-white",
        },
    ];


    return (
        <div>
            <section className="max-w-7xl mx-auto xl:px-0 px-2 py-12">
                <h2 className="text-center text-gray-800 uppercase text-xl font-semibold">
                    Our Category
                </h2>
                <h1 className="text-center text-4xl text-amber-500 font-bold mt-2 mb-6">
                    Sport Category
                </h1>
                <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className={`p-6 flex items-center ${category.bg} shadow-lg transition-transform transform duration-300 hover:scale-105`}
                        >
                            <div className="flex-1">
                                <h3 className="text-xl text-amber-400 font-semibold">{category.name}</h3>
                                <p className="text-gray-600">{category.products} Products</p>
                            </div>
                            <img
                                src={category.image}
                                alt={category.name}
                                className="w-32 sm:w-40 md:w-52 object-contain min-w-[100px]"
                            />
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
};

export default Sports_Categories_Section;