import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStudent } from '../../../actions';
import { Alert } from 'reactstrap';

class AddStudents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      exam_number: "",
      success: false,
      visible: true
    }
  }

  onDismiss = () => {
    this.setState({ visible: false });
  }

  onSubmit = e => {
    e.preventDefault();
    const { name, exam_number } = this.state;
    const { createStudent } = this.props;

    const data = { name, exam_number };
    createStudent(data)
    this.setState({ name: "", exam_number: "", success: true });
    this.props.toggle('1');
  }

  renderMsg() {
    if(this.state.success) {
      return (
        <Alert color="success" isOpen={this.state.visible} toggle={this.onDismiss}>
          Student created successfully
        </Alert>
      );
    }
  }

  render() {
    return (
      <div className="col-md-4 mx-auto mt-5">
        {this.renderMsg()}
        <div className="card">
          <div className="card-header">
            <h3>Create Student</h3>
          </div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="fullname">Full Name:</label>
                <input type="text" name="name" id="fullname" placeholder="Enter fullname" className="form-control" onChange={e => this.setState(
                      { name: e.target.value }
                    )} />
              </div>
              <div className="form-group">
                <label htmlFor="exam_number">Exam Number:</label>
                <input 
                  type="text" 
                  id="exam_number" 
                  name="exam_number" 
                  placeholder="Exam number" 
                  className="form-control" 
                  onChange={e => this.setState({ exam_number: e.target.value })} />
              </div>
              <input type="submit" onClick={this.onSubmit} value="Create Student" className="btn btn-outline-success btn-block" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { createStudent })(AddStudents);