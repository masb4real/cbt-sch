import React, { Component } from 'react';
import { connect } from 'react-redux';

class WriteExam extends Component {
  state = {
    option: "",
    questions: null
  }

  componentWillMount() {
    const { match: { params: { subjectId }}} = this.props;
    console.log('component will mount', subjectId);
    const all = this.getCurrentSubjectQuestions(subjectId);
    this.setState({ questions: all });
  }

  componentWillUpdate(nextProps, nextState) {
    const { match: { params: { subjectId }}} = nextProps;
    const all = this.getCurrentSubjectQuestions(subjectId);
  }

  getLastSubject = () => {
    const { match: { params: { subjectId }}} = this.props;
    return subjectId;
  }

  getCurrentSubjectQuestions = (subjectId) => {
    const { questions } = this.props; // questions from props
    // get questions for current subject
    const all = questions[subjectId];
    // update component state
    return all;
  }

  render() {
    const { questions } = this.state;

    if(questions.length <= 0) {
      return (
        <h5>
          Sorry :) no question found for current subject
        </h5>
      )
    }
    return <div className="col-md-12">
        <div>
          <br />
          <h5>
            Question: Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Sapiente, at?
          </h5>
          <br />
          <br />
          <form>
            <div className="form-group">
              <label htmlFor="">
                <input type="radio" name="option" id="" /> option 1
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="">
                <input type="radio" name="option" id="" /> option 2
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="">
                <input type="radio" name="option" id="" /> option 3
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="">
                <input type="radio" name="option" id="" /> option 4
              </label>
            </div>
            <button className="btn btn-success">Next >></button>
          </form>
        </div>
      </div>;
  }
}

const mapStateToProps = state => ({ 
  questions: state.questions.all
});

export default connect(mapStateToProps)(WriteExam);
