"use client";  
import Projects from '../components/Projects';  
import About from '../components/About';
import Contact from '../components/Contact'
import Resume from '../components/Resume'
const Main = () => {  
    const heroStyle = {  
        backgroundImage: 'url(asmaa.jpg)',   
        backgroundSize: 'cover',  
        backgroundPosition: 'center',  
        height: '100vh',  
        display: 'flex',  
        justifyContent: 'center',  
        alignItems: 'center',  
        color: 'white',  
        textAlign: 'center',  
    };  
  
    const containerStyle = {  
        maxWidth: '600px',  
        padding: '20px',  
    };  
  
    const titleStyle = {  
        fontSize: '3rem',  
        marginBottom: '20px',  
    };  
  
    const subtitleStyle = {  
        fontSize: '1.5rem',  
        marginBottom: '30px',  
    };  
  
    const buttonStyle = {  
        backgroundColor: '#0070f3',  
        color: 'white',  
        padding: '15px 30px',  
        textDecoration: 'none',  
        borderRadius: '5px',  
        transition: 'background-color 0.3s ease',  
        margin: '0 10px',
    };  
  
    const buttonHoverStyle = {  
        ...buttonStyle,  
        backgroundColor: '#005bb5',  
    };  

    const buttonContainerStyle = {  
        display: 'flex',  
        justifyContent: 'center', 
        marginTop: '30px',   
    };  
  
    return (  
        <div style={heroStyle}>  
            <div style={containerStyle}>  
                <h1 style={titleStyle}>Welcome to My Portfolio</h1>  
                <p style={subtitleStyle}>I’m a passionate developer creating amazing web experiences.</p>  
                <div style={buttonContainerStyle}>  
                    <a   
                        href="#aboutMe"   
                        style={buttonStyle}  
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}  
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}  
                    >  
                        About Me  
                    </a>  

                    <a   
                        href="#Projects"   
                        style={buttonStyle}  
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}  
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}  
                    >  
                        View My Work  
                    </a>  

                    <a   
                        href="#contact"   
                        style={buttonStyle}  
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}  
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}  
                    >  
                        Contact Us  
                    </a>  
                </div>  
            </div>  
        </div>  
    );  
};  
  
export default Main;