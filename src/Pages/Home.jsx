import React, { useEffect } from 'react';

import About from '../Components/About';
import Skills from '../Components/Skills';
import HeroSection from '../Components/Hero';
import Projects from '../Components/Projects';
import Education from '../Components/Education';
import ContactForm from '../Components/Contact';
import { useLocation } from 'react-router-dom';


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