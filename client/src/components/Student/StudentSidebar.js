import React from 'react';
import { Link } from 'react-router-dom';

const StudentSidebar = props => {
  const { path } = props;

  return <aside id="drawer" ref={props.drawer} className="dark_blue">
      <header className="sidebar-header">
        <h3>{props.name}</h3>
        <p>Student Dashboard</p>
      </header>
      {props.startExam ? (
          <ul className="sidebar-list">
            <li>
              <Link to={`${path}/write-exams`}>English</Link>
            </li>
            <li>
              <Link to={`${path}/write-exams`}>Mathematic</Link>
            </li>
            <li>
              <Link to={`${path}/write-exams`}>Chemistry</Link>
            </li>
            <li>
              <Link to={`${path}/write-exams`}>Physics</Link>
            </li>
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
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        )
        }
      {/* <ul className="sidebar-list">
        <li>
          <Link to={`${path}`}>Dashboard</Link>
        </li>
        <li>
          <Link to={`${path}/my-exams`}>My Exams</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      </ul>*/}
    </aside>;
}

export default StudentSidebar;