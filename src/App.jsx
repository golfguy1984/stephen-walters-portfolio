import React, { useState } from 'react'
import Techtile from './Techtile'
import Resume from './Resume'
import ResumeLg from './ResumeLg'
import { accordionData, cardData } from '../utils/content'
import Card from './Card'
import { ContactUs } from './ContactUs'
import MyModal from './Modal'
import SideBar from './SideBar'
import resumeData from './resumeData'
import VerticalTab from './resume-components/VerticalTab'

export default function App() {
    
const [isOpen, setIsOpen] = useState(false)
const [clicked, setClicked] = useState(false)




//set nav button to setClicked true
    
  return (
  <main>
    <SideBar 
        show={clicked}
        close={() => setClicked(false)}
    />

    <MyModal 
        show={isOpen}
        close={() => setIsOpen(false)}    
    /> 
      <nav>
        <div className='nav-container'>
        <img  className=" filter-none" src="/mylogo3.png"/>
        <img onClick={() => setClicked(true)} className="hamburger" src="/hamburger.png" />
        <ul className="nav-list">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li className='blog-nav'><a href="https://medium.com/@runningmental">Blog</a></li>
        </ul>
        </div>
      </nav>
    
    <header>
        
      <div className="hero-container">
        <div className="hero-text-lg-screen">
            <div className="hero-text-wrapper">
                <h3>Hi, my name is</h3>
                <h2>STEPHEN WALTERS</h2>
                <h1>Aspiring Web Developer in Atlanta</h1>
            </div>
            <button  onClick={() => setIsOpen(true)} className='header-btn contact-btn'>Get In Touch</button>
        </div>
            <div className="hero-image">
                <img src="/Hero4.png"/>
            </div>
        </div>
    </header>
    
    
    <section className="about" id="about">
        <div className="section-container">
            <h4>About</h4>
            <p className='about-para'>I'm Stephen Walters, a dynamic professional based in Metro Atlanta, currently embarking on an exciting career transition from marketing to front-end web development. With a background in marketing, I bring a unique perspective to the world of web development, combining my passion for creativity and design with my newfound love for coding. I thrive on challenges and take immense pleasure in problem-solving, which has proven to be a valuable asset in both my previous marketing role and my current journey into web development. <br/><br/>

            When I'm not immersed in the world of coding, you can find me enjoying quality time with my wonderful family – my loving wife and our adorable daughters, not to mention our furry companion, Brody, who adds an extra layer of joy to our lives. Beyond my professional pursuits and family life, I have a deep passion for running. Whether it's pounding the pavement in the early morning or participating in local races, running provides me with a sense of accomplishment and inner peace, allowing me to recharge and tackle new challenges in both my career and personal life. <br/><br/>

            </p>
        </div>
    </section>
    
   
    <section className="tech-stack" id="skills">
        <div className="section-container">
        <h4>Tech Stack</h4>
        <div className="tech-stack-tile-container">
            <Techtile 
                img="/Tailwind_CSS_Logo.svg.webp"
                name="TailwindCSS"
                />
            <Techtile
                img="/React-icon.svg.png"
                name="React"
                />
            <Techtile
                img="/html5.png"
                name="HTML"
                />
            <Techtile
                img="/js.png"
                name="Javascript"
                />
            <Techtile
                img="/css3.webp"
                name="CSS"
                />
            <Techtile
                img="/figma-1-logo.png"
                name="Figma"    
                />
            <Techtile
                img="/github.png"
                name="Github"
                />
            <Techtile
                img="/firebase_logo.png"
                name="Firebase"    
                />
            <Techtile
                img="/netlify"
                name="Netlify"
                />
            <Techtile
                img="/Bootstrap"
                name="Bootstrap"    
                />
            <Techtile
            img="/vite.png"
            name="Vite"    
            />
            <Techtile
            img="/creative-cloud.png"
            name="Creative Cloud"    
            />
            </div>
        </div>
    </section>
    
    <section className="resume" id="experience">
        <div className="section-container">
            <h4>Experience</h4>
            
            <VerticalTab data={resumeData.jobs} />

         
        </div>
    </section>
    
    <section className="portfolio" id="projects">
        <div className="section-container">
            <h4 className="portfolio-heading">Portfolio</h4>
            <div className="portfolio-container">
                <div className="scrolling-wrapper">
                    {cardData.map(({ name, image, code, preview, bgColor, pills, description}) => (
                    <Card 
                        key={name}
                        name = {name}
                        image = {image}
                        code = {code}
                        preview = {preview}
                        bgColor = {bgColor}
                        pills={pills}
                        description={description}
                        />
                        
                    ))}   
                </div>
            </div>
            </div>
    </section>

    
    <footer id="footer">
        <div className="section-container footer-section">
            <div className='footer-div-left'>
                <h2 className="footer-text">NEED AN ATLANTA WEB DEVELOPER? LET'S BUILD SOMETHING.</h2>
                <button onClick={() => setIsOpen(true)} className="footer-btn contact-btn">Get in touch</button>
            </div>
            <div className='footer-div-right'>
            <ul className='footer-nav'>
                <li><a href="https://github.com/golfguy1984">GITHUB</a></li>
                <li><a href="https://www.linkedin.com/in/stephen-walters-254b468/">LINKEDIN</a></li>
                <li><a href="https://github.com/golfguy1984/stephen-walters-portfolio/tree/main/src">SOURCE</a></li>
                <li><a href="https://medium.com/@runningmental">BLOG</a></li>
                <li><a href="mailto: stephenrwalters@gmail.com">EMAIL</a></li>
            </ul>
            </div>
        </div>
            <p className="copyright">© Copyright 2023 − Stephen Walters</p>
    </footer>
  
  </main>
  )
}





// <div className="resume-container">
//                 {accordionData.map(({ company, content, title, dates }) => (
//                 <Resume 
//                     key={company} 
//                     company={company} 
//                     dates={dates} 
//                     content={content} 
//                     title={title} 
//                     />
//                 ))}

//             </div>
