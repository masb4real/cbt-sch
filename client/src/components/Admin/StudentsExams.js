import React, { Component } from 'react';
import { connect } from 'react-redux';

class StudentsExams extends Component {
  renderTable() {
    if(this.props.exams <= 0) {
      return (
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      );
    } else {
      return this.props.exams.map((data, i) => {
        return (
          <tr key={i}>
            <th>{data.name}</th>
            <th>{data.subject1}</th>
            <th>{data.subject2}</th>
            <th>{data.subject3}</th>
            <th>{data.subject4}</th>
            <th>{data.total}</th>
          </tr>
        )
      })
    }
  }

  render() {
    return (
      <div className="col-md-12">
        <h3 className="text-center">Students Examination Results</h3>
        <br />
        <table className="table table-bordered table-stripped">
          <thead>
            <tr>
              <th>Name</th>
              <th>First Subject</th>
              <th>Second Subject</th>
              <th>Third Subject</th>
              <th>Fourth Subject</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {this.renderTable()}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => ({ 
  exams: state.results
});

export default connect(mapStateToProps)(StudentsExams);