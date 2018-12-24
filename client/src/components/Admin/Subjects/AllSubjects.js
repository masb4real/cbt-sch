import React, { Component } from 'react'

export default class AllSubjects extends Component {
  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Subject Name:</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>English</td>
            <td>
              <button className="btn btn-warning btn-sm">Edit</button>
            </td>
            <td>
              <button className="btn btn-danger btn-sm">delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    )
  }
}
