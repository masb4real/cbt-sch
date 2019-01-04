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
      start_exam: false
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
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
            <button className="btn-nav btn btn-outline-success">12: 55</button>
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
      <div>
        <Navbar color="faded" light expand="sm">
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