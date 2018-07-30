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
import { Result, WhiteSpace, WingBlank, Flex, Icon } from 'antd-mobile';
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

    const myImg = src => <img src={src} className="spe am-icon am-icon-md" alt="" />;

    return (
      <div>
        <Result
          img={myImg('https://gw.alipayobjects.com/zos/rmsportal/pdFARIqkrKEGVVEwotFe.svg')}
          title="支付成功"
          message={<div>998.00元 <del>1098元</del></div>}
        />

        <WhiteSpace size="sm" />

        <WingBlank size="md">
          <MenuList
            serviceEntry={this.props.serviceEntry}
            home={this.state.home}
          />
        </WingBlank>

        <WhiteSpace size="sm" />

        <div style={{ background: "#ffd591", position: "fixed", bottom: "0px", left: "0px", width: "60%", height: "40px", textAlign: "center" }}>
          <p>13道菜，共<span style={{ color: "red" }}>250元</span></p>
        </div>
        <Link to={'/cart/1'}>
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

}

export default
  withRouter(
    withCookies(Main)
  );
