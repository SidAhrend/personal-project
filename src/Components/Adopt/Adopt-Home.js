import React from "react";
import "../Adopt/adopt-home.css";
import {Link} from 'react-router-dom';

class AdoptHome extends React.Component {
  render() {
    return (
      <div className="adopt-page">
        <div id="header-box"></div>
        <div className="adopt-home-photo">
        <div id='centered'>Adopt</div>
        </div>
        <div id="adopt-sub-header">
          <h1 style={{marginBottom: 0}}>Adopting From Utah Animal Adoption Center</h1>
          <h3 id='lame-h3'>
            All animals in the care of UAAC have been spayed/neutered, micro
            chipped, and are up-to-date on all
             necessary shots/vaccines,
            including an external exam by veterinarian.
          </h3>
        </div>
        <div className="main-adopt-content">
          <div className="animal-selectors">
            <img
              className="adopt-home-photos"
              src="https://images.unsplash.com/photo-1532386236358-a33d8a9434e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              alt="cats"
            />
           <Link to='/adopt-cats'> <button id='find-friend-btn'>Find Your New Furry Friend</button></Link>
            <h4>Cats younger than six months: $125</h4>
            <h4>Cats older than six months: $100+</h4>
            <h4>Purebreds: $400</h4>
          </div>

          <div className="animal-selectors">
            <img
              className="adopt-home-photos"
              src="https://images.unsplash.com/photo-1508814437933-f0c7d18a9217?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
              alt="dogs"
            />
           <Link to='/adopt-dogs'> <button id='find-friend-btn'>Find Your New Cuddle Buddy</button></Link>
            <h4>Dogs younger than six months: $320+</h4>
            <h4>Dogs older than six months: $200+</h4>
          </div>
        </div>
        <div className="senior-for-senior">
          <div id="senior-header">
            <h1 style={{marginTop: 5}}>Senior for a Senior Program</h1>
            <h3 style={{fontWeight: 'lighter', marginTop: 0}}>
              No-cost senior cat adoptions (ages 10 and older) for senior
              citizens
            </h3>
            <h2 style={{marginBottom: 5, marginTop: 5, fontWeight: 'lighter'}}>UAAC covers:</h2>
            <li style={{paddingLeft: 10}}>Adoption Fee</li>
            <li style={{paddingLeft: 10}}>Medical procedures performed in-house before adoption</li>
            <li style={{paddingLeft: 10}}>Vaccinations</li>
            <li style={{paddingLeft: 10}}>Micro-chipping</li>
            <li style={{paddingLeft: 10}}>Litter box and scoop</li>
            <li style={{paddingLeft: 10}}>1 bag of cat food</li>
            <li style={{paddingLeft: 10}}>Food and water dishes</li>
          </div>
          <img
            id="cat-pic"
            src="https://images.unsplash.com/photo-1489084917528-a57e68a79a1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt="cat"
          />
        </div>
        <div className="lifetime">
            <h1 id='h1' style={{marginBottom: 5, marginTop: 0}}>Lifetime Guarantee</h1>
            <h3 id='h3' style={{fontWeight: 'lighter', margin: 0}}>If an adopter ever decides they can no longer care for an animal adopted from Utah Animal Adoption Center we will accept the pet back into our rescue program.</h3>
        </div>
      </div> //closing tag for adopt-page
    );
  }
}
export default AdoptHome;
