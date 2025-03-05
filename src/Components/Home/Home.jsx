import React from 'react';
import Banner from './Banner/Banner';
import BlogSection from './BlogSection/BlogSection';
import Aboute from './Aboute/Aboute';
import Sports_Categories_Section from './Sports_Categories_Section/Sports_Categories_Section';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Sports_Categories_Section></Sports_Categories_Section>
            <BlogSection></BlogSection>
            <Aboute></Aboute>
        </div>
    );
};

export default Home;