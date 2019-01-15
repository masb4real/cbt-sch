import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { 
  saveToDB, 
  saveScores, 
  clearSelectedSubjects, 
  clearQuestions, 
  clearOptions 
} from '../../actions';

import './Student.css'

import StudentSidebar from './StudentSidebar';
import MainDasboard from './MainDashboard';
import StudentNavbar from './StudentNavbar';
import WriteExam from './WriteExam';
import MyExams from './MyExams';
import ViewResult from './ViewResult';
import First from './First';
import Second from './Second';
import Third from './Third';
import Four from './Four';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.drawer = React.createRef();

    this.state = {
      startExam: localStorage.getItem('startExam')
    }
  }

  toggleDrawer = e => {
    e.preventDefault();
    this.drawer.current.classList.toggle("open");
  };

  closeDrawer = () => {
    this.drawer.current.classList.remove("open");
  };

  start = () => {
    localStorage.setItem('startExam', "true");
    this.setState({ startExam: "true" });;
  }

  stop = () => {
    const { answers, selected, data: { user_id } } = this.props;
    // get all the subject id's
    const ids = selected.map(item => item.id);
    // get scores  for each subject
    const first = answers.filter(question => question.subject_id === ids[0]);
    const second = answers.filter(question => question.subject_id === ids[1]);
    const third = answers.filter(question => question.subject_id === ids[2]);
    const fourth = answers.filter(question => question.subject_id === ids[3]);
    // calculate final answers for each subject
    const score1 = (first.length <= 0) ? 0 : first.map(item => item.mark).reduce((x, y) => x + y);
    const score2 = (second.length <= 0) ? 0 : second.map(item => item.mark).reduce((x, y) => x + y);
    const score3 = (third.length <= 0) ? 0 : third.map(item => item.mark).reduce((x, y) => x + y);
    const score4 = (fourth.length <= 0) ? 0 : fourth.map(item => item.mark).reduce((x, y) => x + y);
    // store final answers
    const allScores = [score1, score2, score3, score4]
    const total = allScores.reduce((x, y) => x + y); // total mark
    const examScores = selected.map((data, i) => {
      return { id: data.id, name: data.name, score: Math.ceil(allScores[i]) };
    })

    // the object to send to the database
    const obj = {
      user_id,
      subject1: `${selected[0].name}-${score1}`,
      subject2: `${selected[1].name}-${score2}`,
      subject3: `${selected[2].name}-${score3}`,
      subject4: `${selected[3].name}-${score4}`
    }

    // clean localStorage for selectted values
    answers.forEach(element => {
      localStorage.removeItem(`q_${element.id}`);
    });

    this.props.saveToDB(obj);
    this.props.saveScores(examScores);
    this.props.clearQuestions();
    this.props.clearSelectedSubjects();
    this.props.clearOptions();
  
    localStorage.setItem("startExam", "false");
    this.setState({ 
      startExam: "false",
    });

  }

  render() {
    const { match, data, selected } = this.props;
    return <div className="wrap">
        <StudentSidebar path={match.path} selected={selected} name={data.name} startExam={this.state.startExam} drawer={this.drawer} />
        <main className="main-page">
          <StudentNavbar startExam={this.state.startExam} stopExam={this.stop} toggleDrawer={this.toggleDrawer} />
          <section className="container-fluid">
            <Switch>
              <Route exact path={`${match.path}`} component={() => <MainDasboard start={this.start}/>} />
              <Route exact path={`${match.path}/my-exams`} component={MyExams} />
              <Route exact path={`${match.path}/write-exam`} component={WriteExam} />
              <Route exact path={`${match.path}/first/:subjectId`} component={First} />
              <Route exact path={`${match.path}/second/:subjectId`} component={Second} />
              <Route exact path={`${match.path}/third/:subjectId`} component={Third} />
              <Route exact path={`${match.path}/fourth/:subjectId`} component={Four} />
              <Route exact path={`${match.path}/view-result`} component={ViewResult} />
            </Switch>
          </section>
        </main>
      </div>;
  }
}

const mapStateToProps = state => ({
  data: state.auth.data,
  selected: state.selectedSubjects,
  answers: state.exam
});

export default connect(
  mapStateToProps, 
  { saveToDB, saveScores, clearSelectedSubjects, clearQuestions, clearOptions }
)(Dashboard);