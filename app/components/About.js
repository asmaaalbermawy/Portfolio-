"use client";  

import React from 'react';  
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';  
import Resume from '../components/Resume';

const aboutContent = {  
    title: "About Me",  
    description: "Hi there!, It's Asmaa I'm a web developer passionate about building interactive web applications.",  
    hobbies: "📚 Hobbies: Coding, Reading, Traveling",  
    location: "🌍 Alexandria ,Egypt",  
    skills: "💻 Skills: HTML, CSS, JavaScript, React",  
};  

const About = () => {  
    const handleContactClick = () => {  
        alert("Thank you for your interest! Feel free to reach out!");  
    };  

    const styles = {  
        container: {  
            display: 'flex',  
            justifyContent: 'center',  
            alignItems: 'center',  
            minHeight: '100vh',  
            //backgroundColor: '#007bff', 
            padding: '50px',  
            backgroundImage: 'url(hh.jpg)'
        },  
        aboutMe: {  
            display: 'flex',  
            justifyContent: 'center',  
            alignItems: 'center',  
            marginTop: '20px',  
        },  
        floatCard: {  
            background: 'white',  
            padding: '20px',  
            borderRadius: '15px',  
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',  
            maxWidth: '900px',    
            textAlign: 'center',  
            transition: 'transform 0.3s, box-shadow 0.3s',  
        },  
        button: {  
            backgroundColor: '#28a745',  
            color: 'white',  
            border: 'none',  
            padding: '10px 15px',  
            borderRadius: '5px',  
            cursor: 'pointer',  
            transition: 'background-color 0.3s',  
            marginBottom: '15px',  
        },  
        socialIcons: {  
            display: 'flex',  
            justifyContent: 'center',  
            gap: '25px',  
        },  
    };  

    return (  
        <div style={styles.container}>  
            <div style={styles.aboutMe} id="aboutMe">  
                <div style={styles.floatCard}>  
                    <h2>{aboutContent.title}</h2>  
                    <p>{aboutContent.description}</p>  
                    <ul>  
                        <li><strong>{aboutContent.hobbies}</strong></li>  
                        <li><strong>{aboutContent.location}</strong></li>  
                        <li><strong>{aboutContent.skills}</strong></li>  
                    </ul>  
                    <a  href="#resume" >Check my Resume</a>  
                    <div style={styles.socialIcons}>  
                        <a href="https://www.linkedin.com/in/asmaa-albermawy/" target="_blank" rel="noopener noreferrer">  
                            <FaLinkedin />  
                        </a>  
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">  
                            <FaGithub />  
                        </a>  
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">  
                            <FaTwitter />  
                        </a>  
                    </div>  
                </div>  
            </div>  
        </div>  
    );  
};  

export default About;