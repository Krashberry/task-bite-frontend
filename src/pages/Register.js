import React, { Component } from 'react';
import UserModel from '../models/user';

class Register extends Component {
  state = {
    username: '',
    password: '',
    password2: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    // TODO: complete this function
    event.preventDefault()

    // confirm password is the same
    if (this.state.password !== this.state.password2) return false;

    UserModel.create(this.state)
      .then(data => {
        console.log(data);
        // remember to clear state to also clear the data
        this.setState({
          username: '',
          password: '',
          password2: ''
        })
        // redirect to the login screen
        this.props.history.push('/login')
      })
  }

  render() {
    return (
      <div>
        <h4>Register</h4>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Username</label>
            <input
              onChange={this.handleChange}
              type="username"
              id="username"
              name="username"
              value={this.state.username} 
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">Password</label>
            <input
              onChange={this.handleChange}
              type="password"
              id="password"
              name="password"
              value={this.state.password} 
            />
          </div>

          <div className="form-group">
            <label htmlFor="password2">Confirm Password</label>
            <input
              onChange={this.handleChange}
              type="password"
              id="password2"
              name="password2"
              value={this.state.password2}
            />
          </div>

          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default Register;
