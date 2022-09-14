import React, { useState } from "react";
import { MailOutlined, UserOutlined } from '@ant-design/icons';
import { Form, Input, Button, Card, Row, Col } from 'antd';
import { connect, useDispatch } from "react-redux";
import { startLogin } from "../../redux/actions/loginActions";
import {Navigate} from 'react-router-dom';

import "./signScreen.css";


function SignScreen(props) {
    
    const dispatch = useDispatch()

    const [signForm, setSignForm] = useState({ fullName: "", email: "" });

    const handleChange = e =>  setSignForm({ ...signForm, [e.target.name]: e.target.value });

    const login = e => {
        e.preventDefault();
        if(signForm.fullName.length < 8 || signForm.email.length < 8  ){
            console.log("Yanlış veya eksik karakter tuşladınız, Minimum 8 karakter ile giriş yapınız.")
        }
        else{
            dispatch(startLogin(signForm));
            setSignForm({ fullName: "", email: "" });
        }};

        if(props.loggedIn) {
            return <Navigate to="/"/>
            } 

    return (
        <Row className='rowBody'>
            <Col className='signcol'>
                <Card className='form-card'>
                    <Form
                        name="normal_login"
                        className="login-form"
                        layout='vertical'
                        initialValues={{
                            remember: true,
                        }}
                    >
                        {/* {props.loginProcessing && !props.loggedIn ? console.log("Logging..") : ""}
                        {props.loggedIn ? console.log("Logged in") : ""} */}
                        <Form.Item className='text-input' label="Adınız Soyadınız"  >
                            <Form.Item
                                name="fullName"

                                rules={[
                                    {    
                                        required: true,
                                        message: 'Please input your Username!',
                                    },

                                ]}
                            >
                                <Input className="site-form-input"
                                    name="fullName"
                                    value={signForm.fullName}
                                    onChange={handleChange}
                                    prefix={<UserOutlined className="site-form-item-icon" />}

                                />
                            </Form.Item>
                        </Form.Item>
                        <Form.Item className='text-input' label="E-mail Adresiniz"  >
                            <Form.Item
                                name="email"

                                rules={[
                                    {
                                        type: "email",
                                        required: true,
                                        message: 'Please input your E-Mail!',
                                    },
                                ]}
                            >
                                <Input className="site-form-input"
                                    name="email"
                                    value={signForm.email}
                                    onChange={handleChange}
                                    prefix={<MailOutlined className="site-form-item-icon" />}

                                />
                            </Form.Item>
                        </Form.Item>
                        <Form.Item>


                            <Button onClick={login} type="primary" htmlType="submit" className="button-login-form-">
                                <span className='input-text-button'>Devam Et</span>
                            </Button>

                        </Form.Item>
                    </Form>
                </Card>
            </Col>
        </Row>
    );
};

const mapStateToProps = state => {
    return {
        loggedIn: state.loginReducer.loggedIn,
        loginProcessing: state.loginReducer.loginProcessing,
        fullName: state.loginReducer.fullName
    };
};

export default connect(mapStateToProps)(SignScreen);



