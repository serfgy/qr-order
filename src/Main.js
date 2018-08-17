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
import MenuList2 from './MenuList2';
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
      carousel: ['carousel1.jpg', 'carousel1.jpg', 'carousel1.jpg', 'carousel1.jpg', 'carousel1.jpg'],
      carouselHeight: 200,
    };
    console.log('main received name and table', this.state.name, this.state.tableId);
  }

  componentDidMount() {
    // fetch data for carousel
    // simulate img loading
    setTimeout(() => {
      this.setState({
        carousel: ['carousel1.jpg', 'carousel2.jpg', 'carousel3.jpg', 'carousel4.jpg', 'carousel5.jpg'],
      });
    }, 100);
  }

  render() {
    console.log('render main');
    const headerStyle = {
      height: '30px',
      padding: '3px',
      marginRight: '5px',
      fontSize: '12px',
      color: '#bfbfbf',
      textAlign: 'right'
    };

    const { name, tableId,
      dishTotal, cartTotal, cartItems,
      carousel, carouselHeight } = this.state;

    return (
      <div>
        <div
          style={headerStyle}>
          <div style={{ color: '#8c8c8c' }}>
            {name}
          </div>
          <div>
            {tableId} 号桌
          </div>
        </div>

        <Carousel
          autoplay
          autoplayInterval={2000}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {carousel.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: carouselHeight }}
            >
              <img
                src={require('./img/' + val)}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ carouselHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>

        <WingBlank
          style={{ marginTop: '8px' }}
          size="md">
          <MenuList
            serviceEntry={this.props.serviceEntry}
            onCartChange={this.handleCartChange}
            cartItems={cartItems}
          />
        </WingBlank>

        <WhiteSpace size="sm" />

        <WingBlank
          style={{ marginTop: '8px' }}
          size="md">
          <MenuList2
            serviceEntry={this.props.serviceEntry}
            onCartChange={this.handleCartChange}
            cartItems={cartItems}
          />
        </WingBlank>

        <div style={{ height: '80px' }}></div>

        <div style={{ zIndex: 1, background: "#ffd591", position: "fixed", bottom: "0px", left: "0px", width: "60%", height: "40px", textAlign: "center" }}>
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
