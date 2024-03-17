import React from 'react'
import './Portfolio.css'
import Certificate from './Certificate'

const About = () => {
    return (
        <div className='about-section'>
            <h1>About Me</h1>
            <p>Hello there! 👋 My name is Savita and I'm from Bhopal, Madhya Pradesh. As a Full-Stack software developer, I specialize in creating visually appealing websites, apps and mobile games. My passion for graphic design isn't just a hobby, it's a key ingredient in every project I work on.
                Growing up bilingual, I developed a love for languages and I currently speak four of them fluently. I believe that this skill has given me a unique perspective and allows me to communicate effectively with clients from all over the world. One of my strengths is adding a personal touch to my projects by adding the client's identity and message into the design, creating meaningful and beautiful end products that are both eye-catching and user-friendly.
                In my free time, I enjoy exploring my other passions, such as photography and music production, which provide me with creative outlets. I am also very passionate about Web3 and everything related to crypto, NFTs and blockchain technology as I believe they have the potential to revolutionize business and online interactions.
                If you have an innovative idea for a project that needs to be developed, I would love to hear from you. Your vision can be turned into a real product.
                Don't hesitate to reach out and let's start a conversation about your concept. I'm excited to collaborate and help bring your ideas to life.
            </p>

            <div className='primary-focus'>
                <h2>Primary Focus</h2>
                <div className='primary-focus-content'>
                    <div className='pfc'>
                        <h3>Web Design & Development</h3>
                        <p>Creating attractive, easy-to-use websites that work well for businesses and individuals online.</p>
                    </div>
                    <div className='pfc'>
                        <h3>Mobile Apps & Games</h3>
                        <p>Creating attractive, easy-to-use websites that work well for businesses and individuals online.</p>
                    </div>
                    <div className='pfc'>
                        <h3>Development Solutions</h3>
                        <p>Utilizing JavaScript frameworks like React, Node, Next, Vue and more to build interactive web applications.</p>
                    </div>
                    <div className='pfc'>
                        <h3>Marketing & SEO</h3>
                        <p>sing SEO and marketing strategies to boost online visibility and promote products or services.</p>
                    </div>
                </div>
            </div>

            <div className='language'>
                <h2>Languages</h2>
                <div className='language-content'>
                    <div>
                        <h3>Coding Languages</h3>
                        <h5>JavaScript <span>70%</span></h5>
                        <h5>HTML <span>90%</span></h5>
                        <h5>CSS <span>90%</span></h5>
                        <h5>JAVA <span>50%</span></h5>

                    </div>
                    <div>
                        <h3>Human Languages</h3>
                        <h5>English <span>Basic</span></h5>
                        <h5>Hindi <span>Fluent</span></h5>
                    </div>
                </div>
            </div>
            <button onClick={Certificate}>Next</button>
        </div>
    )
}

export default About;