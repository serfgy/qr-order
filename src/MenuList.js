// React
import React, { Component } from 'react';
// React Router
import { Link } from "react-router-dom";
// Ant Design
import { Button, WhiteSpace, Tabs, Flex, Badge, Icon } from 'antd-mobile';
// Images
import { Up, Down, Plus } from '@ant-design/icons/esm';
import AntdIcon from '@ant-design/icons-react/esm';

AntdIcon.add(Up, Down, Plus);

class MenuList extends Component {

  constructor(props) {
    super(props);
    console.log('MenuList constructed');

    // binding
    this.plusItem = this.plusItem.bind(this);
    this.minusItem = this.minusItem.bind(this);

    // init
    this.state = {
      loading: true,
      menuItems: []
    };
  }

  componentDidMount() {
    const menuItems = [
      {
        "name": "肉骨茶",
        "amount": 0,
        "price": 38,
        "imgSrc": "http://salemdigest.com/wp-content/uploads/2016/08/TITS_food1.jpg",
        "promo": "国庆节大甩卖"
      },
      {
        "name": "满星大包",
        "amount": 0,
        "price": 18,
        "imgSrc": "https://sethlui.com/wp-content/uploads/2013/10/best-singapore-food-1024-3-2-800x963.jpg",
        "promo": "抢购"
      },
      {
        "name": "咸菜肉丝",
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
                menuItem.amount === 0
                  ?
                  <Flex.Item
                    style={{ flex: 1, textAlign: 'center' }}>
                    <AntdIcon style={{ marginTop: "5px" }} type={'plus'} color="#faad14" fontSize="20px" onClick={this.plusItem(index)}/>
                  </Flex.Item>
                  : 
                  <Flex.Item
                    style={{ flex: 1, textAlign: 'center' }}>
                    <AntdIcon type={'up'} color="#faad14" fontSize="15px" onClick={this.plusItem(index)}/>
                    <div style={{ marginTop: "5px", marginBottom: "5px" }}>{menuItem.amount}份</div>
                    <AntdIcon type={'down'} color="#faad14" fontSize="15px" onClick={this.minusItem(index)} />
                  </Flex.Item>
              }
            </Flex>
          )
        }
      </div>
    );
  }

  plusItem(index) {
    const menuItems = this.state.menuItems;
    menuItems[index].amount += 1;

    // update state
    this.setState({
        menuItems,
    });
  }

  minusItem(index) {
    const menuItems = this.state.menuItems;
    menuItems[index].amount -= 1;

    // update state
    this.setState({
        menuItems,
    });
  }

}

export default MenuList;