import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

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
    localStorage.setItem('startExam', true);
    this.setState({ startExam: true });
    console.log(this.props.startExam);
  }

  render() {
    const { match, data } = this.props;
    return <div className="wrap">
        <StudentSidebar path={match.path} name={data.name} startExam={this.state.startExam} drawer={this.drawer} />
        <main>
          <StudentNavbar startExam={this.state.startExam} toggleDrawer={this.toggleDrawer} />
          <section className="container-fluid" onClick={this.toggleDrawer}>
            <Switch>
              <Route exact path={`${match.path}`} component={() => <MainDasboard start={this.start}/>} />
              <Route exact path={`${match.path}/my-exams`} component={MyExams} />
              <Route exact path={`${match.path}/write-exam`} component={WriteExam} />
              <Route exact path={`${match.path}/view-result`} component={ViewResult} />
            </Switch>
          </section>
        </main>
      </div>;
  }
}

const mapStateToProps = state => ({ data: state.auth.data });

export default connect(mapStateToProps)(Dashboard);