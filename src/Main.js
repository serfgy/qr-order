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
import { Flex, Whitespace, Menu, Icon } from 'antd-mobile';
// Components
import MenuList from './MenuList';
import OrderList from './OrderList';

class Main extends Component {

  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);
    console.log('main constructed');

    // binding
    this.setLocation = this.setLocation.bind(this);

    // init
    const { cookies } = this.props;
    this.state = {
      home: {
        tableId: cookies.get("tableId")
      },
      appNodes: [],
      loading: true,
      collapsed: false
    };
  }

  componentDidMount() {
    if (this.state.home.userRecKey) {
      return;
    }
  }

  render() {
    console.log('render main');

    return (
      <Flex>
        <Flex.Item>
          <MenuList
            serviceEntry={this.props.serviceEntry}
            home={this.state.home}
          />
        </Flex.Item>
        <Flex.Item>
          <OrderList
            serviceEntry={this.props.serviceEntry}
            home={this.state.home}
          />
        </Flex.Item>
      </Flex>
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
    withCookies(Main)
  );
