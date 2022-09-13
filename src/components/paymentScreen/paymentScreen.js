import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Cleave from "cleave.js/react";
import { Card, Row, Col, Form, Button, Input } from 'antd';
import { connect, useDispatch } from "react-redux";
import { startPayment } from "../../redux/actions/paymentActions";
import { useNavigate } from 'react-router-dom';
import "./PaymentScreen.css";

const PaymentScreen = (props) => {
    
    const [agreementForm, setAgreementForm] = useState("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");

    useEffect(() => {
        axios.get("https://62f9ee323c4f110faa8ed350.mockapi.io/api/payment")
            .then(res => {
                setAgreementForm(decodeURIComponent(res.data.content));
                console.log("Agreement Request Success ", res.data);
            })
            .catch(() => {
                console.log("error");
            })
    }, [])

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const [paymentForm, setPaymentForm] = useState({ cardHolderName: "", cardNumber: "", expireDate: "", cvv: "" });
    const handleChange = e => setPaymentForm({ ...paymentForm, [e.target.name]: e.target.value });

    const paymentComp = e => {
        e.preventDefault();
        if (paymentForm.cardHolderName.length < 8 || paymentForm.cardNumber.length < 16 || paymentForm.expireDate.length < 10 || paymentForm.cvv.length < 4) {
            console.log("Yanlış veya eksik karakter tuşladınız. Kart üzerinde ki İsim Soyisim minimum 8 karakter olmalıdır.")
        }
        else {
            dispatch(startPayment(paymentForm))
            setPaymentForm({ cardHolderName: "", cardNumber: "", expireDate: "", cvv: "" });
            navigate("/successcomp");
        }

    };

    return (
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
                                {/* {props.pending && !props.successpay ? console.log("Payment Loading..") : ""}
                                {props.successpay ? console.log("Payment Completed") : ""} */}
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
                                            name="cardHolderName"
                                            value={paymentForm.cardHolderName}
                                            onChange={handleChange}
                                            options={{ blocks: [24], delimiter: '' }}
                                        />
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
                                                name="expireDate"
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
                                            <Input className="card-date-cvv-info"
                                                name="cvv"
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
                        <Form.Item className='agreement-form-title' label="Sözleşme"  >
                            <Row className="agreement-form">
                                <p dangerouslySetInnerHTML={{ __html: agreementForm }} />
                            </Row>
                        </Form.Item>
                    </Form>
                </Card>
            </Col>
            {/* SEPET */}
            <Col>
                <Card className='cartInfo'>
                    <Row>
                        <span className="cartInPackage">Sepetteki Paketler</span>
                    </Row>
                    {props.cartList.map(cartItem => (
                        <Row key={cartItem.packages.id} className="packageInfo">
                            <Col className='package-Name-Price'>
                                {cartItem.packages.name}
                            </Col>
                            <Col className="package-Name-Price">
                                {cartItem.packages.amount}{cartItem.packages.currency}
                            </Col>
                        </Row>
                    ))}
                    <Row className="btnRow">
                        <Button className="makePriceBtn" onClick={paymentComp}>
                            <span>Ödeme Yap</span>
                        </Button>
                    </Row>
                </Card>
            </Col>
        </Row>
    )
}

const mapStateToProps = state => {
    return {
        cartList: state.cartReducer,
        cardNumber: state.paymentReducer.cardNumber,
        pending: state.paymentReducer.pending,
        successpay: state.paymentReducer.successpay,

    };
};

export default connect(mapStateToProps)(PaymentScreen);