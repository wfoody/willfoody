import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import 'reactjs-popup/dist/index.css';
import Sidebar from './Sidebar';
import './styles/contact.css'

export const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm('service_nvpj8wh', 'template_69xjrca', form.current, {
      publicKey: 'avSd4vjIvAj_1YiR-',
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
      publicKey: 'avSd4vjIvAj_1YiR-',
    });
    setName('');
    setEmail('');
    setMessage('');
    setEmailSent(!emailSent);
  };

  return (
    <div className="container">
      <Sidebar />
      <div className='contactContainer'>
        <div className='contactTitle'>let's connect</div>
        <form ref={form} onSubmit={sendEmail} className='contactForm'>
          <div className='contactItem'>
            <label>Name:</label>
            <input type="text" name="user_name" value={name} onChange={e => setName(e.target.value)} required style={{color: '#f000ff'}} className='contactInput'/>
          </div>
          <div className='contactItem'>
            <label>Email:</label>
            <input type="email" name="user_email" value={email} onChange={e => setEmail(e.target.value)} required className='contactInput'/>
          </div>
          <div className='contactItem'>
            <label>Message:</label>
            <textarea name="message" className='messageContainer' value={message} onChange={e => setMessage(e.target.value)} required />
          </div>
          <input type="submit" value="Send" className='submitButton' />
          {emailSent ? <div className='emailSuccessMessage'>Your message has been sent successfully!</div> : <div></div>}
        </form>
      </div>
    </div>
  );
};