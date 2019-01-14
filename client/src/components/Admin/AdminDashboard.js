import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetch_subjects, fetchAllExams } from '../../actions';

import './AdminDashboard.css';
import SideBar from './SideBar';
import DashBoard from './DashBoard';
import Subjects from './Subjects/Subjects';
import Students from './Students/Students';
import Questions from './Questions/Questions';
import StudentsExams from './StudentsExams';

class AdminDashboard extends Component {
  constructor(props) {
    super(props);
    this.drawer = React.createRef();
  }

  toggleDrawer = e => {
    e.preventDefault();
    this.drawer.current.classList.toggle('open');
  }

  closeDrawer = () => {
    this.drawer.current.classList.remove("open");
  }

  componentDidMount() {
    if(this.props.subjects.length <= 0) {
      this.props.fetch_subjects();
    }

    if(this.props.exams.length <= 0) {
      this.props.fetchAllExams();
    }
  }

  render() {
    const { match, data } = this.props;
    return <div className="wrap">
        <SideBar path={match.path} data={data} drawer={this.drawer} />
        <main className="main-page">
          <span id="menu" onClick={this.toggleDrawer}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M2 6h20v3H2zm0 5h20v3H2zm0 5h20v3H2z" />
            </svg>
          </span>
          <section className="container-fluid">
            <Switch>
              <Route exact path={`${match.path}`} component={DashBoard} />
              <Route path={`${match.path}/students`} component={Students} />
              <Route path={`${match.path}/questions`} component={Questions} />
              <Route path={`${match.path}/subjects`} component={Subjects} />
              <Route path={`${match.path}/students-exams`} component={StudentsExams} />
            </Switch>
          </section>
        </main>
      </div>;
  }
}

const mapStateToProps = state => ({ 
  data: state.auth.data, 
  subjects: state.subjects, 
  exams: state.results
});

export default connect(mapStateToProps, { fetch_subjects, fetchAllExams })(AdminDashboard);