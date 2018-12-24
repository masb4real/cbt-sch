import React, { Component } from 'react'

export default class MyExams extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <h3>My Exams</h3>
          <table className="table table-stripped">
            <thead>
              <tr>
                <th>id</th>
                <th>Date</th>
                <th>Nesult</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>7th December 2018</td>
                <td>
                  <button className="btb btn-success">View result</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
