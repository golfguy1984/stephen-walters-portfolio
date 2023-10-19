import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export const ContactUs = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_zjbkurb', 'template_jsxzlhr', form.current, 'itDwWhxwf5o0t_yfo')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return (
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder='Name'/>
        <input type="email" name="user_email" placeholder='Email'/>
        <textarea name="message" placeholder='Message'/>
        <input className="form-btn" type="submit" value="Send" />
      </form>
    );
  };