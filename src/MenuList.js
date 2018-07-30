// React
import React, { Component } from 'react';
// React Router
import { Link } from "react-router-dom";
// Ant Design
import { List, Tabs, Spin, Icon, IconText, Table } from 'antd-mobile';

const TabPane = Tabs.TabPane;

class MenuList extends Component {

  constructor(props) {
    super(props);
    console.log('MenuList constructed');

    // binding

    // init
    this.state = {
      loading: true,
      todos: []
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <div style={{ marginTop: '5px', marginBottom: '5px', padding: 0, background: '#ffffff' }}>
        <Tabs defaultActiveKey="hot">
          <TabPane
            key="hot"
            tab="人气">
            {this.renderHotTab()}
          </TabPane>
          <TabPane
            key="chef"
            tab="推荐">
            {/* {this.renderChefTab()} */}
          </TabPane>
          <TabPane
            key="new"
            tab="新">
            {/* {this.renderNewTab()} */}
          </TabPane>
        </Tabs>
      </div>
    );
  }

  renderHotTab() {
    // data should take from this.state
    const data = [
      {
        title: 'Ant Design Title 1',
      },
      {
        title: 'Ant Design Title 2',
      },
      {
        title: 'Ant Design Title 3',
      },
      {
        title: 'Ant Design Title 4',
      },
    ];

    const IconText = ({ type, text }) => (
      <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
      </span>
    );

    // use
    return (
      <List
        style={{ margin: '0px', paddingLeft: '15px', paddingRight: '15px' }}
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item
            key={item.title}
            style={{ margin: '0px', padding: '10px' }}
          >

              <img height={64} width={64} alt="logo" src="http://salemdigest.com/wp-content/uploads/2016/08/TITS_food1.jpg" />


              <div
                style={{ textAlign: 'right' }}>
                <div
                  style={{ fontSize: '13px', color: 'black' }}>
                  猪头肉
                </div>
                <div
                  style={{ fontSize: '11px', color: 'red' }}>
                  38元/份
                </div>
                <div
                  style={{ fontSize: '13px', color: 'orange' }}>
                  会员价18元
                </div>
              </div>

          </List.Item>
        )}
      />
    );
  }

}

export default MenuList;