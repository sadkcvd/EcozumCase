import "./paymentCart.css";
import React from 'react'
import { Card, Row, Col, Button } from 'antd';
function paymentCart() {
  return (
    <div>
      <Card className='cartInfo'>
        <Row className="cartMainRow">
          <Row>
            <span className="cartInPackage">Sepetteki Paketler</span>
          </Row>
          <Row className="packageInfo">
            <Col>
              {/* {packages.name} */}Paket Adı
            </Col>
            <Col>
              {/* {packages.amount}{packages.currency} */}500₺
            </Col>
          </Row>
          <Row className="btnRow">
            <Button className="makePriceBtn">
              Ödeme Yap
            </Button>
          </Row>
        </Row>



      </Card>
    </div>
  )
}

export default paymentCart