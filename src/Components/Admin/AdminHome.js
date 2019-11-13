import React from "react";
import "../Admin/AdminHome.css";
import Axios from "axios";
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';


class AdminHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      species: '',
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
      messages: []
    };
    
  }

  componentDidMount = () =>{
    Axios.get('/contact/getAll')
    .then((res) => {
      // console.log(res.data)
      this.setState({
        messages: res.data
      })
      // console.log(this.state)
    })
  }

  handleAnimal = () => {
    Axios.post('/animal/send', {
      species: this.state.species,
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
        species: '',
        breed: '',
        name: '',
        animal_age: '',
        location_id: '1',
        gender: '',
        houseTrained: '',
        health: '',
        preference: '',
        bio: '',
        imageUrl: ''
      })
      alert('animal added')
    })
    .catch(err => console.log('animal wasnt added', err))
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleDelete = (id) => {
    Axios.delete(`/contact/delete/${id}`).then(res => {
      console.log(res.data)
      this.setState({
        messages: res.data
      })
    })
  };
  handleLogout = () => {
    this.props.history.push("/admin-login");
  }

  render() {

    console.log(this.state.messages)
    return (
      <div className="admin-home">
        <div className="content-box">
          <div id="form box">
            <div className="animal-add">
              <h1 style={{ margin: 0 }}>add animals</h1>
              <div>
                <input
                  className="admin-inputs"
                  type="text"
                  placeholder="dog or cat"
                  name="species"
                  value={this.state.species}
                  onChange={(e) => this.handleInput(e)}
                />
                <input
                  className="admin-inputs"
                  type="text"
                  placeholder="breed"
                  name="breed"
                  value={this.state.breed}
                  onChange={(e) => this.handleInput(e)}
                />
              </div>
              <div>
                <input
                  className="admin-inputs"
                  type="text"
                  placeholder="name"
                  name="name"
                  value={this.state.name}
                  onChange={(e) => this.handleInput(e)}
                />
                <input
                  className="admin-inputs"
                  type="text"
                  placeholder="age"
                  name="animal_age"
                  value={this.state.animal_age}
                  onChange={(e) => this.handleInput(e)}
                />
              </div>
              <div>
                <input
                  className="admin-inputs"
                  type="text"
                  placeholder="location id"
                  name="location_id"
                  value={this.state.location_id}
                  onChange={(e) => this.handleInput(e)}
                />
                <input
                  className="admin-inputs"
                  type="text"
                  placeholder="gender"
                  name="gender"
                  value={this.state.gender}
                  onChange={(e) => this.handleInput(e)}
                />
              </div>
              <h2 style={{ margin: 0 }}>about</h2>
              <div>
                <input
                  className="admin-inputs"
                  type="text"
                  placeholder="house trained?"
                  name="houseTrained"
                  value={this.state.houseTrained}
                  onChange={(e) => this.handleInput(e)}
                />
                <input
                  className="admin-inputs"
                  type="text"
                  placeholder="health"
                  name="health"
                  value={this.state.health}
                  onChange={(e) => this.handleInput(e)}
                />
              </div>
              <div>
                <input
                  className="admin-inputs"
                  type="text"
                  placeholder="preference"
                  name="preference"
                  value={this.state.preference}
                  onChange={(e) => this.handleInput(e)}
                />
                <input
                  className="admin-inputs"
                  type="text"
                  placeholder="bio"
                  name="bio"
                  value={this.state.bio}
                  onChange={(e) => this.handleInput(e)}
                />
              </div>
              <input
                className="admin-inputs"
                type="text"
                placeholder="imageUrl"
                name="imageUrl"
                value={this.state.imageUrl}
                onChange={(e) => this.handleInput(e)}
              />
              <button id="admin-button-submit" onClick={this.handleAnimal}>submit</button>
            </div>
          </div>

          <div className="messages">
            <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}><h1>Messages</h1></div>
               {this.state.messages.map(e => {
                  return(
                    <div className="individual-message">
                      {/* {console.log(e)} */}
                    <div id='message-info'>
                    <p>{e.name}</p>
                    <p>{e.email}</p>
                    <p>{e.phone}</p>
                    <button onClick={() => this.handleDelete(e.id)}>Delete Message</button>
                    </div>
                    <div id='ind-message'>
                    <p>{e.message}</p>
                    </div>
                    </div>
                  )
                })}
          </div>
        </div>
        <div id='adminedit-button-box'>
          <Link to='/admin-edit'>
          <button id='baby-little-button'>Edit Page</button>
          </Link>
          <button id='baby-little-button' onClick={this.handleLogout}>Logout</button>
        </div>
      </div>
    );
  }
}
export default withRouter(AdminHome);
