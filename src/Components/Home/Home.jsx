import React from 'react';
import Banner from './Banner/Banner';
import BlogSection from './BlogSection/BlogSection';
import Aboute from './Aboute/Aboute';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BlogSection></BlogSection>
            <Aboute></Aboute>
        </div>
    );
};

export default Home;