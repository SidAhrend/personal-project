import React from "react";
import "../Contact/Contact.css";
import facebook from "../../photos/facebook.png";
import insta from '../../photos/insta.png';
import twitter from '../../photos/twitter.png';

class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <div className="contact-photo"></div>
        <div className="contact-section">
            <div className="contact-text">
                <span><h2>Welcome to Utah Animal Adoption Center!</h2></span>
                <span><h3>Center Hours</h3></span>
                <p className='adopt-p'>Adoptions: Tuesday - Saturday 11:00 AM - 5:00 PM (The Last Meet and Greet is at 4:30 PM)</p>
                <p>Vaccinations: Tuesday & Saturday Noon - 4:00 PM</p>
                <span><h3>Contact Information:</h3></span>
                <p>(801) 355 - PETS (7387)</p>
                <p>info@utahanimals.org</p>
                <p>1955 N. Redwood Road, Salt Lake City, UT 84116</p>
                <div id='social-box'>
                <img className='social-buttons' src={facebook} alt="facebook"/>
                <img className='social-buttons' src={insta} alt="instagram"/>
                <img className='social-buttons' src={twitter} alt="twitter"/>
                </div>
            </div>
            <form id='contact-form'>
                <span>Name</span>
                <input className='contact-input' type="text"/>
                <span>Email</span>
                <input className='contact-input' type="text"/>
                <span>Phone</span>
                <input className='contact-input' type="text"/>
                <span>Your Message</span>
                <input id='message-input' type="text"/>
                <button id='submit-btn'>Submit</button>
            </form>
        </div>

        <div className="google-map">
        <iframe id='google-api' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.8001805201197!2d-111.94162918459202!3d40.81038457932125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f6a546b3a33f%3A0xba051736d419c859!2s1955%20N%20Redwood%20Rd%2C%20Salt%20Lake%20City%2C%20UT%2084116!5e0!3m2!1sen!2sus!4v1572626619354!5m2!1sen!2sus"></iframe>
        </div>
      </div>
    );
  }
}

export default Contact;
