import React from 'react'
import Techtile from './Techtile'
import Resume from './Resume'
import { accordionData, cardData } from '../utils/content'
import Card from './Card'



export default function App() {
    

    
    
    
  return (
  <main>
    <header>
        <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu"/>
        <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
            <div className="spinner diagonal part-1"></div>
            <div className="spinner horizontal"></div>
            <div className="spinner diagonal part-2"></div>
        </label>
        <div id="sidebarMenu">
            <ul className="sidebarMenuInner">
                <li><a href="#about">About</a></li>
                <li><a href="https://instagram.com/plavookac" target="_blank">Skills</a></li>
                <li><a href="https://twitter.com/plavookac" target="_blank">Experience</a></li>
                <li><a href="https://www.youtube.com/channel/UCDfZM0IK6RBgud8HYGFXAJg" target="_blank">Projects</a></li>
                <li><a href="https://www.linkedin.com/in/plavookac/" target="_blank">Contact</a></li>
            </ul>
        </div>
      <nav>
        <img src="/badge-wc.svg"/>
        <ul className="nav-list">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#footer">Contact</a></li>
        </ul>
      </nav>
      <div className="hero-container">
        <div className="hero-text-lg-screen">
            <div className="hero-text-wrapper">
                <h3>Hi, my name is</h3>
                <h2>STEPHEN WALTERS</h2>
                <h1>Aspiring Web Developer in Atlanta</h1>
            </div>
            <button className='header-btn'>Get In Touch</button>
        </div>
            <div className="hero-image">
                <img src="/Hero2.png"/>
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
                img="/sass.png"
                name="Sass"
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
                img="/vscode"
                name="VS Code"    
                />
            <Techtile
                img="/netlify"
                name="Netlify"
                />
            <Techtile
                img="/Bootstrap"
                name="Bootstrap"    
                />
            </div>
        </div>
    </section>
    
    <section className="resume" id="experience">
        <div className="section-container">
            <h4>Experience</h4>
            <div className="resume-container">
                {accordionData.map(({ company, content, title, dates }) => (
                <Resume 
                    key={company} 
                    company={company} 
                    dates={dates} 
                    content={content} 
                    title={title} 
                    />
                ))}
            </div>

         
        </div>
    </section>
    
    <section className="portfolio" id="projects">
        <div className="section-container">
            <h4 className="portfolio-heading">Portfolio</h4>
            <div className="portfolio-container">
                <div className="scrolling-wrapper">
                    {cardData.map(({ name, image, code, preview, bgColor}) => (
                    <Card 
                        key={name}
                        name = {name}
                        image = {image}
                        code = {code}
                        preview = {preview}
                        bgColor = {bgColor}
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
                <button className="footer-btn">Get in touch</button>
            </div>
            <div className='footer-div-right'>
            <ul>
                <li>GITHUB</li>
                <li>TWITTER</li>
                <li>LINKEDIN</li>
                <li>CHARITY</li>
                <li>SOURCE</li>
            </ul>
            </div>
        </div>
            <p className="copyright">© Copyright 2023 − Stephen Walters</p>
    </footer>
  </main>
  )
}
