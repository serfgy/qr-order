// React
import React, { Component } from 'react';
// React Router
import { withRouter } from 'react-router';
// React Cookie
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
// React Moment
import Moment from 'react-moment';
import 'moment/locale/zh-cn';
// Ant Design Mobile
import { WingBlank } from 'antd-mobile';
// Images
import { Audit } from '@ant-design/icons/esm';
import AntdIcon from '@ant-design/icons-react/esm';


AntdIcon.add(Audit);

class Reception extends Component {

  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);
    console.log('reception constructed');

    // binding
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleStartClicked = this.handleStartClicked.bind(this);

    // init
    const { cookies } = this.props;
    this.state = {
      name: cookies.get('name') || '',
      // only reception takes tableId from match
      tableId: this.props.match.params.tableId,
      dishTotal: cookies.get('dishTotal') || 0,
      cartTotal: cookies.get('cartTotal') || 0,
      cartItems: cookies.get('cartItems') || [],
      animateInput: false,
    };
    console.log('table is',this.state.tableId);
  }

  componentDidMount() {
  }

  render() {
    console.log('render reception');
    console.log('table is',this.state.tableId);
    const pageStyle = {
      height: '100vh',
      width: '100vw',
      background: 'linear-gradient(141deg, #f5222d 0%, #ff4d4f 51%, #ff7a45 75%)',
      opacity: '0.95',
      color: '#fff1f0',
      overflow: 'hidden'
    };

    const buttonStyle = {
      background: '#f5222d',
      marginTop: '40px',
      height: '50px',
      lineHeight: '50px',
      textAlign: 'center',
      letterSpacing: '8px',
      fontSize: '16px',
      color: 'white'
    };

    const inputStyle = {
      background: 'rgba(255,255,255, 0.15)',
      margin: 'auto',
      marginTop: '0px',
      height: '50px',
      width: '70%',
      lineHeight: '50px',
      textAlign: 'center',
      fontSize: '16px',
      color: 'white',
      border: 'none',
      display: 'block'
    };

    const { tableId } = this.props.match.params;
    const { name, animateInput } = this.state;
    const dateToFormat = new Date();
    // console.log('animating?', this.state.animateInput);

    return (
      <div
        style={pageStyle}>
        <WingBlank>
          <div
            style={{ fontSize: '15px', paddingTop: '60px', height: '40vh', textAlign: 'right' }}>

            <div
              style={{ marginTop: '20px' }}>
              你所在的位置是
            </div>
            <div
              style={{ marginTop: '10px' }}>
              <span style={{ fontSize: '30px' }}>{tableId}</span>号桌
            </div>
            <div
              style={{ marginTop: '20px', fontSize: '15px' }}>
              本桌最近一次成交点单是
            </div>
            <div
              style={{ marginTop: '10px', fontSize: '15px' }}>
              <Moment
                format='lll'
                date={dateToFormat} />
            </div>
          </div>
          <div
            style={{ marginTop: '0px', fontSize: '15px', width: '100%' }}>
            <div
              style={{ textAlign: 'center', marginBottom: '10px', fontSize: '10px' }}>
              输入简称开始点单
            </div>
            <input
              onAnimationEnd={() => this.setState({ animateInput: false })}
              style={inputStyle}
              className={animateInput ? 'animateReceptionNameInput' : ''}
              name='newName'
              type='text'
              value={name}
              onChange={this.handleNameChange}
            />
          </div>
          <div
            style={buttonStyle}
            onClick={this.handleStartClicked}>
            开始
          </div>
          <div
            className='animateReceptionTablemates'
            style={{ textAlign: 'right', fontStyle: 'italic', marginTop: '10px', fontSize: '10px' }}>
            你的桌友 <span style={{ fontSize: '15px' }}>Kevin</span> 已在点购中 。。。
          </div>
        </WingBlank>
      </div>
    );
  }

  handleNameChange(e) {

    if (e.target.value.length === 0) {
      this.setState({ name: e.target.value }, () => {
        console.log("name change", this.state.name);
      });
    } else {
      this.setState({ name: e.target.value }, () => {
        console.log("name change", this.state.name);
      });
    }
  }

  handleStartClicked() {
    const { cookies } = this.props;

    if (this.state.name === '') {
      console.log("empty name, initiate animation");
      this.setState({ animateInput: true }, () => {
        console.log("animating?", this.state.animateInput);
      });
    } else {
      console.log("from reception to main");
      cookies.set('name', this.state.name);
      cookies.set('tableId', this.state.tableId);
      console.log('table is',this.state.tableId);
      this.props.history.push('/main/' + this.state.tableId);
    }
  }

}

export default
  withRouter(
    withCookies(Reception)
  );
