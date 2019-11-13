import React from "react";
import "../adopt pages/dog-adoption.css";
import { Link } from 'react-router-dom';
import Axios from "axios";

class DogAdoption extends React.Component {
  constructor() {
    super();
    this.state = {
      dogs: []
    };
  }

  componentDidMount = () => {
    Axios.get("/adopt/getDogs").then(res => {
      this.setState({
        dogs: res.data
      });
      console.log(this.state);
    });
  };

  render() {
    return (
      <div className="dogAdoption-page">
        <div id="header-box"></div>
        <div className="dog-adoption-pic">
          <div id='centered'>Adopt Dogs</div>
        </div>
        <div className="adoption-content">
          {this.state.dogs.map(e => {
            return (
              <div className="animalPage">
                <Link to={`/adopt-dog/${e.id}`}> <img src={e.imageurl} alt={e.name}/></Link>
                <div id="animalPage-info">
                  <h5>name: {e.name}</h5>
                  <h5>breed: {e.breed}</h5>
                  <h5>age: {e.animal_age}</h5>
                </div>
                <div id="location-stuff">salt lake city</div>
                {/* need join statement to work so i can get the city state shit   */}
              </div>
            );
          })}
        </div>
      </div> //closing tag
    );
  }
}

export default DogAdoption;
