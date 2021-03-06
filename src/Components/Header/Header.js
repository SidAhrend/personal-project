import React from "react";
import "../Header/Header.css";
import { Link } from "react-router-dom";

class Header extends React.Component {
  constructor() {
    super();

    this.dropdown = React.createRef();
  }
  // on click event that triggers dropdown animation
  toggleShow = () => {
    let { current } = this.dropdown;

    if (current.classList.contains("show-animation")) {
      current.classList.add("hide-animation");
      current.classList.remove("show-animation");
    } else {
      current.classList.remove("hide-dropdown");
      current.classList.add("show-animation");
      current.classList.remove("hide-animation");
    }
  };


  render() {
    return (
      <div className="header">
        <div id="logo-box">
          <img
            id="logo"
            src="https://utahanimals.org/uploads/2017/09/uaac-logo-final-aug-11-e1570312596137.jpg"
            alt="logo"
          />
        </div>
        <div id="link-box">
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <div className="header-link">home</div>
          </Link>
          <Link to='/adopt-home' style={{ textDecoration: "none", color: "black" }}>
          <div className="header-link">adopt</div>
          </Link>
          <Link to='/get-involved'  style={{ textDecoration: "none", color: "black" }}>
          <div className="header-link">get involved</div>
          </Link>
          <div className="header-link-dropdown">
            <Link
              to="/about-us"
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="dropbtn">about us</div>
            </Link>
            <div className="dropdown-content-header">
              <Link to="/contact" style={{ textDecoration: "none", color: "black" }}>
                <div className="header-link">
                  contact
                </div>
              </Link>
            </div>
          </div>

         <Link to='/donate'> <button id="donate-button">donate</button></Link>
        </div>

          {/* dropdown */}
        <i
          id="hamburger-icon"
          className="fas fa-bars fa-2x"
          onClick={this.toggleShow}
        />
        {/* phonable dropdown down here */}

        <div className="dropdown hide-dropdown" ref={this.dropdown}>
          <Link style={{ textDecoration: "none", color: "black" }} to='/'><div className="dropdown-links">Home</div></Link>
          <Link style={{ textDecoration: "none", color: "black" }} to='/adopt-home'><div className="dropdown-links">Adopt</div></Link>
          <Link style={{ textDecoration: "none", color: "black" }} to='/about-us'><div className="dropdown-links">About Us</div></Link>
          <Link style={{ textDecoration: "none", color: "black" }} to='/contact'><div className="dropdown-links">Contact</div></Link>
          <Link style={{ textDecoration: "none", color: "black" }} to='/get-involved'><div className="dropdown-links">Get Involved</div></Link>
          <Link style={{ textDecoration: "none", color: "black" }} to='/donate'><div className="dropdown-links">Donate</div></Link>
        </div>
      </div>
    );
  }
}
export default Header;
