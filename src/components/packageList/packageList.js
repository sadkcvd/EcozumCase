import { Card, List, Row, Col, Button, notification} from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import './packageList.css'
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as packagesActions from "../../redux/actions/packagesActions";
import * as cartActions from "../../redux/actions/cartActions";
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

function PackageList(props) {


    const addedNotification = (name) => {
        notification.success({
          message: `${name} Added to cart`,
          description:"",
        });
      };

      const removedNotification = (name) => {
        notification.error({
          message: `${name} Remove from cart`,
          description:"",
        });
      };    

    useEffect(() => {
        props.actions.getPackagesApiRequest();
        /* eslint-disable */
    }, [PackageList]);

    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedPackages, setSelectedPackages] = useState([]);

    const addAndRemoveCart = (packages, idx) => {

        if (!selectedPackages.includes(idx))
        {
            setSelectedPackages(prev => [...prev, idx]);
            props.actions.addToCart({ packages });
            setTotalPrice(totalPrice + packages.amount);
            addedNotification(packages.name);
        }
        else
        {
            setSelectedPackages(prev => prev.filter(packageId => packageId !== idx));
            props.actions.removeFromCart({id: packages.id});
            setTotalPrice(totalPrice - packages.amount);
            removedNotification(packages.name);
        }   
        // console.log("CartList", props.cartList);
    }
    return (

        <Row className='packageAllBody'>
            <Card className='cardContainer'>
                <Row gutter={16} className='cardBody'>
                    {props.isLoading ? <span className='loading-text'>Loading<LoadingOutlined /></span>
                        : props.packages.map((packages, index) => (
                            <Col xs={24} xl={12} xxl={8} key={index}>
                                <List.Item className="list-item">
                                <Row className={selectedPackages.includes(index) ? "packageCard-clicked" : "packageCard"} onClick={() => addAndRemoveCart(packages, index)} color="success">
                                    <Col className='cardImageCol' >
                                        <img className='cardImage' src={packages.imagePath} alt="img" />
                                    </Col>
                                    <Col className='cardContentCol'>
                                        <Col className='content'>
                                        <Row className="package-Name-Price-Row">
                                            <Col className='package-Name'>
                                                {packages.name}
                                            </Col>
                                            <Col className='package-Price'>
                                                {packages.amount}{packages.currency}
                                            </Col>
                                        </Row>
                                        <Row>
                                            {packages.details.map((detail) => (
                                                <Col key={detail} className='detailListCol'>
                                                    <ul>
                                                        <li>{detail}</li>
                                                    </ul>
                                                </Col>
                                            ))}
                                        </Row>
                                        <Row>
                                            {packages.tags.map((tag) => (
                                                <Col key={tag} className='tagListCol'>
                                                    <ul>
                                                        <li className='liTagList'>{tag}</li>
                                                    </ul>
                                                </Col>
                                            ))}
                                        </Row>
                                    </Col>
                                    </Col>
                                </Row>
                                </List.Item>
                                </Col>
                        ))}
                </Row>
                <Row className='TotalPriceAndGo'>
                    <Col>
                        <span className='totalprice'>Seçilen Paket Tutarı :</span><span className='price'>{totalPrice}</span>
                    </Col>
                    <Col>
                        <Button className='packagebtn'>
                            <Link to="/paymentandcart">Devam Et</Link>
                        </Button>
                    </Col>
                </Row>
            </Card>
        </Row >
    );
}

function mapStateToProps(state) {
    return {
        packages: state.packagesReducer.packages,
        isLoading: state.packagesReducer.isLoading,
        cartList: state.cartReducer,
        loggedIn: state.loginReducer.loggedIn
    };
};
function mapDispatchToProps(dispatch) {
    return {
        actions: {
            addToCart: bindActionCreators(cartActions.addToCart, dispatch),
            removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
            getPackagesApiRequest: bindActionCreators(packagesActions.getPackagesApiRequest, dispatch),
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PackageList);

