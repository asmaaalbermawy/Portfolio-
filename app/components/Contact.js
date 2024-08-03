"use client";  
import React, { useState } from 'react';  
import { Container, Typography, TextField, Grid, Button } from '@mui/material';  
import emailjs from 'emailjs-com'; // Import EmailJS  

const ContactForm = () => {  
  const [formData, setFormData] = useState({  
    name: '',  
    email: '',  
    message: ''  
  });  

  const handleChange = (event) => {  
    const { name, value } = event.target;  
    setFormData({ ...formData, [name]: value });  
  };  

  const handleSubmit = (event) => {  
    event.preventDefault();   

    emailjs.send("service_x7fqsxa", "template_7dxfnjv", formData, "LX8qMYw4jYoc90emc")  
      .then((response) => {  
        console.log('SUCCESS!', response.status, response.text);  
        // Optionally: Reset the form or show a success message  
      }, (err) => {  
        console.log('FAILED...', err);  
        // Optionally: Show an error message  
      });  
  };  

  const styles = {  
    contactSection: {  
      backgroundImage: "url('back2.jpg')",  
      backgroundSize: 'cover',  
      backgroundPosition: 'center',  
      height: '100vh',  
      padding: '70px',  
      display: 'flex',  
      justifyContent: 'space-between',  
      alignItems: 'center',  
      marginTop: '50px',  
    },  
    formContainer: {  
      backgroundColor: 'white',  
      padding: '40px',  
      borderRadius: '8px',  
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',  
      width: '100%',  
      maxWidth: '500px',  
    },  
    messageBox: {  
      backgroundColor: 'lightgrey',  
      padding: '20px',  
      borderRadius: '8px',  
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',  
      width: '250px',  
      height: 'fit-content',  
      marginLeft: '20px',  
    },  
  };  

  return (  
    <div id="contact" style={styles.contactSection}>  
      <Container style={styles.formContainer}>  
        <Typography variant="h4" component="h1" gutterBottom>  
          Contact Us  
        </Typography>  
        <form onSubmit={handleSubmit}>  
          <Grid container spacing={2}>  
            <Grid item xs={12}>  
              <TextField  
                fullWidth  
                label="Name"  
                variant="outlined"  
                name="name"  
                required  
                onChange={handleChange}  
              />  
            </Grid>  
            <Grid item xs={12}>  
              <TextField  
                fullWidth  
                label="Email"  
                variant="outlined"  
                type="email"  
                name="email"  
                required  
                onChange={handleChange}  
              />  
            </Grid>  
            <Grid item xs={12}>  
              <TextField  
                fullWidth  
                label="Message"  
                variant="outlined"  
                multiline  
                rows={4}  
                name="message"  
                required  
                onChange={handleChange}  
              />  
            </Grid>  
            <Grid item xs={12}>  
              <Button type="submit" variant="contained" color="primary">  
                Send Message  
              </Button>  
            </Grid>  
          </Grid>  
        </form>  
      </Container>  
      <div style={styles.messageBox}>  
        <Typography variant="h6" component="p">  
          Get in Touch With Us!   
          We’d love to hear from you! Whether you have questions, feedback, or just want to say hello, our team is here to help. Please fill out the form   
        </Typography>  
      </div>  
    </div>  
  );  
};  

export default ContactForm;