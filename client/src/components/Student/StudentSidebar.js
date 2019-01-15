import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signoutUser } from '../../actions';
import history from '../../history';

class StudentSidebar extends Component {

  onLogout = () => {
    this.props.signoutUser();
    history.push("/login");
  }

  render() {
    const { path, selected, drawer, startExam, name } = this.props;
    return <aside id="drawer" ref={drawer} className="dark_blue">
        <header className="sidebar-header">
          <h3><small>{name}</small></h3>
          <p>Student Dashboard</p>
        </header>
        {startExam === "true" ? (
          <ul className="sidebar-list">
            {/* {selected.map(subject => <li key={subject.id}><Link to={`${path}/write-exam/${subject.id}`}>{subject.name}</Link></li>)} */}
            <li key={selected[0].id}><Link to={`${path}/first/${selected[0].id}`}>{selected[0].name}</Link></li>
            <li key={selected[1].id}><Link to={`${path}/second/${selected[1].id}`}>{selected[1].name}</Link></li>
            <li key={selected[2].id}><Link to={`${path}/third/${selected[2].id}`}>{selected[2].name}</Link></li>
            <li key={selected[3].id}><Link to={`${path}/fourth/${selected[3].id}`}>{selected[3].name}</Link></li>
          </ul>
        ) : (
          <ul className="sidebar-list">
            <li>
              <Link to={`${path}`}>Dashboard</Link>
            </li>
            <li>
              <button onClick={this.onLogout} className="btn btn-danger">Logout</button>
            </li>
          </ul>
        )
      }
      </aside>;
  }
}

const mapStateToProps = state => ({ selected: state.selectedSubjects });

export default connect(mapStateToProps, { signoutUser })(StudentSidebar);