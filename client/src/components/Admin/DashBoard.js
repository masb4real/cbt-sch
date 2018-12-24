import React, { Component } from 'react'

export default class DashBoard extends Component {
  render() {
    return (
      <div>
        <h3>Wecome to Admin Dashboard</h3>
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header">
                <h4>Sample Card</h4>
              </div>
              <div className="card-body">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing
                  elit
              </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-header">
                <h4>Sample Card</h4>
              </div>
              <div className="card-body">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing
                  elit
              </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-header">
                <h4>Sample Card</h4>
              </div>
              <div className="card-body">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing
                  elit
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
