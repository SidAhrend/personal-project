import React from "react";
import "../Landing/Landing.css";

class Landing extends React.Component {
  render() {
    return (
      <div className="Landing">
        <div className="photo"></div>
        <h1>Finding Forever Homes</h1>
        <div className="adoption-section">
          <div className="dog-adoption">
            <img
              id="dog-photo"
              src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              alt="dog photo"
            />
            <br />
            <button className="adopt-button">adopt a dog</button>
          </div>
          <div className="cat-adoption">
            <img
              id="cat-photo"
              src="https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              alt="cat photo"
            />
            <br />
            <button className="adopt-button">adopt a cat</button>
          </div>
        </div>

        <div className="donate-section">
          <div id="donate-pic-box">
            <img
              id="donate-pic"
              src="https://images.unsplash.com/photo-1543554618-7e19c5e393d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              alt="donation-photo"
            />
          </div>
          <div id='donate-info'>
            <p>Utah Animal Adoption Center is funded largely by individual donations, corporate support, and private foundation grants. The money raised by UAAC helps to save lives by supporting animal rescue and providing medical attention for pets in need.</p>
            <button id='donate-section-button'>donate</button>
          </div>
        </div>
        <div className="sub-footer">
            <div className='sub-footer-boxes'>
            <img className='sub-footer-pics' src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="dog"/>
            <button className='sub-footer-buttons'>Volunteer</button>
            </div>
            <div className='sub-footer-boxes'>
            <img className='sub-footer-pics' src="https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="cat"/>
            <button className='sub-footer-buttons'>About Us</button>
            </div>
            <div className='sub-footer-boxes'>
            <img className='sub-footer-pics' src="https://images.unsplash.com/photo-1555897209-208b67f652c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="dogs"/>
            <button className='sub-footer-buttons'>Contact Us</button>
            </div>
        </div>
      </div>
    );
  }
}

export default Landing;
