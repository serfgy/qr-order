// React
import React, { Component } from 'react';
// React Router
import { Route, Link, Redirect } from "react-router-dom";
import { withRouter } from 'react-router';
// React Cookie
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

    // init
    const { cookies } = this.props;
    this.state = {
      name: cookies.get('name') || '',
      tableId: cookies.get('tableId') || '',
      dishTotal: cookies.get('dishTotal') || 0,
      cartTotal: cookies.get('cartTotal') || 0,
      cartItems: cookies.get('cartItems') || [],
    };
  }

  componentDidMount() {
  }

  render() {
    console.log('render success');

    const pageStyle = {
      height: '100vh',
      width: '100vw',
      background: '#69c0ff'
    };

    return (
      <div
        style={pageStyle}>

      </div>
    );
  }

}

export default
  withRouter(
    withCookies(Error)
  );
