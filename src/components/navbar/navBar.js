import "./navBar.css"
import React from 'react'
import { Row, Col, Image } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import ecozumLogo from './logoAsset/ecozumLogo.svg';
import { connect } from 'react-redux';
import { startLogin } from "../../redux/actions/loginActions";

function NavBar(props) {

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
        <span className="userInfo"><UserOutlined className="navbar-icon" />{props.fullName}</span>
      </Col>
    </Row>
  )
}

function mapStateToProps(state) {
  return {
    loggedIn: state.loginReducer.loggedIn,
    fullName: state.loginReducer.fullName,
  };
};

export default connect(mapStateToProps, { startLogin })(NavBar);