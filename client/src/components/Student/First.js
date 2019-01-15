import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Question from './Question';
import AllQuestions from './AllQuestions';

class First extends Component {
  state = {
    option: "",
    questions: null
  }

  componentWillMount() {
    // let time;
    // time = setTimeout(() => {
    const { match: { params: { subjectId } } } = this.props;
    if (this.state.questions === null) {
      this.getCurrentSubjectQuestions(subjectId);
    }
    // }, 1000);

    // clearTimeout(time);
    
  }

  componentDidMount() {

    const { match: { params: { subjectId } } } = this.props;
    if (this.state.questions === null) {
      this.getCurrentSubjectQuestions(subjectId);
    }
  
  }

  componentWillReceiveProps(nextProps) {
    const { match: { params: { subjectId }}} = nextProps;
    this.getCurrentSubjectQuestions(subjectId);
  }

  getLastSubject = () => {
    const { match: { params: { subjectId }}} = this.props;
    return subjectId;
  }

  getCurrentSubjectQuestions = (subjectId) => {
    const { questions } = this.props; // questions from props

    if(!questions) {
      return;
    }
    // get questions for current subject
    const all = questions[subjectId];
    // update component state
    this.setState({ questions: all });
  }

  render() {
    const { questions } = this.state;

    if(questions === null) {
      return (
        <div className="mt-5 text-center">
          <br /><br />
          <h5>Loading questions...</h5>
        </div>
      );
    }

    if(questions.length <= 0) {
      return (
        <h5 className="mt-4">
          <br /><br />
          Sorry :) no question found for current subject
        </h5>
      )
    }
    
    return (
      <div className="col-md-12 mt-5">
        <br /><br />
        <AllQuestions questions={this.state.questions} />
        {/* <form>
          {this.state.questions.map((data, i) => {
           return <Question key={i} mark={length} question={data} index={i}/>
          })}
        </form> */}
      </div>
    );
  }

}

const mapStateToProps = state => ({ 
  questions: state.questions.all
});

export default connect(mapStateToProps)(First);