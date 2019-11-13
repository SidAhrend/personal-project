import React from "react";
import "../Admin/Admin.css";
import Axios from "axios";
import {withRouter} from 'react-router-dom';

class Admin extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }
  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleLogin = (props) => {
    Axios.post("/auth/login", {
      username: this.state.username,
      password: this.state.password
    })
      .then(res => {
        this.props.history.push("/admin-home");
        console.log(props)
        this.setState = {
          username: "",
          password: ""
        };
      })
      .catch(err => console.log(err));
  };
  handleReturn = () => {
    this.props.history.push('/')
  }
  

  render() {
      
    console.log(this.state);
    return (
      <div className="admin">
        <div className="login-box">
          <img
            id="UAAC-pic"
            src="https://www.animalleague.org/wp-content/uploads/2017/11/shelter-logo-utah-animal-adoption-112117.jpg"
            alt="UAAC"
          />
          <input
            className="admin-input"
            value={this.state.username}
            type="text"
            name="username"
            placeholder="Username"
            onChange={(e) => this.handleInput(e)}
          />
          <input
            className="admin-input"
            value={this.state.password}
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => this.handleInput(e)}
          />
          <button id="admin-button" onClick={this.handleLogin}>
            Login
          </button>
          <button id='admin-button' onClick={this.handleReturn}>Return</button>
        </div>
      </div>
    );
  }
}
export default withRouter(Admin);
