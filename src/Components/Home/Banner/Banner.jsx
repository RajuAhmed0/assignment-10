import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "animate.css";

const Banner = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const slides = [
        { 
            img: "https://i.ibb.co/ZzZKLKXL/Banner2.jpg", 
            title: "SPORTS COLLECTION", 
            subtitle: "All SPORTS GEAR",
            description: "Discover premium textile jackets designed for all weather conditions.",
        },
        { 
            img: "https://i.ibb.co/CszQ3zNG/Banner3.jpg", 
            title: "SUMMER VIBES", 
            subtitle: "BREATHE EASY ON THE ROAD",
            description: "Lightweight, breathable jackets to keep you cool during summer rides.",
        },
        { 
            img: "https://i.ibb.co/7dJQ4pMg/Banner4.jpg", 
            title: "ALL-SEASON GEAR", 
            subtitle: "PERFORMANCE IN EVERY WEATHER",
            description: "Versatile jackets designed for year-round protection and comfort.",
        },
        { 
            img: "https://i.ibb.co/9mhn2gq9/Banner1.jpg", 
            title: "ADVENTURE READY", 
            subtitle: "GEAR UP FOR YOUR NEXT JOURNEY",
            description: "Durable, high-performance jackets built for the thrill-seekers.",
        }
    ];

    return (
        <div className="relative max-w-full mx-auto">
            <style>
                {`
                    .swiper-button-next, .swiper-button-prev {
                        color: orange !important; 
                    }
                    .swiper-button-next:hover, .swiper-button-prev:hover {
                        color: red !important; 
                    }
                    .swiper-button-next::after, .swiper-button-prev::after {
                        font-size: 28px; 
                    }
                    .swiper-pagination-bullet {
                        background-color: gray !important;
                        opacity: 0.6;
                    }
                    .swiper-pagination-bullet-active {
                        background-color: orange !important;
                        opacity: 1;
                    }
                    .swiper-slide img {
                        transition: opacity 0.5s ease-in-out;
                        object-fit: cover;
                    }
                `}
            </style>
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={10}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 6000, disableOnInteraction: false }}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                className="w-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} className="relative">
                        <img
                            src={slide.img}
                            alt="Banner Image"
                            className="w-full max-h-[550px] lazyload" 
                            loading="lazy" 
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-2xl md:text-4xl font-bold">
                            <div className="flex items-center justify-center px-6 md:px-12 lg:px-24">
                                <div className="relative z-10 max-w-2xl text-center">
                                    {/* Title Animation */}
                                    <p className={` md:text-xl text-base font-semibold italic ${activeIndex === index ? "animate__animated animate__fadeInLeft animate__slow" : ""}`}>
                                        {slide.title}
                                    </p>
                                    
                                    {/* Subtitle Animation */}
                                    <h1 className={`md:text-5xl text-lg font-bold md:mt-2 text-yellow-500 ${activeIndex === index ? "animate__animated animate__fadeInLeft animate__slow" : ""}`}>
                                        {slide.subtitle}
                                    </h1>

                                    {/* Description Animation */}
                                    <p className={`md:text-base text-[9px] md:mt-4  text-white ${activeIndex === index ? "animate__animated animate__backInRight animate__slow " : ""}`}>
                                        {slide.description}
                                    </p>

                                    {/* Button Animation */}
                                    <button className={`md:mt-6  md:px-6 px-2 md:py-3 py-2 bg-transparent border hover:bg-yellow-500 duration-300 text-white hover:text-black font-semibold md:text-lg text-xs rounded-full ${activeIndex === index ? "animate__animated animate__backInUp animate__slow " : ""}`}>
                                        EXPLORE MORE → 
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Banner;
