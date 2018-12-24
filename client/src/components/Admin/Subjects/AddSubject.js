import React, { Component } from 'react';

class AddSubject extends Component {
  state = {
    name: ""
  }

  onSubmit = e => {
    e.preventDefault(); 
    const { name } = this.state;
    const data = { name };
    console.log(data);
  }

  render() {
    return (
      <div className="col-md-4 mx-auto mt-5">
        <div className="card">
          <div className="card-header">
            <h3>Add Subject</h3>
          </div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="subject-name">Subject Name:</label>
                <input 
                  type="text" 
                  id="subject-name" 
                  name="name" 
                  onChange={e => this.setState(
                    { name: e.target.value }
                  )}
                  placeholder="Enter subject name"
                  className="form-control" />
              </div>
              <button type="submit" onClick={this.onSubmit} className="btn btn-block btn-outline-success">
                Add Subject
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddSubject;