// Projects.js  
import React from 'react';  

const projectData = [  
    {  
        title: "L-appetie website food delivery",  
        githubLink: "https://github.com/asmaaalbermawy/DeliveryFoodApp",  
        imageUrl: "Proj1.jpg",   
    },  
    {  
        title: "Notes website for reminders",  
        githubLink: "https://github.com/username/project2",  
        imageUrl: "Proj2.jpg",  
    },  
    {  
        title: "Book placeholder reading list",  
        githubLink: "https://github.com/asmaaalbermawy/Booklist",  
        imageUrl: "Proj3.jpg",   
    },  
    {  
        title: "Portfolio website",  
        githubLink: "https://github.com/username/project4",  
        imageUrl: "Proj4.png",   
    },  
];  

const Projects = () => {  

    const styles = {  
        container: {  
            padding: '50px',  
            backgroundColor: '#f7f7f7',  
        },  
        grid: {  
            display: 'grid',  
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',  
            gap: '20px',  
        },  
        card: {  
            background: 'white',  
            borderRadius: '8px',  
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',  
            padding: '20px',  
            textAlign: 'center',  
        },  
        image: {  
            maxWidth: '100%',  
            borderRadius: '8px',  
        },  
        githubLink: {  
            marginTop: '10px',  
            textDecoration: 'none',  
            color: '#3498db',  // You can use a preferred color for the link  
        },  
    };  

    return (  
        <div id="Projects" style={styles.container}>  
            <h2>My Projects</h2>  
            <p>Here are some projects I have worked on:</p>  
            <div style={styles.grid}>  
                {projectData.map((project, index) => (  
                    <div style={styles.card} key={index}>  
                        <img src={project.imageUrl} alt={project.title} style={styles.image} />  
                        <h3>{project.title}</h3>  
                        <a href={project.githubLink} style={styles.githubLink} target="_blank" rel="noopener noreferrer">  
                            View on GitHub  
                        </a>  
                    </div>  
                ))}  
            </div>  
        </div>  
    );  
};  

export default Projects;