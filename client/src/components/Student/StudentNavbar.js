import React, { Component } from 'react';
import PropTypes from 'prop-types';
import history from '../../history';
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';

class StudentNavbar extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
      start_exam: false,
      minutes: 0,
      seconds: 0,
    };
  }

  componentWillMount() {
    const time = localStorage.getItem('remainder');

    if(!time) {
      this.timer(7200);
    } else {
      this.timer(parseInt(time));
    }
    
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  timer = (seconds) => {
    let countdown;

    const now = Date.now();
    const then = now + seconds * 1000;

    this.displayTimeLeft(seconds);

    countdown = setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000);

      if(secondsLeft < 0) {
        clearInterval(countdown);
        this.props.stopExam();
        history.push('/student/view-result');
        return;
      }
      localStorage.setItem('remainder', secondsLeft);
      this.displayTimeLeft(secondsLeft);
    }, 1000);

  }

  displayTimeLeft = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainder = seconds % 60;

    this.setState({ minutes, seconds: remainder});
  }

  appendZero(num) {
		return num < 10 ? '0' + num : num;
	}

  onSubmit = () => {
    if(window.confirm("Are you sure you want to sumit your exam")) {
      console.log('yex');
      this.props.stopExam();
      history.push('/student/view-result');
    } else {
      console.log('no')
    }
  }

  renderButtons = () => {
    if(this.props.startExam === "true") {
      return (
        <Nav className="ml-auto" navbar>
          <NavItem>
            <span className="btn-nav btn btn-success">{this.appendZero(this.state.minutes)} : {this.appendZero(this.state.seconds)}</span>
          </NavItem>
          <NavItem>
            <button type="button" onClick={this.onSubmit} className="btn-nav btn btn-danger">Finish Exam</button>
          </NavItem>
        </Nav>
      );
    }
  }

  render() {
    return (
      <div style={{position: "fixed", zIndex: 3, width: '80%'}}>
        <Navbar color="secondary" light expand="sm">
          <NavbarBrand className="mr-auto">
            <span id="menu" onClick={this.props.toggleDrawer}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M2 6h20v3H2zm0 5h20v3H2zm0 5h20v3H2z" />
              </svg>
            </span>
          </NavbarBrand>
          {this.renderButtons()}
        </Navbar>
      </div>
    )
  }
}

NavbarToggler.propTypes = {
  type: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
};

export default StudentNavbar;