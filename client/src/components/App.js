import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import HomePage from './HomePage/Hompage';
import Student from './Student/Student';
import AdminDashboard from './Admin/AdminDashboard';
import NoMatch from './404/404';
import AdminLogin from './Auth/AdminLogin';
import Login from './Auth/Login';

const isAuthenticated = () => {
  const isAuth = localStorage.getItem('token');

  return isAuth !== null ? true : false;
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
      }
    />
  );
}

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute path="/student" component={Student} />
        <Route exact path="/admin-login" component={AdminLogin} />
        <PrivateRoute path="/dashboard" component={AdminDashboard}/>
        <Route component={NoMatch} />
      </Switch>
    );
  }
}

export default App;
