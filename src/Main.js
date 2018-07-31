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
import MenuList from './MenuList';
// Images
import { Audit } from '@ant-design/icons/esm';
import AntdIcon from '@ant-design/icons-react/esm';

AntdIcon.add(Audit);

class Main extends Component {

  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);
    console.log('main constructed');

    // binding
    this.setLocation = this.setLocation.bind(this);
    this.handleCartChange = this.handleCartChange.bind(this);
    this.handleCartClicked = this.handleCartClicked.bind(this);

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
    console.log('render main');

    const tableId = this.props.match.params.tableId;
    const dishTotal = this.state.dishTotal;
    const cartTotal = this.state.cartTotal;
    const cartItems = this.state.cartItems;

    return (
      <div>
        <div
          style={{ color: "#ff7875", background: "white", borderBottomColor: "rgb(221, 221, 221)", borderBottomWidth: "1px", borderBottomStyle: "solid" }}>
          <div
            style={{ padding: "20px", fontSize: "20px", textAlign: "left" }}>
            福星<span style={{ fontSize: "40px", color: "#fa541c" }}>欢迎</span>您
          </div>
          <div
            style={{ padding: "20px", fontSize: "20px", textAlign: "right" }}>
            您的桌号是<span style={{ fontSize: "30px", color: "#fa541c" }}>#</span><span style={{ fontSize: "40px", color: "#fa541c" }}>{tableId}</span>
          </div>
        </div>

        <WhiteSpace size="sm" />

        <WingBlank size="md">
          <MenuList
            serviceEntry={this.props.serviceEntry}
            home={this.state.home}
            onCartChange={this.handleCartChange}
            cartItems={cartItems}
          />
        </WingBlank>

        <WhiteSpace size="sm" />

        <div style={{ height: '80px' }}></div>

        <div style={{ background: "#ffd591", position: "fixed", bottom: "0px", left: "0px", width: "60%", height: "40px", textAlign: "center" }}>
          <p>{dishTotal}道菜，共<span style={{ color: "red" }}>{cartTotal}元</span></p>
        </div>

        <Link
          onClick={this.handleCartClicked}
          to={'/cart/1'}>
          <div style={{ background: "#fa541c", position: "fixed", bottom: "0px", right: "0px", width: "40%", height: "40px", textAlign: "center" }}>
            <AntdIcon style={{ marginTop: "3px" }} type={'audit'} color="white" fontSize="20px" />
            <div style={{ fontSize: "10px", color: "white", marginTop: "-2px" }}>查看点单</div>
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

  handleCartChange(dishTotal, cartTotal, cartItems) {
    this.setState(
      {
        dishTotal,
        cartTotal,
        cartItems
      }, () => {
        console.log("dishTotal", dishTotal);
        console.log("cartTotal", cartTotal);
        console.log("cartItems", cartItems);
      }
    );
  }

  handleCartClicked() {
    const { cookies } = this.props;
    cookies.set('dishTotal', this.state.dishTotal, { path: '/' });
    cookies.set('cartTotal', this.state.cartTotal, { path: '/' });
    cookies.set('cartItems', this.state.cartItems, { path: '/' });
    console.log('fuckingcokkie',cookies.get('cartItems'))
  }

}

export default
  withRouter(
    withCookies(Main)
  );
