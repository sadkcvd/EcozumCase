import React, { useState } from "react";
import { MailOutlined, UserOutlined } from '@ant-design/icons';
import { Form, Input, Button, Card, Row, Col } from 'antd';
import { connect } from "react-redux";
// import { Link } from 'react-router-dom';
import { startLogin } from "../../redux/actions/loginActions";
import { useNavigate } from 'react-router-dom';
// import withRouter from "./withRouter";
// import { Navigate } from 'react-router';
import "./signScreen.css";

const onFinish = values => {
    console.log('Received values of form: ', values);
};

function SignScreen(props) {

    const [state, setState] = useState({fullName: "" , email: ""});
    // constructor() {
    //     super();
    // this.state = {
    //     fullName: "",
    //     email: ""
    // };
    // }
    const handleChange = e => setState({ ...state, [e.target.name]: e.target.value });

    const navigate = useNavigate();   

    const login = e => {
        e.preventDefault();
        setState({ fullName: "", email: "" });
        props.login(state);
        props.navigate.push("/packagelist"); //push undefined.
    };
    // render() {
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
                        onFinish={onFinish}
                    >
                        {props.loggedIn ? "Logged in" : ""}
                        {props.loginProcessing && !props.loggedIn ? "Logging.." : ""}
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
                                    value={state.fullName}
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
                                    value={state.email}
                                    onChange={handleChange}
                                    prefix={<MailOutlined className="site-form-item-icon" />}

                                />
                            </Form.Item>
                        </Form.Item>
                        <Form.Item>


                            <Button onClick={login} type="primary" htmlType="submit" className="button-login-form-">
                                {/* <Link to="/packagelist"> */}
                                <span className='input-text-button'>Devam Et</span>
                                {/* </Link> */}
                            </Button>

                        </Form.Item>
                    </Form>
                </Card>
            </Col>
        </Row>
    );
};
// };

const mapStateToProps = state => {
    return {
        loggedIn: state.loggedIn,
        loginProcessing: state.loginProcessing,
        // fullName: state.user.fullName,
        // email: state.user.email
    };
};

const mapDispatchToProps = dispatch => {
    return {
        login: data => dispatch(startLogin(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignScreen);



