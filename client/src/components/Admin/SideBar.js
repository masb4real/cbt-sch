import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = props => {
  const { path, data } = props;
  return (
    <aside id="drawer" ref={props.drawer} className="dark_blue">
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
            <Link to={`${path}/logout`}>Logout</Link>
          </li>
        </ul>
      </section>
    </aside>
  );
}

export default SideBar;