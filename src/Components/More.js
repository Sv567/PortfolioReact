import React from 'react'
import image from './Images/pigletz.jpg'
import image2 from './Images/sha-beats.jpg'
import image3 from './Images/sha-pixels.png'



const More = () => {
    return (
        <div className='more-section'>
            <h2>Side Projects</h2>
            <div className='more'>
                <div className='more-projects'>
                    <img src={image} />
                    <p>Marketing & BizDev</p>
                    <h3>Pigletz</h3>
                    <p>I create and manage the Pigletz community's social media presence, including producing and editing high-quality Web3 content for their YouTube channel. I also work on expanding the community's reach and impact through partnerships in the Web3 space.</p>
                </div>

                <div className='more-projects'>
                    <img src={image2} />
                    <p>Beat Making</p>
                    <h3>Music Production</h3>
                    <p>Produced over 100 instrumentals in different genres, collaborated with artists and my beats are on popular streaming platforms like Spotify, iTunes, Amazon and Deezer. They can also be purchased exclusively on my beatstore for musicians to create their unique sound.</p>
                </div>

                <div className='more-projects'>
                    <img src={image3} />
                    <p>Multimedia Design</p>
                    <h3>Pigletz</h3>
                    <p>My digital art portfolio, which includes a wide collection of graphic designs, 3D models and short video animations created for various purposes. I have long experience working with popular softwares like Adobe Photoshop, After Effects, Premiere Pro and Blender.</p>
                </div>

            </div>
        </div>
    )
}

export default More