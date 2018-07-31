import { version } from '../package.json';
// React
import React, { Component } from 'react';
// React Router
import { Route, Link, Redirect } from "react-router-dom";
import { withRouter } from 'react-router';
// react-cookie
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
// Ant Design Mobile
import { WhiteSpace, WingBlank, Flex, Icon } from 'antd-mobile';
// Images
import { Audit } from '@ant-design/icons/esm';
import AntdIcon from '@ant-design/icons-react/esm';

AntdIcon.add(Audit);

class Error extends Component {

  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);
    console.log('success constructed');

    // binding
    this.setLocation = this.setLocation.bind(this);

    // init
    const { cookies } = this.props;
    this.state = {
      home: {
        name: 'Guest',
        tableId: cookies.get("tableId")
      },
      dishTotal: cookies.get('dishTotal') || 0,
      cartTotal: cookies.get('cartTotal') || 0,
      cartItems: cookies.get('cartItems') || [],
    };
  }

  componentDidMount() {
  }

  render() {
    console.log('render success');

    return (
      <div>


      </div>
    );
  }

  setLocation(home) {
    const { cookies } = this.props;
    cookies.set("tableId", home.tableId);

    this.setState({
      home: home
    });
  }

}

export default
  withRouter(
    withCookies(Error)
  );
