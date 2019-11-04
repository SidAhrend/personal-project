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
            <h3>phone</h3>
            <h3>email</h3>
            <h3>address</h3>
          </div>
          <div className="resources">
            <h2>Additional Resources</h2>
            <h3>Center Hours</h3>
           <Link to='/about-us' style={{textDecoration: 'none', color: 'black'}}> <h3>About Us</h3> </Link>
            <h3>Donate</h3>
          </div>
          <div className="social-box">
            <img id='facebook' src={facebook} alt="facebook" />
            <img id='insta' src={insta} alt="instagram" />
            <img id='twitter' src={twitter} alt="twitter" />
          </div>
        </div>
        <div className="copyright">© 2019 Utah Animals. All Rights Reserved.</div>
        
      </div>
    );
  }
}
export default Footer;
