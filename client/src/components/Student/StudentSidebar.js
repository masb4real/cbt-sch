import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signoutUser } from '../../actions';

class StudentSidebar extends Component {

  render() {
    const { path, selected, drawer, startExam, name } = this.props;
    return <aside id="drawer" ref={drawer} className="dark_blue">
        <header className="sidebar-header">
          <h3><small>{name}</small></h3>
          <p>Student Dashboard</p>
        </header>
        {startExam === "true" ? (
          <ul className="sidebar-list">
            {selected.map(subject => <li key={subject.id}><Link to={`${path}/write-exam/${subject.id}`}>{subject.name}</Link></li>)}
          </ul>
        ) : (
          <ul className="sidebar-list">
            <li>
              <Link to={`${path}`}>Dashboard</Link>
            </li>
            <li>
              <Link to={`${path}/my-exams`}>My Exams</Link>
            </li>
            <li>
              <button onClick={() => this.props.signoutUser()} className="btn btn-danger">Logout</button>
            </li>
          </ul>
        )
      }
      </aside>;
  }
}

const mapStateToProps = state => ({ selected: state.selectedSubjects });

export default connect(mapStateToProps, { signoutUser })(StudentSidebar);