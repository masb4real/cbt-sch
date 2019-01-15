import React, { Component } from 'react'
import { connect } from 'react-redux';
import axios from 'axios';
import { ROOT_URL } from '../../actions/types';
import {
  fetch_subjects,
  saveQuestions,
  saveSelectedSubjects
} from "../../actions";
import history from '../../history';
class MainDashboard extends Component {
  constructor(props) {
    super();
    this.state = {
      subject_1: "",
      subject_2: "",
      subject_3: "",
      subject_4: "",
    }
  }

  componentWillMount() {
    const { subjects } = this.props;
    if(subjects.length <= 0) {
      this.props.fetch_subjects();
    }
  }

  renderOptions = () => {
    const { subjects } = this.props;
    const unique2 = '_1_' + Math.random()
      .toString(34)
      .substr(2, 8);

    return (
      <>
        <option value="" key={unique2}>-- select --</option>
        {subjects.map(subject => {
        const unique = '_' + Math.random().toString(36).substr(2, 9);
        return <option key={unique} value={subject.id}>{subject.name}</option>;
      })}
      </>
    )
  }

  handleSelect1 = e => {
    if (e.target.value !== this.state.subject_2 && e.target.value !== this.state.subject_3 && e.target.value !== this.state.subject_4) {
      this.setState({ subject_1: e.target.value });
    } else {
      window.alert("You cannot select the same subject twice");
      return;
    }
  }

  handleSelect2 = e => {
    if (e.target.value !== this.state.subject_1 && e.target.value !== this.state.subject_3 && e.target.value !== this.state.subject_4) {
      this.setState({ subject_2: e.target.value });
    } else {
      window.alert("You cannot select the same subject twice");
      return;
    }
  }

  handleSelect3 = e => {
    if (e.target.value !== this.state.subject_1 && e.target.value !== this.state.subject_2 && e.target.value !== this.state.subject_4) {
      this.setState({ subject_3: e.target.value });
    } else {
      window.alert("You cannot select the same subject twice");
      return;
    }
  }

  handleSelect4 = e => {
    if (e.target.value !== this.state.subject_1 && e.target.value !== this.state.subject_2 && e.target.value !== this.state.subject_3 ) {
      this.setState({ subject_4: e.target.value });
    } else {
      window.alert("You cannot select the same subject twice");
      return;
    }
  }

  onSubmit = e => {
    e.preventDefault();
    const { subject_1, subject_2, subject_3, subject_4} = this.state;
    let selected = [subject_1, subject_2, subject_3, subject_4];

    if (subject_1 === "" && subject_2 === "" && subject_3 === "" && subject_4 === "") {
      window.alert("All four subjects must be selected");
      return;
    }
    
    const all = selected.map((select, i) => {
      return this.props.subjects.find(subject => subject.id === select);
    });
    // save selected subjects to redux
    this.props.saveSelectedSubjects(all);
    // stringify subjects
    const subjects = selected.toString();
    // get question selected subjects
    axios.get(`${ROOT_URL}/questions/exam`, {
      headers: { 
        authorization: localStorage.getItem('token'),
        subjects
      }
    })
    .then(response => {
      // save questions for selected subjects
      this.props.saveQuestions(response.data.questions);
      // start exam
      this.props.start();  
      // redirect to exam interface
      history.push(`/student/write-exam`);
    })
    .catch(error => {
      console.log(error);
    });

  }

  render() {
    return (
      <div className="col-md-12 mt-5">
        <br /><br />
        <h3>Wecome to Student Dashboard</h3>
        <br />
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header">
                <h4>Select subject to start</h4>
              </div>
              <div className="card-body">
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label htmlFor="subject1">First Subject:</label>
                    <select value={this.state.subject_1} onChange={this.handleSelect1} className="form-control form-control-sm" name="subject1" id="subject1">
                      {this.renderOptions()}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject2">Second Subject</label>
                    <select value={this.state.subject_2} onChange={this.handleSelect2} className="form-control form-control-sm" name="subject2" id="subject2">
                      {this.renderOptions()}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject3">Third Subject</label>
                    <select value={this.state.subject_3} onChange={this.handleSelect3} className="form-control form-control-sm" name="subject3" id="subject3">
                      {this.renderOptions()}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject4">Forth Subject</label>
                    <select value={this.state.subject_4} onChange={this.handleSelect4} className="form-control form-control-sm" name="subject4" id="subject4">
                      {this.renderOptions()}
                    </select>
                  </div>
                  <button onClick={this.onSubmit} disabled={this.state.disabled} className="btn btn-block btn-warning" type="submit">Start Exam</button>
                </form>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-header">
                <h4>Instructions</h4>
              </div>
              <div className="card-body">
                <ul className="list-group">
                  <li className="list-group-item">You are to select 4 subjects.</li>
                  <li className="list-group-item">Each subject carries 75 Marks.</li>
                  <li className="list-group-item">Click on Start exam button to start.</li>
                  <li className="list-group-item">Once you start, you cannot pause.</li>
                  <li className="list-group-item">Click on finish exam to submit.</li>
                  <li className="list-group-item">Exam will automatically submit if time exceed.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );  
  }
}

const mapStateToProps = state => ({ subjects: state.subjects });

export default connect(
  mapStateToProps,
  { fetch_subjects, saveQuestions, saveSelectedSubjects }
)(MainDashboard);