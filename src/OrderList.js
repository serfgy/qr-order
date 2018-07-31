// React
import React, { Component } from 'react';
// React Router
import { Link } from "react-router-dom";
// Ant Design
import { Flex, Spin, Icon, Table } from 'antd-mobile';
// Images
import { Up, Down, Plus } from '@ant-design/icons/esm';
import AntdIcon from '@ant-design/icons-react/esm';

AntdIcon.add(Up, Down, Plus);

class OrderList extends Component {

  constructor(props) {
    super(props);
    console.log('OrderList constructed');

    // binding
    this.plusItem = this.plusItem.bind(this);
    this.minusItem = this.minusItem.bind(this);

    // init
    this.state = {
      loading: true,
      cartItems: this.props.cartItems,
    };
  }

  componentDidMount() {
  }

  render() {

    const cartItems = this.state.cartItems;

    return (
      <div style={{ background: 'white' }}>
        {
          cartItems.map((cartItem, index) =>
            <Flex
              key={index}
              style={{ margin: '0px', padding: '10px' }}>
              <Flex.Item
                style={{ flex: 1 }}>
                <img height={64} width={64} alt="logo" src={cartItem.imgSrc} />
              </Flex.Item>
              <Flex.Item
                style={{ flex: 3, textAlign: 'right' }}>
                <div>
                  <div
                    style={{ fontSize: '13px', color: 'black' }}>
                    {cartItem.name}
                  </div>
                  <div
                    style={{ fontSize: '13px', color: 'red' }}>
                    {cartItem.price}元/份
                  </div>
                  <div
                    style={{ fontSize: '13px', color: 'orange' }}>
                    {cartItem.promo}
                  </div>
                </div>
              </Flex.Item>

              <Flex.Item
                style={{ flex: 1, textAlign: 'center' }}>
                <AntdIcon type={'up'} color="#faad14" fontSize="15px" onClick={() => this.plusItem(cartItem)} />
                <div style={{ marginTop: "5px", marginBottom: "5px" }}>{cartItem.amount}份</div>
                <AntdIcon type={'down'} color="#faad14" fontSize="15px" onClick={() => this.minusItem(cartItem)} />
              </Flex.Item>

            </Flex>
          )
        }
      </div>
    );
  }

  plusItem(cartItem) {
    let cartItems = this.state.cartItems;
    const index = cartItems.findIndex(item => item.stkId === cartItem.stkId);
    cartItems[index].amount++;

    this.recalculate(cartItems);
  }

  minusItem(cartItem) {
    let cartItems = this.state.cartItems;
    const index = cartItems.findIndex(item => item.stkId === cartItem.stkId);

    if (cartItems[index].amount === 0) {
      // early return
      return;
    }

    cartItems[index].amount--;
    this.recalculate(cartItems);
  }

  recalculate(cartItems) {
    // update state
    this.setState({ cartItems: cartItems }, () => {
      console.log("recalculating cartItems", cartItems);
    });
    let dishTotal = 0;
    let cartTotal = 0;
    // calculate 
    for (let cartItem of cartItems) {
      dishTotal += cartItem.amount
      cartTotal += cartItem.amount * cartItem.price
    }
    // update parent state using props
    this.props.onCartChange(dishTotal, cartTotal, cartItems);
  }
}

export default OrderList;