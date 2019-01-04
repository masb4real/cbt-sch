import React, { Component } from 'react';
import Navigation from '../Navbar/Navigation';
import { connect } from 'react-redux';
import { signinAdmin } from '../../actions';

import './LoginStyles.css';

class AdminLogin extends Component {
  state = {
    username: "",
    password: ""
  }

  onSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    // contruct and object from username and password
    const data = { username, password };

    console.log("You clicked submit", data);
    // sign in admin
    this.props.signinAdmin(data);
  }

  render() {
    return (
      <div>
        <Navigation />
        <div className="container-fluid ">
          <div className="row">
            <div className="col-md-4 mx-auto">
              <div className="card mt-5">
                <div className="card-header">
                  <h3 className="text-center">ADMIN LOGIN</h3>
                </div>
                <div className="card-body">
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <label htmlFor="username">Username:</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="username" 
                        value={this.state.username}
                        onChange={e => this.setState({ username: e.target.value })}
                        name="username" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password:</label>
                      <input 
                        type="password" 
                        className="form-control" 
                        id="password" 
                        value={this.state.password}
                        onChange={e => this.setState({ password: e.target.value })}
                        name="password" />
                    </div>
                    <button 
                      className="btn btn-outline-success btn-block" 
                      type="submit" >Login</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { signinAdmin })(AdminLogin);