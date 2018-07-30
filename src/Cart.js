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
// Components
import OrderList from './OrderList';
// Images
import { Shopping } from '@ant-design/icons/esm';
import AntdIcon from '@ant-design/icons-react/esm';

AntdIcon.add(Shopping);

class Cart extends Component {

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
  }

  render() {
    console.log('render main');

    return (
      <div>
        <WhiteSpace size="sm" />

        <WingBlank size="md">
          <OrderList
            serviceEntry={this.props.serviceEntry}
            home={this.state.home}
          />
        </WingBlank>

        <WhiteSpace size="sm" />

        <div style={{ background: "#ffd591", position: "fixed", bottom: "0px", left: "0px", width: "60%", height: "40px", textAlign: "center" }}>
          <p>13道菜，共<span style={{ color: "red" }}>250元</span></p>
        </div>
        <Link to={'/table/1'}>
          <div style={{ background: "#ffc069", position: "fixed", bottom: "0px", right: "0px", width: "40%", height: "40px", textAlign: "center" }}>
            <AntdIcon style={{ marginTop: "3px" }} type={'shopping'} color="white" fontSize="20px" />
            <div style={{ fontSize: "10px", color: "white", marginTop: "-2px" }}>继续点菜</div>
          </div>
        </Link>
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
    withCookies(Cart)
  );
