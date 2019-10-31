import React from "react";
import "../Footer/Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-box">
          <div className="contact-us">
            <h2>Contact Us</h2>
            <h3>phone</h3>
            <h3>email</h3>
            <h3>address</h3>
          </div>
          <div className="resources">
            <h2>Additional Resources</h2>
            <h3>Center Hours</h3>
            <h3>About Us</h3>
            <h3>Donate</h3>
            
          </div>
        </div>
        <div className="copyright"></div>
        <div className="signature"></div>
      </div>
    );
  }
}
export default Footer;
