// React
import React, { Component } from 'react';
// React Router
import { HashRouter as Router, Route, Redirect } from "react-router-dom";
// react-cookie
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
// components
import Main from './Main';
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
      serviceEntry: window.formAppConfig.serviceEntry
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
            path="/:tableId"
            component={
              ({ match }) => (
                <Main
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
