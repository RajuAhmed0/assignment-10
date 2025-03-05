import React from 'react';

const BannerButtom = () => {
    const categories = [
        { name: "Cricket", products: 9, image: "https://i.ibb.co.com/fdwVtnF2/buttomimg-1.jpg" },
        { name: "Hiking", products: 8, image: "https://i.ibb.co.com/1tybT0ms/buttomimg-5.jpg" },
        { name: "Golf", products: 17, image: "https://i.ibb.co.com/xqvYc0KJ/buttomimg-4.jpg" },
        { name: "Badmintion", products: 8, image: "https://i.ibb.co.com/Pqh68nS/buttomimg-3.jpg" },
        { name: "Volleyball", products: 8, image: "https://i.ibb.co.com/BV8QsNH2/buttomimg-2.jpg" }
    ];

    return (
        <div>
            <div className="container mx-auto max-w-7xl py-5 xl:px-0 px-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="relative group overflow-hidden shadow-lg"
                        >
                            <img
                                src={category.image}
                                alt={category.name}
                                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white">
                                <h2 className="text-xl font-bold text-yellow-400">{category.name}</h2>
                                <p className="text-sm">({category.products} Products)</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BannerButtom;