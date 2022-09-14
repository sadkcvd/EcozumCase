import React from 'react';
import "./successScreen.css";
import { Card, Row } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';

function SuccesScreen() {
  return (
    <div>
      <Row className='allBody'>
        <Card className='successCard'>
          <Row className='row-icon'>
          <CheckCircleOutlined className="success-icon" />
          </Row>         
          <Row>
          <p className='succesText'>Başarıyla Tamamlandı !</p>
          </Row>
        
        </Card>
      </Row>
    </div>
  )
}

export default SuccesScreen