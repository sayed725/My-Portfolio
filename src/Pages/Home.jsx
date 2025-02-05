import React from 'react';
import Banner from '../Components/Banner';
import About from '../Components/About';
import Skills from '../Components/Skills';
import HeroSection from '../Components/Hero';
import Projects from '../Components/Projects';
import Education from '../Components/Education';
import ContactForm from '../Components/Contact';

const Home = () => {
    return (
        <div>
           {/* <Banner></Banner> */}
           <HeroSection></HeroSection>
           <About></About>
           <Skills></Skills>
           <Projects></Projects>
           <Education></Education>
           <ContactForm></ContactForm>
        </div>
    );
};

export default Home;