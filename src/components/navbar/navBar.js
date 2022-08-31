import "./navBar.css"
import React, { Component } from 'react'
import { Row, Col, Image } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import ecozumLogo from './logoAsset/ecozumLogo.svg';

class navBar extends Component {
  render() {
    return (
      <Row className="navbar">
        <Col span={12}>
          <Image
            className="logo"
            width={120}
            height={41}
            src={ecozumLogo}
          />
        </Col>
        <Col className="rightBar" span={12}>
          
          <span className="userInfo"><UserOutlined className="navbar-icon" />Name Surname</span>

        </Col>
      </Row>
    )
  }
}

export default navBar;