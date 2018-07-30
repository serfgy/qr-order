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
      <div style={{ background: "white" }}>
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
                活动日
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
                促销
            </div>
            </div>
          </Flex.Item>
          <Flex.Item
            style={{ flex: 1, textAlign: 'center' }}>
            <AntdIcon type={'up'} color="#faad14" fontSize="15px" />
            <div style={{ marginTop: "5px", marginBottom: "5px" }}>3 份</div>
            <AntdIcon type={'down'} color="#faad14" fontSize="15px" />
          </Flex.Item>
        </Flex>
        <Flex
          key="3"
          style={{ margin: '0px', padding: '10px' }}>
          <Flex.Item
            style={{ flex: 1 }}>
            <img height={64} width={64} alt="logo" src="https://foodinloveid.files.wordpress.com/2016/07/img_3273.jpg?w=474" />
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
                促销
            </div>
            </div>
          </Flex.Item>
          <Flex.Item
            style={{ flex: 1, textAlign: 'center' }}>
            <AntdIcon type={'up'} color="#faad14" fontSize="15px" />
            <div style={{ marginTop: "5px", marginBottom: "5px" }}>3 份</div>
            <AntdIcon type={'down'} color="#faad14" fontSize="15px" />
          </Flex.Item>
        </Flex>
      </div>
    );
  }

}

export default OrderList;