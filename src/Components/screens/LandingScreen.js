import React from 'react';
import Portfolio from '../Portfolio';
import Navbar from '../Navbar';
import About from '../About';
import Certificate from '../Certificate';
import Projects from '../Projects';
import More from '../More';
import Contact from '../Contact';
import '../Portfolio.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const LandingScreen = () => {
    return (
        <Router>
            <Navbar className='navbar' />
            <div className='landingScreen' style={{ display: 'flex' }}>
                <Portfolio />
                <Routes>
                    <Route path="/About" element={<About />} />
                    <Route path="/Certificate" element={<Certificate />} />
                    <Route path="/Projects" element={<Projects />} />
                    <Route path="/More" element={<More />} />
                    <Route path="/Contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
};

export default LandingScreen;
