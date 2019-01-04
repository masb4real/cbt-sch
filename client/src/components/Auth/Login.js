import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from '../Navbar/Navigation';
import './LoginStyles.css';
import { signinUser } from '../../actions';

class Login extends Component {
  state = {
    exam_number: ""
  }

  onSubmit = e => {
    e.preventDefault();
    const { exam_number } = this.state;

    const data = { exam_number };
    // sign the user in
    this.props.signinUser(data);
  }

  render() {
    return (
      <div>
        <Navigation />
        <div className="container-fluid ">
          <div className="row">
            <div className="col-md-4 mx-auto mt-5">
              <div className="card">
                <div className="card-header text-center">
                  <h3>STUDENT lOGIN</h3>
                </div>
                <div className="card-body">
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <label htmlFor="exam_number">Examinamtion Number:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exam_number"
                        value={this.state.exam_number}
                        onChange={e => this.setState({ exam_number: e.target.value })}
                        placeholder="Enter your exam number"
                        name="exam_number" />
                    </div>
                    <button className="btn btn-block btn-outline-success" type="submit">Login</button>
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

export default connect(null, { signinUser })(Login);