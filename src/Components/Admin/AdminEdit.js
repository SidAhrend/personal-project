import React from "react";
import "../Admin/adminEdit.css";
import Axios from "axios";
import {Link} from 'react-router-dom';

var colors={
    'red': '#73201A',
    'green': '#077010'
}

class AdminEdit extends React.Component {
  constructor() {
    super();
    this.state = {
      cats: [],
      dogs: [],
      edit: false,
      breed: '',
      name: '',
      animal_age: '',
      location_id: '1',
      gender: '',
      houseTrained: '',
      health: '',
      preference: '',
      bio: '',
      imageUrl: '',
      id: 0
    };
  }

  componentDidMount = () => {
    // for dogs
    Axios.get("/adopt/getDogs").then(res => {
      this.setState({
        dogs: res.data
      });
    });
    //for cats
    Axios.get("/adopt/getCats").then(res => {
      this.setState({
        cats: res.data
      });
    });
  };
  
  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  deleteDog = id => {
    Axios.delete(`/animal/dog/${id}`).then(res => {
        console.log(res.data)
        const data = res.data;
        let dogs = data.data;
      this.setState({
        dogs: dogs
      });
    });
    alert('dog deleted')
  };
  deleteCat = id => {
    Axios.delete(`/animal/cat/${id}`).then(res => {
      this.setState({
        cats: res.data
      });
    });
  };
  

  handleEdit = (id) => {
      this.setState({
          edit: true,
          id: id
      })
  }
  handleCancel = () => {
      this.setState({
          edit: false
      })
  }

  editDog = (id) => {
    this.setState({
        edit: true
    })
    console.log(id)
    Axios.put(`/animal/dog/${id}`, {
        breed: this.state.breed,
        name: this.state.name,
        animal_age: this.state.animal_age,
        location_id: this.state.location_id,
        gender: this.state.gender,
        houseTrained: this.state.houseTrained,
        health: this.state.health,
        preference: this.state.preference,
        bio: this.state.bio,
        imageUrl: this.state.imageUrl
    })
    .then(res => {
        this.setState({
        dogs: res.data,
        breed: '',
        name: '',
        animal_age: '',
        location_id: '1',
        gender: '',
        houseTrained: '',
        health: '',
        preference: '',
        bio: '',
        imageUrl: '',
        edit: false
        })
        alert('dog edited')
    })
    .catch(err => console.log('dog not edited', err))
  };

  editCat = (id) => {
    this.setState({
        edit: true
    })
    // console.log(id)
    Axios.put(`/animal/cat/${id}`, {
        breed: this.state.breed,
        name: this.state.name,
        animal_age: this.state.animal_age,
        location_id: this.state.location_id,
        gender: this.state.gender,
        houseTrained: this.state.houseTrained,
        health: this.state.health,
        preference: this.state.preference,
        bio: this.state.bio,
        imageUrl: this.state.imageUrl
    })
    .then(res => {
        this.setState({
        cats: res.data,
        breed: '',
        name: '',
        animal_age: '',
        location_id: '1',
        gender: '',
        houseTrained: '',
        health: '',
        preference: '',
        bio: '',
        imageUrl: '',
        edit: false
        })
        alert('cat edited')
    })
    .catch(err => console.log('cat not edited', err))
  };

  render() {
      console.log(this.state.houseTrained)
      if(this.state.edit === true){
          return(
              <div id='edit-dropdown-big-box'>
                  <div id='cancel-button-box'><button onClick={this.handleCancel}>Cancel</button></div>
              <div className='edit-dropdown'>
                
                <div className='edit-input-little-box'>
                  <h3>breed</h3>
                  <input type="text" name='breed' value={this.state.breed} onChange={(e) => this.handleInput(e)}/>
                    <h3>name</h3>
                  <input type="text" name='name' value={this.state.name}  onChange={(e) => this.handleInput(e)}/>
                  <h3>age</h3>
                  <input type="text" name='animal_age' value={this.state.animal_age}  onChange={(e) => this.handleInput(e)}/>
                  <h3>location id</h3>
                  <input type="text" name='location_id' value={this.state.location_id}  onChange={(e) => this.handleInput(e)}/>
                  <h3>gender</h3>
                  <input type="text" name='gender' value={this.state.gender}  onChange={(e) => this.handleInput(e)}/>
                </div>  
                <div className='edit-input-little-box'>
                  <h3>house trained?</h3>
                  <input type="text" name='houseTrained' value={this.state.houseTrained}  onChange={(e) => this.handleInput(e)}/>
                  <h3>health</h3>
                  <input type="text" name='health' value={this.state.health}  onChange={(e) => this.handleInput(e)}/>
                  <h3>preference</h3>
                  <input type="text" name='preference' value={this.state.preference}  onChange={(e) => this.handleInput(e)}/>
                  <h3>bio</h3>
                  <input type="text" name='bio' value={this.state.bio}  onChange={(e) => this.handleInput(e)}/>
                  <h3>image Url</h3>
                  <input type="text" name='imageUrl' value={this.state.imageUrl}  onChange={(e) => this.handleInput(e)}/>
                </div> 
          </div>
          <div id='dropdown-edit-button-box'>
                  <button onClick={() => this.editDog(this.state.id)}>Save Dog</button>
                  <button onClick={() => this.editCat(this.state.id)}>Save Cat</button>
                  </div>
              </div>
          )
      }
    return (
      <div className="admin-edit">
        <div className="edit-big-box">
          <div className="edit-dogs">
            {this.state.dogs.map(pet => {
                console.log(pet)
                console.log(pet.houseTrained)
              return (
                <div className="individual-doggos">
                  <div id="edit-button-box">
                    <img src={pet.imageurl} alt={pet.name} />
                    <div>
                      <button style={{backgroundColor: 'red'}} className="admin-edit-buttons" onClick={ () => this.deleteDog(pet.id)}>delete</button>
                      <button style={{backgroundColor: 'green'}} className="admin-edit-buttons" onClick={() => this.handleEdit(pet.id)}>edit</button>
                    </div>
                  </div>
                  <div id="admin-edit-info">
                    <h4>Name: {pet.name}</h4>
                    <h4>Breed: {pet.breed}</h4>
                    <h4>Age: {pet.animal_age}</h4>
                    <h4>Location Id: {pet.location_id}</h4>
                    <h4>Gender: {pet.gender}</h4>
                    <h4>HouseTrained: {pet.housetrained}</h4>
                    <h4>Health: {pet.health}</h4>
                    <h4>Preference: {pet.preference}</h4>
                    <h4>Bio: {pet.bio}</h4>
                  </div>
                </div>
              );
            })}
          </div>
          {/* closing tag for dog box */}
          <div className="edit-cats">
            {this.state.cats.map(pet => {
              return (
                <div className="individual-cattos">
                  <div id="edit-button-box">
                    <img src={pet.imageurl} alt={pet.name} />
                    <div>
                      <button style={{backgroundColor: 'red'}} className="admin-edit-buttons" onClick={() => this.deleteCat(pet.id)}>delete</button>
                      <button style={{backgroundColor: 'green'}} className="admin-edit-buttons" onClick={() => this.handleEdit(pet.id)}>edit</button>
                    </div>
                  </div>
                  <div id="admin-edit-info">
                    <h4>Name: {pet.name}</h4>
                    <h4>Breed: {pet.breed}</h4>
                    <h4>Age: {pet.animal_age}</h4>
                    <h4>Location Id: {pet.location_id}</h4>
                    <h4>Gender: {pet.gender}</h4>
                    <h4>HouseTrained: {pet.houseTrained}</h4>
                    <h4>Health: {pet.health}</h4>
                    <h4>Preference: {pet.preference}</h4>
                    <h4>Bio: {pet.bio}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div id='adminedit-button-box'>
          <Link to='/admin-home'>
          <button id='baby-little-button'>Home Page</button>
          </Link>
          
        </div>

      </div> //admin-edit closing tag
    );
  }
}

export default AdminEdit;
