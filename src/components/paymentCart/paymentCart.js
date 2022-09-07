import "./paymentCart.css";
import React from 'react'
import { Card, Row, Col, Button } from 'antd';
// import {useSelector} from 'react-redux'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

function PaymentCart(props) {

  // const renderEmpty = () => {
  //   <div>
  //     <Row>Cart is Empty</Row>
  //   </div>
  // }
  // const renderSummary = () => {

  //   <div>
  //     <Col>
  //       Paket Adı 1
  //     </Col>
  //     <Col>
  //       500TL
  //     </Col>
  //   </div>
  // }

  return (
    <div>
      <Card className='cartInfo'>
        <Row>
          <span className="cartInPackage">Sepetteki Paketler</span>
        </Row>
        {props.cartList.map(cartItem => (
          <Row key={cartItem.packages.id} className="packageInfo">
            <Col>
              {cartItem.packages.name}
            </Col>
            <Col className="package-Name-Price">
            {cartItem.packages.amount}{cartItem.packages.currency}
            </Col>
            {/* {
              props.cartList.length > 0 ? renderSummary() : renderEmpty()
            } */}
          </Row>
        ))}
        <Row className="btnRow">
          <Button className="makePriceBtn">
            <Link to="/successcomp">Ödeme Yap</Link>
          </Button>
        </Row>
      </Card>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    cartList: state.cartReducer,
    // totalPrice : state.cartReducer.totalPrice,
  };
};

export default connect(mapStateToProps)(PaymentCart);