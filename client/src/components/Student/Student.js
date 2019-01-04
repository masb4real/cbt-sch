import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { saveToDB, saveScores } from '../../actions';

import './Student.css'

import StudentSidebar from './StudentSidebar';
import MainDasboard from './MainDashboard';
import StudentNavbar from './StudentNavbar';
import WriteExam from './WriteExam';
import MyExams from './MyExams';
import ViewResult from './ViewResult';

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

    //console.log(third);
    let score1, score2, score3, score4;

    if(first.length <= 0) {
      score1 = 75;
    } else {
      score1 = first.map(item => item.mark).reduce((x, y) => x + y);
    }
    if(second.length <= 0) {
      score2 = 75;
    } else {
      score2 = second.map(item => item.mark).reduce((x, y) => x + y);
    }
    if(third.length <= 0) {
      score3 = 75;
    } else {
      score3 = third.map(item => item.mark).reduce((x, y) => x + y);
    }
    if(fourth.length <= 0) {
      score4 = 75;
    } else {
      score4 = fourth.map(item => item.mark).reduce((x, y) => x + y);
    }

    const allScores = [score1, score2, score3, score4]
    const total = allScores.reduce((x, y) => x + y);
    const examScores = selected.map((data, i) => {
      return { id: data.id, name: data.name, score: allScores[i] };
    })

    // the object to send to the database
    const obj = {
      user_id,
      subject1: `${selected[0].name}-${score1}`,
      subject2: `${selected[1].name}-${score2}`,
      subject3: `${selected[2].name}-${score3}`,
      subject4: `${selected[3].name}-${score4}`,
      total
    }

    console.log('db data', obj);
    console.log('scores', examScores);
    this.props.saveToDB(obj);
    this.props.saveScores(examScores);
  
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
              <Route exact path={`${match.path}/write-exam/:subjectId`} component={WriteExam} />
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

export default connect(mapStateToProps, { saveToDB, saveScores })(Dashboard);