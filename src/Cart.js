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
import { Shopping, FileDone } from '@ant-design/icons/esm';
import AntdIcon from '@ant-design/icons-react/esm';

AntdIcon.add(Shopping, FileDone);

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
        <div
          style={{ color: "#ff7875", background: "white", borderBottomColor: "rgb(221, 221, 221)", borderBottomWidth: "1px", borderBottomStyle: "solid" }}>
          <div
            style={{ padding: "20px", fontSize: "20px", textAlign: "left" }}>
            您点了<span style={{ fontSize: "40px", color: "#fa541c" }}>8</span>道菜
          </div>
          <div
            style={{ padding: "20px", fontSize: "20px", textAlign: "right" }}>
            总计<span style={{ fontSize: "40px", color: "#fa541c" }}>68</span><span style={{ fontSize: "30px", color: "#fa541c" }}>元</span>
          </div>
        </div>

        <WhiteSpace size="sm" />

        <WingBlank size="md">
          <OrderList
            serviceEntry={this.props.serviceEntry}
            home={this.state.home}
          />
        </WingBlank>

        <WhiteSpace size="sm" />

        <Link to={'/table/1'}>
          <div style={{ background: "#73d13d", position: "fixed", bottom: "40px", width: "100%", height: "40px", textAlign: "center" }}>
            <AntdIcon style={{ marginTop: "3px" }} type={'file-done'} color="white" fontSize="20px" />
            <div style={{ fontSize: "10px", color: "white", marginTop: "-2px" }}>成交点单</div>
          </div>
        </Link>
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
