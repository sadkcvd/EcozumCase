import React from 'react'
// import axios from 'axios';
import Cleave from "cleave.js/react";
import { Card, Input, Row, Col, Form } from 'antd';
import PaymentCart from "../paymentCart/paymentCart"
import "./paymentScreen.css";

const PaymentScreen = () => {

    // const [agreementForm, setAgreementForm] = useState("Lorem ipsum dolor sit amet");
    // useEffect(() => {
    //     axios.get("https://62f9ee323c4f110faa8ed350.mockapi.io/api/payment")
    //         .then(res => {
    //             setAgreementForm(res.content);
    //             console.log(setAgreementForm(res.content))
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    // }, [])
    const agreementForm = decodeURIComponent(`{"content":"%3Cp%3E%C3%96deme%20s%C3%B6zle%C5%9Fmesi.%3C%2Fp%3E"}`);

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
                                                    message: 'Please input your Name and Surname',
                                                },
                                            ]}>
                                                <Cleave className="input-info" 
                                                options={{blocks: [24] }}/>
                                            {/* <Input className="input-info" type="text" /> */}
                                        </Form.Item>
                                    </Form.Item>
                                    <Row>
                                        <Form.Item className='formıtemInput' label="Kart Numarası"  >
                                            <Form.Item
                                                name="card-number"
                                                
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please input your Card Number',
                                                    },
                                                ]}>
                                                <Cleave
                                                    className="input-info"
                                                    
                                                    options={{ delimiter: '-', blocks: [4, 4, 4, 4], numericOnly: true }}
                                                />
                                                {/* <Input className="input-info" type="text" /> */}
                                            </Form.Item>
                                        </Form.Item>

                                        <Form.Item className='formıtemInput' label="Son Kul.Tar."  >
                                            <Form.Item
                                                name="card-expiration-date"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please input Date',
                                                    },
                                                ]}>
                                                    <Cleave
                                                    className="expiration-date-info"
                                                    
                                                    options={{ 
                                                        delimiter: '/',
                                                        blocks: [2,2],
                                                        numericOnly: true,
                                                        date: true,
                                                        datePattern: ['d', 'm', 'Y']
                                                        }}
                                                />
                                                {/* <Input className="expiration-date-info" type="text" /> */}
                                            </Form.Item>
                                        </Form.Item>

                                        <Form.Item className='formıtemInput' label="CVV/CVC"  >
                                            <Form.Item
                                                name="card-cvv-cvc"
                                                
                                                rules={[
                                                    {
                                                        required: true,                                                     
                                                        message: 'Input Card CVV/CVC',
                                                    },
                                                ]}
                                            >
                                                <Cleave className="card-date-cvv-info"
                                                options={{
                                                    blocks: [4],
                                                    numericOnly: true,
                                                    
                                                }}
                                                />
                                                {/* <Input className="card-date-cvv-info" type="password" maxLength={4} /> */}
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
                                    <Input className="textareaInput" placeholder={agreementForm} type="text" disabled />
                                </Form.Item>
                            </Form.Item>
                        </Form>

                    </Card>
                </Col>
                {/* SEPET */}
                <Col>
                    <PaymentCart />
                </Col>
            </Row>

        </div>
    )
}

export default PaymentScreen;