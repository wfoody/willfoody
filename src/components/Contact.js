
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Sidebar from './Sidebar';
import './styles/contact.css'
require('dotenv').config();
const apiKey = process.env.API_KEY;

export const Contact = ({color, changeColor}) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm('service_nvpj8wh', 'template_69xjrca', form.current, {
      publicKey: apiKey,
    })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    console.log(name, email, message);
    emailjs.sendForm('service_nvpj8wh', 'template_ex4rp6f', form.current, {
      publicKey: 'apiKey',
    });
    setName('');
    setEmail('');
    setMessage('');
    setEmailSent(true);
  };

  return (
    <div className="container">
      <Sidebar color={color} changeColor={changeColor} />
      <div className='contactContainer'>
        <div className='contactTitle' style={{ color: color }}>let's connect</div>
        <form ref={form} onSubmit={sendEmail} className='contactForm'>
          <div className='contactItem'>
            <label style={{ color: color }}>Name:</label>
            <input type="text" name="user_name" value={name} onChange={e => setName(e.target.value)} required style={{ color: color }} />
          </div>
          <div className='contactItem'>
            <label style={{ color: color }}>Email:</label>
            <input type="email" name="user_email" value={email} onChange={e => setEmail(e.target.value)} required style={{ color: color }} />
          </div>
          <div className='contactItem'>
            <label style={{ color: color }}>Message:</label>
            <textarea name="message" className='messageContainer' value={message} onChange={e => setMessage(e.target.value)} required style={{ color: color }}/>
          </div>
          <input type="submit" value="Send" className='submitButton' />
          {emailSent ? <div className='emailSuccessMessage' style={{ color: color }}>Your message has been sent successfully!</div> : <div></div>}
        </form>
      </div>
    </div>
  );
};
