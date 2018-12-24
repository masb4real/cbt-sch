import React, { Component } from 'react';
import { connect } from  'react-redux';
import { fetchAllStudents } from '../../../actions';

class AllStudents extends Component {
  componentWillMount() {
    const { students } = this.props;
    if (students.length <= 0) {
      console.log('fetching students');
      this.props.fetchAllStudents();
    }
  }

  renderTable = () => {
    const { students } = this.props;
    if (students.length > 0) {
      return students.map(student => {
        return (
          <tr key={student.user_id}>
            <td>{student.name}</td>
            <td>{student.exam_number}</td>
            <td>
              <button className="btn btn-warning btn-sm">Edit</button>
            </td>
            <td>
              <button className="btn btn-danger btn-sm">Delete</button>
            </td>
          </tr>
        )
      })
    } else {
      return (
        <div>No Student found</div>
      );
    }
  }

  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Exam Number</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {this.renderTable()}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = state => ({ students: state.students });

export default connect(mapStateToProps, { fetchAllStudents })(AllStudents);