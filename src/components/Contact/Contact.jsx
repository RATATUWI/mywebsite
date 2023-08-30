import './contact.css'
import facebook from '../../assets/facebook-icon.png'
import instagram from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineContacts} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'
import React, {useRef} from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_v3t7dxq', 'template_9nl6mdg', form.current, '9hc-xCewTXFwk0-Y4')
      .then((result) => {
          console.log(result.text);
          alert ("Email sent!")
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Please fill up the form below to discuss any work opportunities.</span>
        <form ref={form} className="contactForm" onSubmit={sendEmail}>
            <input type="text" className="name" placeholder='Enter Your Name' name='user_name'/>
            <input type="email" className="email" placeholder='Enter Your Email' name='user_email'/>
            <textarea name="message" rows="5" className="msg" placeholder='Your Message'></textarea>
            <button className="submitBtn" type='submit' value='Send'>Submit</button>

            </form>
            <div className="contactInfo">
              <div className="home">
              <AiOutlineHome className='homeIcon'/>
              <div className="iconText">
              <p className='iconTextHead'>Cauayan City, Isabela</p>
              <p className='iconTextPara'>Philippines, 05</p>
              </div>
              </div>

              <div className="home">
              <AiOutlineContacts className='homeIcon'/>
              <div className="iconText">
              <p className='iconTextHead'>0927717584</p>
              <p className='iconTextPara'>Avaible right now</p>
              </div>
              </div>

              <div className="home">
              <AiOutlineMail className='homeIcon'/>
              <div className="iconText">
              <p className='iconTextHead'>johnreymaiquez11@gmail.com</p>
              <p className='iconTextPara'>Send me your email</p>
              </div>
              </div>
            </div>
            <div className="links">
              <a href="https://www.facebook.com/johnrey.maiquez.5"><img src={facebook} alt="Facebook" className="link" /></a>
              <a href="https://www.instagram.com/johnnreey/"><img src={instagram} alt="Instagram" className="link" /></a>
              <a href="https://www.twitter.com/Johnnreey"><img src={twitter} alt="Twitter" className="link" /></a>
            </div>
            
        
    </div>
  )
}

export default Contact