// React
import React, { Component } from 'react';
// React Router
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
// React Cookie
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
// components
import Main from './Main';
import Reception from './Reception';
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

    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={({ match }) => (
              <Redirect to={"/reception/322"} />
            )} />
          <Route
            exact
            path="/reception/:tableId?"
            component={
              ({ match }) => (
                <Reception
                  match={match}
                  serviceEntry={this.state.serviceEntry} />
              )
            } />
          <Route
            exact
            path="/main/:tableId?"
            component={
              ({ match }) => (
                <Main
                  match={match}
                  serviceEntry={this.state.serviceEntry} />
              )
            } />
          <Route
            exact
            path="/cart/:tableId?"
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
            component={
              ({ match }) => (
                <Error
                  match={match}
                  serviceEntry={this.state.serviceEntry} />
              )
            } />
        </Switch>
      </Router>
    );
  }

}

export default withCookies(App);
