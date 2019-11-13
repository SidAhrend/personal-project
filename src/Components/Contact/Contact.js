import React from "react";
import "../Contact/Contact.css";
import facebook from "../../photos/facebook.png";
import insta from '../../photos/insta.png';
import twitter from '../../photos/twitter.png';
import PhoneInput from 'react-phone-number-input/input';
import 'react-phone-number-input/style.css'
import Axios from "axios";


class Contact extends React.Component {
  constructor(){
    super()
    this.state = {
      name: '',
      email: '',
      phone: '',
      message: ''
    }
  }
  // componentDidMount = () =>{
  //   Axios.get('/contact/getAll')
  //   .then(res => {
      
  //   })
  // }
  
  handlePhone = (value) => {
    this.setState({
      phone: value
    })
  }
  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleMessage = () => {
    Axios.post('/contact/send', {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      message: this.state.message
    })
    .then(res => {
      this.setState({
        name: '',
        email: '',
        phone: '',
        message: ''
      })
      alert('message sent')
    })
    .catch(err => console.log('message didnt send', err))
  }

  render() {
    console.log(this.state.phone)
    console.log(this.state)
    return (
      <div className="contact">
        <div id="header-box"></div>
        <div className="contact-photo">
          <div id='centered'>Contact</div>
        </div>
        <div className="contact-section">
            <div className="contact-text">
                <div><h2 id='shadow-letter'>Welcome to Utah Animal Adoption Center!</h2></div>
                <div><h3>Center Hours</h3></div>
                <p className='adopt-p'>Adoptions: Tuesday - Saturday 11:00 AM - 5:00 PM (The Last Meet and Greet is at 4:30 PM)</p>
                <p>Vaccinations: Tuesday & Saturday Noon - 4:00 PM</p>
                <span><h3>Contact Information:</h3></span>
                <p>(801) 355 - PETS (7387)</p>
                <p>info@utahanimals.org</p>
                <p>1955 N. Redwood Road, Salt Lake City, UT 84116</p>
                <div id='social-box'>
                <a href='https://www.facebook.com/theuaac' target='_blank' > <img id='facebook' src={facebook} alt="facebook" /> </a>
                <a href='https://www.instagram.com/utahanimals/' target='_blank' > <img id='insta' src={insta} alt="instagram" /> </a>
                <a href='https://twitter.com/UtahAnimals' target='_blank'> <img id='twitter' src={twitter} alt="twitter" /> </a>
                </div>
            </div>
            <div id='contact-form'>
            <div id='message-us-header'><h2>Message Us Here!</h2></div>
                <span>Name</span>
                <input className='contact-input' type="text" name='name' value={this.state.name} onChange={(e) => this.handleInput(e)}/>
                <span>Email</span>
                <input className='contact-input' type="text" name='email' value={this.state.email} onChange={(e) => this.handleInput(e)}/>
                <span>Phone</span>
                <PhoneInput 
                style={{width: 260, height: 30}}
                country='US'
                value={this.state.phone}
                onChange={(value) => this.handlePhone(value)}/>
                <span>Your Message</span>
                <input id='message-input' type="text" name='message' value={this.state.message} onChange={(e) => this.handleInput(e)}/>
                <button id='submit-btn' onClick={this.handleMessage} >Submit</button>
            </div>
        </div>

        <div className="google-map">
        <iframe id='google-api' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.8001805201197!2d-111.94162918459202!3d40.81038457932125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f6a546b3a33f%3A0xba051736d419c859!2s1955%20N%20Redwood%20Rd%2C%20Salt%20Lake%20City%2C%20UT%2084116!5e0!3m2!1sen!2sus!4v1572626619354!5m2!1sen!2sus"></iframe>
        </div>
      </div>
    );
  }
}

export default Contact;
