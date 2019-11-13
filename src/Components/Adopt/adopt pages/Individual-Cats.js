import React from "react";
import "../adopt pages/individual-cats.css";
import Axios from "axios";

class IndividualCats extends React.Component {
  constructor() {
    super();
    this.state = {
      cat: {}
    };
  }
  componentDidMount = () => {
    console.log(+this.props.match.params.id);
    Axios.get(`/adopt-cat/${+this.props.match.params.id}`).then(res => {
      console.log(res.data);
      this.setState({
        cat: res.data
      });
    });
  };

  render(){
      return(
          <div className="indiv-cat">
          <div id="header-box"></div>

        <div className="profile">
          <img
            id="profile-pic"
            src={this.state.cat.imageurl}
            alt={this.state.cat.name}
          />
          <div className="info-bio-box">
            <div className="profile-info">
              <h2>Name: {this.state.cat.name}</h2>
              <h3>Breed: {this.state.cat.breed}</h3>
               <h3>{/*{i need to make a join to get location}*/}</h3> 
              <h3>Age: {this.state.cat.animal_age}</h3>
              <h3>Gender: {this.state.cat.gender}</h3>
              <h2>About</h2>
              <h3>House Trained:{this.state.cat.housetrained}</h3>
              <h3>Health: {this.state.cat.health}</h3>
              <h3>Preference: {this.state.cat.preference}</h3>
            </div>
            <div className="profile-bio">
              <div className="profile-bio-text">
                <p>{this.state.cat.bio}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="come-visit">
          <div className="come-visit-box">
            <div className="come-visit-banner">
                come visit {this.state.cat.name}!
            </div>
            <div className="google-thing">
            <iframe id='google-api-thing' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.8001805201197!2d-111.94162918459202!3d40.81038457932125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f6a546b3a33f%3A0xba051736d419c859!2s1955%20N%20Redwood%20Rd%2C%20Salt%20Lake%20City%2C%20UT%2084116!5e0!3m2!1sen!2sus!4v1572626619354!5m2!1sen!2sus"></iframe>
            </div>
            <div className="come-visit-contact-info">
                <div className='contact-links'>
                    <h2>phone</h2>
                    <h2>(801) 355 - PETS (7387)</h2>
                </div>
                <div className='contact-links'>
                    <h2>email</h2>
                    <h2>info@utahanimals.org</h2>
                </div>
                <div className='contact-links'>
                    <h2>address</h2>
                    <h2>1955 North Redwood Road, Salt Lake City, UT 84116</h2>
                </div>
            </div>
          </div>
        </div>
      </div> //closing tag for page
      )
  }

}
export default IndividualCats;
