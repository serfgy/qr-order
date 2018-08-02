// React
import React, { Component } from 'react';
// React Router
import { Link } from "react-router-dom";
// Ant Design
import { Tabs, Flex, Badge, Icon } from 'antd-mobile';
// Images
import { Up, Down, Plus } from '@ant-design/icons/esm';
import AntdIcon from '@ant-design/icons-react/esm';

AntdIcon.add(Up, Down, Plus);

class MenuList extends Component {

  constructor(props) {
    super(props);
    console.log('MenuList constructed');

    // binding
    this.addItem = this.addItem.bind(this);
    this.plusItem = this.plusItem.bind(this);
    this.minusItem = this.minusItem.bind(this);

    // init
    this.state = {
      loading: true,
      menuItems: [],
      cartItems: this.props.cartItems,
    };

  }

  componentDidMount() {
    const menuItems = [
      {
        "name": "肉骨茶",
        "stkId": "0001",
        "amount": 0,
        "price": 38,
        "imgSrc": "http://salemdigest.com/wp-content/uploads/2016/08/TITS_food1.jpg",
        "promo": "国庆节大甩卖"
      },
      {
        "name": "满星大包",
        "stkId": "0002",
        "amount": 0,
        "price": 18,
        "imgSrc": "https://sethlui.com/wp-content/uploads/2013/10/best-singapore-food-1024-3-2-800x963.jpg",
        "promo": "抢购"
      },
      {
        "name": "咸菜肉丝",
        "stkId": "0003",
        "amount": 0,
        "price": 28,
        "imgSrc": "https://foodinloveid.files.wordpress.com/2016/07/img_3273.jpg?w=474",
        "promo": "促销"
      }
    ];
    this.setState({
      menuItems: menuItems
    });
  }

  render() {
    const tabs = [
      { title: "人气" },
      { title: "推荐" },
      { title: "新" },
    ];

    return (
      <div>
        <Tabs tabs={tabs}
          initialPage={0}
          tabBarActiveTextColor="#fa8c16"
          tabBarInActiveTextColor="#ffa940"
          tabBarUnderlineStyle={{ borderBottomColor: "#ffa940", borderTopColor: "#ffa940", borderLeftColor: "#ffa940", borderRightColor: "#ffa940" }}
          onChange={(tab, index) => { console.log('onChange', index, tab); }}
          onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}>
          <div style={{ padding: "0px", margin: "0px", backgroundColor: '#fff' }}>
            {this.renderHotTab()}
          </div>
          <div style={{ backgroundColor: '#fff' }}>

          </div>
          <div style={{ backgroundColor: '#fff' }}>

          </div>
        </Tabs>
      </div>
    );
  }

  renderHotTab() {

    const menuItems = this.state.menuItems;
    const cartItems = this.state.cartItems;

    return (
      <div>
        {
          menuItems.map((menuItem, index) =>
            <Flex
              key={index}
              style={{ margin: '0px', padding: '10px' }}>
              <Flex.Item
                style={{ flex: 1 }}>
                <img height={64} width={64} alt="logo" src={menuItem.imgSrc} />
              </Flex.Item>
              <Flex.Item
                style={{ flex: 3, textAlign: 'right' }}>
                <div>
                  <div
                    style={{ fontSize: '13px', color: 'black' }}>
                    {menuItem.name}
                  </div>
                  <div
                    style={{ fontSize: '13px', color: 'red' }}>
                    {menuItem.price}元/份
                  </div>
                  <div
                    style={{ fontSize: '13px', color: 'orange' }}>
                    {menuItem.promo}
                  </div>
                </div>
              </Flex.Item>
              {
                !cartItems.find(cartItem => cartItem.stkId === menuItem.stkId)
                  ?
                  <Flex.Item
                    style={{ flex: 1, textAlign: 'center' }}>
                    <AntdIcon style={{ marginTop: "5px" }} type={'plus'} color="#faad14" fontSize="20px" onClick={() => this.addItem(menuItem)} />
                  </Flex.Item>
                  :
                  <Flex.Item
                    style={{ flex: 1, textAlign: 'center' }}>
                    <AntdIcon type={'up'} color="#faad14" fontSize="15px" onClick={() => this.plusItem(menuItem)} />
                    <div style={{ marginTop: "5px", marginBottom: "5px" }}>{cartItems.find(cartItem => cartItem.stkId === menuItem.stkId).amount}份</div>
                    <AntdIcon type={'down'} color="#faad14" fontSize="15px" onClick={() => this.minusItem(menuItem)} />
                  </Flex.Item>
              }
            </Flex>
          )
        }
      </div>
    );
  }

  addItem(menuItem) {
    let cartItems = this.state.cartItems;
    const index = cartItems.findIndex(cartItem => cartItem.stkId === menuItem.stkId);

    if (index < 0) {
      menuItem.amount = 1;
      cartItems.push(menuItem);
    } else {
      cartItems[index].amount++;
    }

    this.recalculate(cartItems);
  }

  plusItem(menuItem) {
    let cartItems = this.state.cartItems;
    const index = cartItems.findIndex(cartItem => cartItem.stkId === menuItem.stkId);
    cartItems[index].amount++;

    this.recalculate(cartItems);
  }

  minusItem(menuItem) {
    let cartItems = this.state.cartItems;
    const index = cartItems.findIndex(cartItem => cartItem.stkId === menuItem.stkId);
    cartItems[index].amount--;

    if (cartItems[index].amount === 0) {
      cartItems.splice(index, 1);
    }

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

export default MenuList;