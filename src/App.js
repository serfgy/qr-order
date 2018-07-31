// React
import React, { Component } from 'react';
// React Router
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
// react-cookie
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
// components
import Main from './Main';
import Cart from './Cart';
import Error from './Error';
import Success from './Success';
// CSS
import './App.css';

class App extends Component {

  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);
    console.log('app constructed');

    // init
    this.state = {
      serviceEntry: window.formAppConfig.serviceEntry,
      home: {
        name: 'Guest'
      },
    };
  }

  render() {
    console.log('render app');

    const { cookies } = this.props;
    const userRecKey = cookies.get("userRecKey");

    return (
      <Router>
        <div>
          <Route
            exact
            path="/"
            component={({ match }) => (
              <Redirect to={"/table/1"} />
            )} />
          <Route
            exact
            path="/table/:tableId"
            component={
              ({ match }) => (
                <Main
                  match={match}
                  serviceEntry={this.state.serviceEntry} />
              )
            } />
          <Route
            exact
            path="/cart/:tableId"
            component={
              ({ match }) => (
                <Cart
                  match={match}
                  serviceEntry={this.state.serviceEntry} />
              )
            } />
          <Route
            exact
            path="/success"
            component={
              ({ match }) => (
                <Success
                  match={match}
                  serviceEntry={this.state.serviceEntry} />
              )
            } />
          <Route
            exact
            path="/error"
            component={
              ({ match }) => (
                <Error
                  match={match}
                  serviceEntry={this.state.serviceEntry} />
              )
            } />
        </div>
      </Router>
    );
  }

}

export default withCookies(App);
