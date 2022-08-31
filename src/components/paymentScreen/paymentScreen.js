import React from 'react'
import { Card, Input, Row, Col, Form } from 'antd';
import "./paymentScreen.css";

const paymentScreen = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    return (
        <div>
            <Row className='cardBodys'>
                <Col>
                    <Card className='cardInfo'>
                        <Form
                            name="payment"
                            className="payment-form"
                            layout='vertical'
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                        >

                            <Row className='cardInfoText'>
                                <span>Kart Bilgileri</span>
                            </Row>

                            <Row className='tableCard'>

                                <Col className='cardInputsCol'>

                                    <Form.Item className='form-text' label="Kart Üzerindeki İsim Soyisim"  >
                                        <Form.Item
                                            name="name-surname"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your Name and Surname!',
                                                },
                                            ]}
                                        >
                                            <Input className="input-info" type="text" />
                                        </Form.Item>
                                    </Form.Item>
                                    <Row>
                                        <Form.Item className='formıtemInput' label="Kart Numarası"  >
                                            <Form.Item
                                                name="card-number"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please input your Card Number!',
                                                    },
                                                ]}
                                            >
                                                <Input className="input-info" type="text" />
                                            </Form.Item>
                                        </Form.Item>

                                        <Form.Item className='formıtemInput' label="Son Kul.Tar."  >
                                            <Form.Item
                                                name="card-expiration-date"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please input Expiration Date!',
                                                    },
                                                ]}
                                            >
                                                <Input className="expiration-date-info" type="text" />
                                            </Form.Item>
                                        </Form.Item>

                                        <Form.Item className='formıtemInput' label="CVV/CVC"  >
                                            <Form.Item
                                                name="card-cvv-cvc"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please input Card CVV/CVC!',
                                                    },
                                                ]}
                                            >
                                                <Input className="card-date-cvv-info" type="text" />
                                            </Form.Item>
                                        </Form.Item>
                                    </Row>
                                </Col>
                            </Row>
                        
                        {/* SÖZLEŞME */}
                        <Form.Item className='agreement-form' label="Sözleşme"  >
                            <Form.Item
                                name="agreement"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Agreement !',
                                    },
                                ]}
                            >
                                <Input className="textareaInput" type="text" />
                            </Form.Item>
                        </Form.Item>
                        </Form>

                    </Card>
                </Col>
                {/* SEPET */}
                <Col>
                    <Card className='cartInfo'>

                    </Card>
                </Col>
            </Row>

        </div>
    )
}

export default paymentScreen;