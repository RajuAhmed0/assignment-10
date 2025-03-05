import React from 'react';

const Aboute = () => {
    return (
        <div>
            <div
                className="hero w-full max-h-[550px] bg-cover bg-center "
                style={{ backgroundImage: "url('https://i.ibb.co.com/M57DxkFQ/123.jpg')" }}
            >
                <div className="hero-overlay bg-black bg-opacity-50"></div>
                <div className="hero-content text-center text-white  xl:py-28 md:py-24 py-9">
                    <div className="max-w-2xl px-4">
                        <h1 className="text-3xl md:text-5xl font-bold text-amber-500 animate__animated animate__fadeInRight animate__slow">
                            SAFETY WITH
                        </h1>
                        <h1 className="text-3xl md:text-5xl font-bold  animate__animated animate__fadeInRight animate__slow">
                            SUPERB COMFORT
                        </h1>
                        <p className="mt-4 text-sm md:text-lg text-yellow-300 animate__animated animate__fadeInLeft animate__slow">
                            Snow climbing gear ensures traction, stability, and safety, including tools for ascent, self-arrest, insulation, rope systems, and avalanche protection.
                        </p>
                        <button className="mt-6 bg-transparent border md:text-base text-sm hover:bg-amber-500 duration-500 text-white font-semibold px-6 py-3 rounded-full shadow-md transition animate__animated animate__fadeInLeft animate__slow animate__delay-1s">
                            EXPLORE MORE
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-zinc-800 text-white py-6 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
                    {/* Delivered with Care */}
                    <div className="flex flex-col items-center animate__animated animate__fadeInLeft animate__slow">
                        <div className="text-orange-500 text-4xl mb-2">&#x1F6E1;</div>
                        <h3 className="font-bold text-lg">DELIVERED WITH CARE</h3>
                        <p className="text-gray-400 text-sm">Each product item is carefully checked before appearing on Gaion.</p>
                    </div>

                    {/* Excellent Quality */}
                    <div className="flex flex-col items-center animate__animated animate__fadeInUp animate__slow">
                        <div className="text-orange-500 text-4xl mb-2">&#x1F3C5;</div>
                        <h3 className="font-bold text-lg">EXCELLENT QUALITY</h3>
                        <p className="text-gray-400 text-sm">All these products are under the brand reputation, with clear origins.</p>
                    </div>

                    {/* Faster Delivery */}
                    <div className="flex flex-col items-center animate__animated animate__fadeInRight animate__slow">
                        <div className="text-orange-500 text-4xl mb-2">&#x1F69A;</div>
                        <h3 className="font-bold text-lg">FASTER DELIVERY</h3>
                        <p className="text-gray-400 text-sm">Quick and reliable delivery service, ensuring your packages arrive on time.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aboute;