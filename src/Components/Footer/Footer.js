import React from "react";
import "../Footer/Footer.css";
import facebook from "../../photos/facebook.png";
import insta from '../../photos/insta.png';
import twitter from '../../photos/twitter.png';
import {Link} from 'react-router-dom';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-box">
          <div className="contact-us">
            <Link to='/contact' style={{textDecoration: 'none', color: 'black'}}><h2>Contact Us</h2></Link>
            <h3>(801) 355 - PETS (7387)</h3>
            <h3>info@utahanimals.org</h3>
            <h3>1955 North Redwood Road, Salt Lake City, UT 84116</h3>
          </div>
          <div className="resources">
            <Link style={{textDecoration: 'none', color: 'black'}} to='/get-involved'><h2>Additional Resources</h2> </Link>
            <Link style={{textDecoration: 'none', color: 'black'}} to='/contact'><h3>Center Hours</h3></Link>
           <Link style={{textDecoration: 'none', color: 'black'}} to='/about-us'> <h3>About Us</h3> </Link>
            <Link style={{textDecoration: 'none', color: 'black'}} to='/donate' ><h3>Donate</h3></Link>
          </div>
          <div className="social-box">
          <a href='https://www.facebook.com/theuaac' target='_blank' > <img id='facebook' src={facebook} alt="facebook" /> </a>
            <a href='https://www.instagram.com/utahanimals/' target='_blank' > <img id='insta' src={insta} alt="instagram" /> </a>
           <a href='https://twitter.com/UtahAnimals' target='_blank'> <img id='twitter' src={twitter} alt="twitter" /> </a>
          </div>
        </div>
        <div className="copyright">© 2019 Utah Animals. All Rights Reserved.</div>
        
      </div>
    );
  }
}
export default Footer;
