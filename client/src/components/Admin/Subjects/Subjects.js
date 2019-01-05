import React, { Component } from 'react';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";

import AllSubject from './AllSubjects';
import AddSubject from './AddSubject';

class Subjects extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return <div>
        <Nav tabs>
          <NavItem>
            <NavLink className={classnames({
                active: this.state.activeTab === "1"
              })} onClick={() => {
                this.toggle("1");
              }}>
              All Subjects
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classnames({
                active: this.state.activeTab === "2"
              })} onClick={() => {
                this.toggle("2");
              }}>
              Add Subject
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <br />
                <h4>List of registered students</h4>
                <br />
                <AllSubject />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <AddSubject toggle={this.toggle} />
            </Row>
          </TabPane>
        </TabContent>
      </div>;
  }
}

export default Subjects;