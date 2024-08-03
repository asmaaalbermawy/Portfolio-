"use client";

import React from 'react';

const resumeData = {
  name: "ASMAA MAHMOUD MOHAMED",
  title: "Software Developer",
  location: "Alexandria, Egypt",
  contact: {
    phone: "(+20) 010 12239084",
    email: "asmaa.albermawy@gmail.com",
    linkedIn: "https://www.linkedin.com/in/asmaa-albermawy/",
  },
  education: {
    degree: "Bachelor of Computer Science and Information System",
    university: "University of Helwan.FCIH",
    years: "2014-2018",
    coursework: [
      "Algorithms",
      "Data structures",
      "Computer architecture",
      "Artificial intelligence",
      "Linear algebra",
      "Calculus",
      "Probability theory and statistics",
      "Discrete mathematics",
      "Differential calculus and maths",
      "Computer Graphics",
      "Compilers",
    ],
  },
  workExperience: [
    {
      title: "Front End Developer (Web Designer)",
      company: "Upwork",
      duration: "From 12/6/2019 - now",
      link: "https://www.upwork.com/o/profiles/users/~01bb2893af6b053ee5/",
    },
  ],
  programmingExperience: {
    technicalSkills: {
      languages: ["Java", "Python", "C/C++", "C#", "PROLOG"],
      webTechnologies: [
        "XML",
        "HTML5",
        "CSS3",
        "PHP",
        "JavaScript",
        "TypeScript",
        "Angular.js",
        "SQL",
        "Oracle SQL*Plus",
        "JBuilder",
        "ASP.Net",
        "React.js",
        "Node.js",
        "React Native",
        "Laravel framework",
        "Python frameworks",
      ],
      operatingSystems: ["Windows", "Linux"],
      knowledge:
        "Good knowledge of object-oriented design, O.O principles, Design patterns, and object-oriented programming.",
    },
    completedProjects: [
      "School/Nursery System (PHP, MySQL, Laravel)",
      "Maze Solver (Java)",
      "Project Management System (ASP.NET)",
      "Hospital Medicine Supply System (Java, O.O based, Design patterns)",
      "Ball Game (HTML5, CSS3, TypeScript, JS, Bootstrap)",
      "Pet Shopping App (Android using Java)",
      "Hotel Registration Application (Angular.js)",
      "Flash Card App (Python - TKinter framework)",
      "Video Surveillance System",
    ],
  },
  certifications: [
    "Getting Started with Laravel (PHP Framework)",
    "Intro To TKinter for Python GUI",
    "Try Django 1.11 (Python Web Development)",
  ],
};

const Resume = () => {
  return (
    <div id="resume" style={styles.container}>
      <h2 style={styles.title}>{resumeData.name} - {resumeData.title}</h2>
      <div style={styles.profile}>
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Contact Information</h3>
          <p>Location: {resumeData.location}</p>
          <p>Email: {resumeData.contact.email}</p>
          <p>Phone: {resumeData.contact.phone}</p>
          <p>LinkedIn: <a href={resumeData.contact.linkedIn} target="_blank" rel="noopener noreferrer" style={styles.link}>{resumeData.contact.linkedIn}</a></p>
        </div>
        
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Education</h3>
          <p><strong>{resumeData.education.degree}</strong> from {resumeData.education.university} ({resumeData.education.years})</p>
          <p>Relevant Coursework: {resumeData.education.coursework.join(', ')}</p>
        </div>

        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Work Experience</h3>
          {resumeData.workExperience.map((job, index) => (
            <div key={index}>
              <p><strong>{job.title}</strong> at <a href={job.link} target="_blank" rel="noopener noreferrer" style={styles.link}>{job.company}</a> ({job.duration})</p>
            </div>
          ))}
        </div>

        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Technical Skills</h3>
          <p>Languages: {resumeData.programmingExperience.technicalSkills.languages.join(', ')}</p>
          <p>Web Technologies: {resumeData.programmingExperience.technicalSkills.webTechnologies.join(', ')}</p>
          <p>Operating Systems: {resumeData.programmingExperience.technicalSkills.operatingSystems.join(', ')}</p>
          <p>Knowledge: {resumeData.programmingExperience.technicalSkills.knowledge}</p>
        </div>

        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Completed Projects</h3>
          <ul style={styles.list}>
            {resumeData.programmingExperience.completedProjects.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
        </div>

        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Certifications</h3>
          <ul style={styles.list}>
            {resumeData.certifications.map((certification, index) => (
              <li key={index}>{certification}</li>
            ))}
          </ul>
        </div>
      </div>
      <p style={styles.downloadLink}>
        You can also <a href="/resume.pdf" download style={styles.downloadButton}>download my resume here</a>.
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: '15px',
    textAlign: 'left',
    maxWidth: '700px',
    margin: '0 auto',
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    marginTop: '20px',
    border: '1px solid #e1e1e1'
  },
  title: {
    fontSize: '26px',
    marginBottom: '10px',
    textAlign: 'center',
    color: '#333',
  },
  profile: {
    fontSize: '14px',
  },
  section: {
    marginBottom: '15px',
  },
  sectionTitle: {
    fontSize: '18px',
    marginBottom: '5px',
    color: '#0073b1',
    borderBottom: '1px solid #e1e1e1',
    paddingBottom: '5px',
  },
  link: {
    color: '#0073b1',
    textDecoration: 'none',
  },
  list: {
    paddingLeft: '20px',
  },
  downloadButton: {
    backgroundColor: '#0073b1',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    padding: '8px 12px',
  },
  downloadLink: {
    marginTop: '20px',
    textAlign: 'center',
  },
};

export default Resume;
