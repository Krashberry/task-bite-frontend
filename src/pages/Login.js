import React, { Component } from 'react';
import UserModel from '../models/user';

class Login extends Component {
  state = {
    username: '',
    password: '',
}

handleChange = (event) => {
  this.setState({
    [event.target.name]: event.target.value,
  })
}

handleSubmit = (event) => {
  event.preventDefault()

  UserModel.login(this.state)
  .then(data => {
      console.log(data.user)
      if (!data.user) return false
      this.props.storeUser(data.user)
      this.props.history.push('/projects')
    })
    .catch(err => console.log(err))
}

render() {
  return (
    <div>
      <h4>Login</h4>
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Username</label>
          <input 
            onChange={this.handleChange} 
            type="username" 
            id="username" 
            name="username" 
            value={this.state.name} />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
            onChange={this.handleChange} 
            className="form-control form-control-lg" 
            type="password" 
            id="password" 
            name="password" 
            value={this.state.password} />

        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
}

export default Login;
