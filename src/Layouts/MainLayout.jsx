import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

import Projects from '../components/Projects';

const MainLayout = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <Hero></Hero>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
            
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;