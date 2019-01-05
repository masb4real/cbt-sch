import React, { Component } from 'react';
import { connect } from 'react-redux';

class AllSubjects extends Component {

  renderTable = () => {
    const { subjects } = this.props;
    if(subjects.lenght <= 0) {
      return <tr><td colSpan="2">No subjects found</td></tr>
    } else {
      return subjects.map((subject, i) => {
        return <tr key={i}>
            <td>{subject.name}</td>
            <td>
              <button className="btn btn-warning btn-sm">Edit</button>
            </td>
          </tr>;
      })
    }
  }

  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Subject Name:</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {this.renderTable()}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = state => ({ subjects: state.subjects });

export default connect(mapStateToProps)(AllSubjects);