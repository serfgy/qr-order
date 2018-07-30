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
    this.addItem = this.addItem.bind(this);

    // init
    this.state = {
      loading: true,
      todos: []
    };
  }

  componentDidMount() {
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
            Content of second tab
          </div>
          <div style={{ backgroundColor: '#fff' }}>
            Content of third tab
          </div>
        </Tabs>
      </div>
    );
  }

  renderHotTab() {

    return (
      <div>
        <Flex
          key="1"
          style={{ margin: '0px', padding: '10px' }}>
          <Flex.Item
            style={{ flex: 1 }}>
            <img height={64} width={64} alt="logo" src="http://salemdigest.com/wp-content/uploads/2016/08/TITS_food1.jpg" />
          </Flex.Item>
          <Flex.Item
            style={{ flex: 3, textAlign: 'right' }}>
            <div>
              <div
                style={{ fontSize: '13px', color: 'black' }}>
                猪头肉
              </div>
              <div
                style={{ fontSize: '13px', color: 'red' }}>
                38元/份
              </div>
              <div
                style={{ fontSize: '13px', color: 'orange' }}>
                会员价18元
              </div>
            </div>
          </Flex.Item>
          <Flex.Item
            style={{ flex: 1, textAlign: 'center' }}>
            <AntdIcon style={{ marginTop: "5px" }} type={'plus'} color="#faad14" fontSize="20px" />
          </Flex.Item>
        </Flex>
        <Flex
          key="2"
          style={{ margin: '0px', padding: '10px' }}>
          <Flex.Item
            style={{ flex: 1 }}>
            <img height={64} width={64} alt="logo" src="https://sethlui.com/wp-content/uploads/2013/10/best-singapore-food-1024-3-2-800x963.jpg" />
          </Flex.Item>
          <Flex.Item
            style={{ flex: 3, textAlign: 'right' }}>
            <div>
              <div
                style={{ fontSize: '13px', color: 'black' }}>
                猪头肉
              </div>
              <div
                style={{ fontSize: '13px', color: 'red' }}>
                38元/份
              </div>
              <div
                style={{ fontSize: '13px', color: 'orange' }}>
                会员价18元
              </div>
            </div>
          </Flex.Item>
          <Flex.Item
            style={{ flex: 1, textAlign: 'center' }}>
            <AntdIcon type={'up'} color="#faad14" fontSize="15px" />
            <div style={{marginTop: "5px", marginBottom: "5px"}}>3 份</div>
            <AntdIcon type={'down'} color="#faad14" fontSize="15px" />
          </Flex.Item>
        </Flex>
      </div>
    );
  }

  addItem() {
    this.setState({
      modalVisible: true
    });
    console.log("item clicked");
  }

}

export default MenuList;