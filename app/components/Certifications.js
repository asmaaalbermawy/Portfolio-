// components/Certifications.js
"use client"
import React from 'react';

const certifications = [
  {
    name: 'Getting Started with Laravel (PHP Framework)',
    issuingOrganization: 'Udemy',
    issueDate: 'June 2020',
    credentialId: 'ABC123',
    credentialUrl: 'https://www.udemy.com/certificate/ABC123'
  },
  {
    name: 'Intro To TKinter for Python GUI',
    issuingOrganization: 'Coursera',
    issueDate: 'March 2019',
    credentialId: 'XYZ456',
    credentialUrl: 'https://www.coursera.org/certificate/XYZ456'
  },
  {
    name: 'Try Django 1.11 (Python Web Development)',
    issuingOrganization: 'Udemy',
    issueDate: 'December 2018',
    credentialId: 'DEF789',
    credentialUrl: 'https://www.udemy.com/certificate/DEF789'
  },
];

const Certifications = () => {
  return (
    <section style={styles.container}>
      <h2 style={styles.title}>Licenses & Certifications</h2>
      <div style={styles.cardContainer}>
        {certifications.map((cert, index) => (
          <div key={index} style={styles.card}>
            <h3 style={styles.certName}>{cert.name}</h3>
            <p style={styles.issuingOrganization}>{cert.issuingOrganization}</p>
            <p style={styles.issueDate}>{cert.issueDate}</p>
            <p style={styles.credentialId}>Credential ID: {cert.credentialId}</p>
            <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" style={styles.credentialUrl}>See Credential</a>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    margin: '20px 0',
  },
  title: {
    fontSize: '24px',
    borderBottom: '2px solid #0073b1',
    paddingBottom: '5px',
    marginBottom: '20px',
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  card: {
    padding: '15px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    transition: 'box-shadow 0.3s ease',
    cursor: 'pointer',
    ':hover': {
      boxShadow: '0 6px 12px rgba(0,0,0,0.2)',
    },
  },
  certName: {
    fontSize: '18px',
    marginBottom: '5px',
  },
  issuingOrganization: {
    fontSize: '16px',
    margin: '5px 0',
  },
  issueDate: {
    fontSize: '14px',
    margin: '5px 0',
    color: '#555',
  },
  credentialId: {
    fontSize: '14px',
    margin: '5px 0',
    color: '#555',
  },
  credentialUrl: {
    fontSize: '14px',
    color: '#0073b1',
    textDecoration: 'none',
  },
};

export default Certifications;
