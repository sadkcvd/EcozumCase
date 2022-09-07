import React, { useState } from 'react'
// import axios from 'axios';
import Cleave from "cleave.js/react";
import { Card, Input, Row, Col, Form, Button } from 'antd';
// import PaymentCart from "../paymentCart/paymentCart";
import { Link } from 'react-router-dom';
import { connect, useDispatch } from "react-redux";
import { startPayment } from "../../redux/actions/paymentActions";
import { useNavigate } from 'react-router-dom';
import "./paymentScreen.css";

const PaymentScreen = (props) => {

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
    const dispatch = useDispatch()

    const [paymentForm, setPaymentForm] = useState({ cardHolderName: "", cardNumber: "", expireDate: "", cvv: "" });

    const handleChange = e => setPaymentForm({ ...paymentForm, [e.target.name]: e.target.value });
    const navigate = useNavigate();

    const paymentComp = e => {
        e.preventDefault();
        dispatch(startPayment(paymentForm))
        setPaymentForm({ cardHolderName: "", cardNumber: "", expireDate: "", cvv: "" });
        navigate("/successcomp");
    };
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
                                    {props.pending && !props.successpay ? console.log("Payment Loading..") : ""}
                                    {props.successpay ? console.log("Payment Completed") : ""}
                                    <Form.Item className='form-text' label="Kart Üzerindeki İsim Soyisim"  >
                                        <Form.Item
                                            name="cardHolderName"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your Name and Surname',
                                                },
                                            ]}>
                                            <Cleave className="input-info"
                                                value={paymentForm.cardHolderName}
                                                onChange={handleChange}
                                                options={{ blocks: [24], delimiter: '' }}
                                            />
                                            {/* <Input className="input-info"
                                                 type="text"
                                                value={paymentForm.cardHolderName}
                                                onChange={handleChange}/> */}
                                        </Form.Item>
                                    </Form.Item>
                                    <Row>
                                        <Form.Item className='formıtemInput' label="Kart Numarası"  >
                                            <Form.Item
                                                name="cardNumber"

                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please input your Card Number',
                                                    },
                                                ]}>
                                                <Cleave className="input-info"
                                                    name='cardNumber'
                                                    value={paymentForm.cardNumber}
                                                    onChange={handleChange}
                                                    options={{ delimiter: '-', blocks: [4, 4, 4, 4], numericOnly: true }}
                                                />
                                                {/* <Input className="input-info"
                                                     type="text"
                                                     value={paymentForm.cardNumber}
                                                     onChange={handleChange}/> */}
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
                                                    value={paymentForm.expireDate}
                                                    onChange={handleChange}
                                                    options={{
                                                        delimiter: '/',
                                                        blocks: [2, 2],
                                                        numericOnly: true,
                                                        date: true,
                                                        datePattern: ['d', 'm', 'Y']
                                                    }}
                                                />
                                                {/* <Input className="expiration-date-info"
                                                    type="text"
                                                    value={paymentForm.expireDate}
                                                    onChange={handleChange} /> */}
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
                                                {/* <Cleave className="card-date-cvv-info"
                                                    options={{
                                                        blocks: [4],
                                                        numericOnly: true,

                                                    }}
                                                /> */}
                                                <Input className="card-date-cvv-info"
                                                    type="password"
                                                    value={paymentForm.cvv}
                                                    onChange={handleChange}
                                                    maxLength={4} />
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
                                <Button className="makePriceBtn" onClick={paymentComp}>
                                <span>Ödeme Yap</span>
                                </Button>
                            </Row>
                        </Card>
                    </div>
                </Col>
            </Row>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        cartList: state.cartReducer,
        cardNumber: state.paymentReducer.cardNumber,
        pending: state.paymentReducer.pending,
        successpay: state.paymentReducer.successpay,
        cardNumber: state.paymentReducer.cardNumber

    };
};

export default connect(mapStateToProps)(PaymentScreen);