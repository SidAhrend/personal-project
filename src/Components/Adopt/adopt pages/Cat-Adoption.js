import React from "react";
import "../adopt pages/cat-adoption.css";
import { Link } from 'react-router-dom';
import Axios from "axios";

class CatAdoption extends React.Component {
  constructor() {
    super();
    this.state = {
      cats: []
    };
  }
  componentDidMount = () => {
    Axios.get("/adopt/getCats").then(res => {
      this.setState({
        cats: res.data
      });
      console.log(this.state);
    });
  };
  render() {
    return (
      <div className="catAdoption-page">
        <div id="header-box"></div>
        <div className="cat-adoption-pic">
          {/* <img src="https://images.wallpaperscraft.com/image/cat_winter_fluffy_snow_99366_3840x2160.jpg" alt=""/> */}
          <div id='centered'>Adopt Cats</div>
        </div>
        <div className="adoption-content">
          {this.state.cats.map(e => {
            return (
              <div className="animalPage">
               <Link to={`/adopt-cat/${e.id}`}> <img src={e.imageurl} alt="cat"/></Link>
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
      </div>
    );
  }
}

export default CatAdoption;
