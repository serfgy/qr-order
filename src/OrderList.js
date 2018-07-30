// React
import React, { Component } from 'react';
// React Router
import { Link } from "react-router-dom";
// Ant Design
import { Spin, Icon, Table } from 'antd-mobile';

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

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
      <div style={{ marginTop: '5px', marginBottom: '5px', padding: 0, background: '#ffffff' }}>
        Hello This is OrderList
      </div>
    );
  }

}

export default OrderList;