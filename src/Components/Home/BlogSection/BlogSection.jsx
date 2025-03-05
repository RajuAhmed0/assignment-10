import React from "react";

const BlogSection = () => {
    const blogs = [
        {
            id: 1,
            date: "February 01,2018",
            comments: "9 comment",
            title: "Clash of Titans: Rugby Battle for Glory",
            description: "Two powerhouse teams collide in an intense rugby showdown, where strength, strategy, and determination will decide the victore...",
            image: "https://i.ibb.co.com/6kp2q0J/Blog4.jpg",
        },
        {
            id: 2,
            date: "January 02,2019",
            comments: "13 comment",
            title: "Frozen Thrills: The Ultimate Winter Sports Showdown",
            description: "From the adrenaline of downhill skiing to the precision of ice skating, winter sports bring excitement to the coldest months. ...",
            image: "https://i.ibb.co.com/1tGJHQ4k/Blog3.jpg",
        },
        {
            id: 3,
            date: "January 03,2019",
            comments: "67 comment",
            title: "Conquering the Cold: The Thrill of Winter Sports",
            description: "As the temperatures drop, the excitement rises in the world of winter sports...",
            image: "https://i.ibb.co.com/yFKdDvSn/Blog2.jpg",
        },
        {
            id: 4,
            date: "January 03,2019",
            comments: "25 comment",
            title: " Pedal to Glory: The Thrill of Bicycle Racing",
            description: "Speed, endurance, and strategy come together in the electrifying world of bicycle racing...",
            image: "https://i.ibb.co.com/GQTwdx7z/Blog1.jpg",
        },
    ];

    return (
        <section className="py-12 max-w-7xl mx-auto xl:px-0 px-2 text-center">
            <h2 className="text-3xl font-bold text-gray-900">FROM OUR BLOG</h2>
            <p className="text-gray-500 mt-2">
                Heart, hustle, and dedication—every game, every play, every moment counts.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
                {/* Featured Blog Post */}
                <div className="relative shadow-lg  overflow-hidden">
                    <img
                        src={blogs[0].image}
                        alt="blog"
                        className="w-full h-96 object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute bottom-0 bg-white p-5 w-full shadow-md">
                        <p className="text-sm text-gray-500">
                            {blogs[0].date} | {blogs[0].comments}
                        </p>
                        <h3 className="text-lg font-bold mt-1 text-amber-500">{blogs[0].title}</h3>
                        <p className="text-gray-600 text-sm mt-1">{blogs[0].description}</p>
                        <a className="text-amber-500 font-semibold mt-2 block hover:underline">
                            READ MORE
                        </a>
                    </div>
                </div>

                {/* Other Blog Posts */}
                <div className="grid gap-4">
                    {blogs.slice(1).map((blog) => (
                        <div key={blog.id} className="flex bg-white shadow-lg  overflow-hidden">
                            <img
                                src={blog.image}
                                alt="blog"
                                className="w-36 h-36 object-cover transition-transform duration-300 hover:scale-105"
                            />
                            <div className="p-4 text-left">
                                <p className="text-sm text-gray-500">{blog.date} | {blog.comments}</p>
                                <h3 className="text-lg font-bold mt-1 text-amber-500">{blog.title}</h3>
                                <p className="text-gray-600 text-sm mt-1">{blog.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default BlogSection;
