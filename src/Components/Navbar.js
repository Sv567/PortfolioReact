import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Certificate">Certificate</Link></li>
                <li><Link to="/Projects">Projects</Link></li>
                <li><Link to="/More">More</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
