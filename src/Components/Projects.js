import React from 'react'
import fashion from './Images/FashioSwap.png'
import bayer from './Images/bayer-askmed.png'
import tinnitus from './Images/tinnitus-blog.png'
import contour from './Images/contour.png'
import EnEmZet from './Images/enemzet.png'
import MyBestWishes from './Images/mybestwishes.png'
import MyWorkPhoto from './Images/myworkphoto.png'
import { Link } from 'react-router-dom';


const Projects = () => {
    return (
        <div className='project-section'>
            <h2>My Projects</h2>
            <div className='links'>
                <ul>
                    <li><Link to='/'>All</Link></li>
                    <li><Link to='/'>Websites</Link></li>
                    <li><Link to='/'>Applications</Link></li>
                    <li><Link to='/'>Games</Link></li>
                </ul>
            </div>
            <div className='project-content'>
                <div className='project-details'>
                    <img src={fashion} />
                    <h5>FashionSwap App</h5>
                    <p>Design + Frontend</p>
                    <p>Figma | React.js | Chakra UI</p>
                </div>

                <div className='project-details'>
                    <img src={tinnitus} />
                    <h5>Beyond Tinnitus Blog</h5>
                    <p>Design + Frontend</p>
                    <p>Figma | React.js | Chakra UI</p>
                </div>

                <div className='project-details'>
                    <img src={EnEmZet} />
                    <h5>EnEmZet Online Store</h5>
                    <p>Design + Frontend</p>
                    <p>Figma | React.js | Chakra UI</p>
                </div>

                <div className='project-details'>
                    <img src={bayer} />
                    <h5>AskMed By Bayer</h5>
                    <p>Design + Frontend</p>
                    <p>Figma | React.js | Chakra UI</p>
                </div>

                <div className='project-details'>
                    <img src={MyBestWishes} />
                    <h5>MyBestWishes AI Generator</h5>
                    <p>Design + Frontend</p>
                    <p>Figma | React.js | Chakra UI</p>
                </div>

                <div className='project-details'>
                    <img src={contour} />
                    <h5>Inventory Management App</h5>
                    <p>Design + Frontend</p>
                    <p>Figma | React.js | Chakra UI</p>
                </div>

                <div className='project-details'>
                    <img src={MyWorkPhoto} />
                    <h5>MyWorkPhoto AI Generator</h5>
                    <p>Design + Frontend</p>
                    <p>Figma | React.js | Chakra UI</p>
                </div>
            </div>
            <button>Next</button>

        </div>
    )
}

export default Projects