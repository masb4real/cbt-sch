import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signoutUser } from '../../actions';
import history from '../../history';

class SideBar extends Component {

  logout = () => {
    this.props.signoutUser();
    history.push("/admin-login");
  }

  render() {
    const { path, data } = this.props;
    return (
      <aside id="drawer" ref={this.props.drawer} className="dark_blue">
        <header className="sidebar-header">
          <h2>{data.name}</h2>
          <p>{data.role} dashboard</p>
        </header>
        <section>
          <ul className="sidebar-list">
            <li>
              <Link to={`${path}`}>Dashboard</Link>
            </li>
            <li>
              <Link to={`${path}/students`}>Students</Link>
            </li>
            <li>
              <Link to={`${path}/subjects`}>Subjects</Link>
            </li>
            <li>
              <Link to={`${path}/questions`}>Questions</Link>
            </li>
            <li>
              <Link to={`${path}/students-exams`}>Students Exams</Link>
            </li>
            <li>
              <button onClick={this.logout} className="btn btn-danger">Logout</button>
            </li>
          </ul>
        </section>
      </aside>
    );
  }
}

export default connect(null, { signoutUser })(SideBar);