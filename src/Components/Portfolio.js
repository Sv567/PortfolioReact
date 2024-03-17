import React from 'react';
import photo from './Images/sha-pixels.png'
import './Portfolio.css'
import ReactDOM from 'react-dom'



const Portfolio = () => {
    return (
        <div className='personal-section' >
            <div className='personal-details'>
                <img id='profile' src={photo} alt='my picture' height={100} width={150} />
                <div>
                    <h2>Savita Patidar</h2>
                    <p style={{
                        border: '1px solid black',
                        padding: '.5rem',
                        borderRadius: '10px'
                    }}>Hello World !</p>
                </div>
            </div>
            <hr />

            <div className='details-content'>
                <div className='content'>
                    <i class="fa-solid fa-hourglass-start" style={{
                        border: '1px solid black',
                        padding: '.5rem',
                        borderRadius: '10px'
                    }}></i>
                    <div className='details'>
                        <p style={{ color: 'grey' }}>AGE</p>
                        <p>24 years old</p>
                    </div>
                </div>
                <div className='content'>
                    <i class="fa-solid fa-location-dot" style={{
                        border: '1px solid black',
                        padding: '.5rem',
                        borderRadius: '10px'
                    }}></i>
                    <div className='details'>
                        <p style={{ color: 'grey' }}>LOCATION</p>
                        <p>Bhopal,Madhya Pradesh</p>
                    </div>
                </div>

            </div>
            <hr />

            <div className='social-links'>

            </div>

        </div >
    )
}

export default Portfolio