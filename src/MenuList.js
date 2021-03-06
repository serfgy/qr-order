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
      menuItems2: [],
      menuItems3: [],
      cartItems: this.props.cartItems,
    };

  }

  componentDidMount() {
    const menuItems = [
      {
        "name": "满星大包",
        "stkId": "0001",
        "amount": 0,
        "price": 38,
        "imgSrc": "http://salemdigest.com/wp-content/uploads/2016/08/TITS_food1.jpg",
        "promo": "国庆节大甩卖"
      },
      {
        "name": "咸菜肉丝",
        "stkId": "0002",
        "amount": 0,
        "price": 18,
        "imgSrc": "https://sethlui.com/wp-content/uploads/2013/10/best-singapore-food-1024-3-2-800x963.jpg",
        "promo": "抢购"
      },
      {
        "name": "肉骨茶",
        "stkId": "0003",
        "amount": 0,
        "price": 28,
        "imgSrc": "https://foodinloveid.files.wordpress.com/2016/07/img_3273.jpg?w=474",
        "promo": "促销"
      }
    ];
    const menuItems2 = [
      {
        "name": "三文鱼",
        "stkId": "0004",
        "amount": 0,
        "price": 88,
        "imgSrc": "https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "promo": "新鲜"
      },
      {
        "name": "水果萨拉",
        "stkId": "0005",
        "amount": 0,
        "price": 48,
        "imgSrc": "https://images.pexels.com/photos/247685/pexels-photo-247685.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "promo": "爽口"
      },
      {
        "name": "黑森林",
        "stkId": "0006",
        "amount": 0,
        "price": 38,
        "imgSrc": "https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "promo": "本店特色"
      }
    ];
    const menuItems3 = [
      {
        "name": "卤鸭",
        "stkId": "0007",
        "amount": 0,
        "price": 48,
        "imgSrc": "http://thesmartlocal.com/images/easyblog_images/2163/b2ap3_thumbnail_image05_20150312-053034_1.jpg",
        "promo": ""
      },
      {
        "name": "炸鸡腿",
        "stkId": "0008",
        "amount": 0,
        "price": 48,
        "imgSrc": "http://danielfooddiary.com/wp-content/uploads/2016/01/jollibee1.jpg",
        "promo": ""
      },
      {
        "name": "中式便当",
        "stkId": "0009",
        "amount": 0,
        "price": 48,
        "imgSrc": "http://www.shenlipackaging.com/uploadfile/1523249040.jpg",
        "promo": "赞！"
      }
    ];
    this.setState({
      menuItems: menuItems,
      menuItems2: menuItems2,
      menuItems3: menuItems3
    });
  }

  render() {
    const tabs = [
      { title: "人气" },
      { title: "推荐" },
      { title: "新" },
    ];

    return (
      <div
        style={{ color: '#8c8c8c' }}>
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
            {this.renderChefTab()}
          </div>
          <div style={{ backgroundColor: '#fff' }}>
            {this.renderNewTab()}
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
          menuItems.map((menuItem) =>
            <Flex
              key={menuItem.stkId}
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

  renderChefTab() {

    const menuItems = this.state.menuItems2;
    const cartItems = this.state.cartItems;

    return (
      <div>
        {
          menuItems.map((menuItem) =>
            <Flex
              key={menuItem.stkId}
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

  renderNewTab() {

    const menuItems = this.state.menuItems3;
    const cartItems = this.state.cartItems;

    return (
      <div>
        {
          menuItems.map((menuItem) =>
            <Flex
              key={menuItem.stkId}
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