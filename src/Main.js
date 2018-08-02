import { version } from '../package.json';
// React
import React, { Component } from 'react';
// React Router
import { Route, Link, Redirect } from "react-router-dom";
import { withRouter } from 'react-router';
// React Cookie
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
// Ant Design Mobile
import { Carousel, WhiteSpace, WingBlank, Flex, Icon } from 'antd-mobile';
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
    this.handleCartChange = this.handleCartChange.bind(this);
    this.handleCartClicked = this.handleCartClicked.bind(this);

    // init
    const { cookies } = this.props;
    this.state = {
      name: cookies.get('name') || '尊贵顾客',
      tableId: cookies.get('tableId') || '',
      dishTotal: cookies.get('dishTotal') || 0,
      cartTotal: cookies.get('cartTotal') || 0,
      cartItems: cookies.get('cartItems') || [],
      data: ['1', '2', '3'],
      imgHeight: 176,
    };
    console.log('main received name and table', this.state.name, this.state.tableId);
  }

  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }

  render() {
    console.log('render main');

    const name = this.state.name;
    const tableId = this.state.tableId;
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
            <span style={{ fontSize: "30px", color: "#fa541c" }}>{name}</span>，您的桌号是<span style={{ fontSize: "30px", color: "#fa541c" }}>#</span><span style={{ fontSize: "40px", color: "#fa541c" }}>{tableId}</span>
          </div>
        </div>

        <WhiteSpace size="sm" />

        <WingBlank>
          <Carousel
            style={{ padding: '16px', background: '#DEF1E5', overflow: 'hidden' }}
            frameOverflow="visible"
            cellSpacing={10}
            slideWidth={0.8}
            autoplay
            infinite
            beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
            afterChange={index => this.setState({ slideIndex: index })}
          >
            {this.state.data.map((val, index) => (
              <a
                key={val}
                href="http://www.alipay.com"
                style={{
                  display: 'block',
                  position: 'relative',
                  top: this.state.slideIndex === index ? -10 : 0,
                  height: this.state.imgHeight,
                  boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                }}
              >
                <img
                  src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top' }}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
                />
              </a>
            ))}
          </Carousel>
        </WingBlank>

        <WingBlank size="md">
          <MenuList
            serviceEntry={this.props.serviceEntry}
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
          to={'/cart/' + tableId}>
          <div style={{ background: "#fa541c", position: "fixed", bottom: "0px", right: "0px", width: "40%", height: "40px", textAlign: "center" }}>
            <AntdIcon style={{ marginTop: "3px" }} type={'audit'} color="white" fontSize="20px" />
            <div style={{ fontSize: "10px", color: "white", marginTop: "-2px" }}>查看点单</div>
          </div>
        </Link>

      </div>
    );
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
  }

}

export default
  withRouter(
    withCookies(Main)
  );
