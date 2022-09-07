import { Card, List, Row, Col, Button } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import './packageList.css'
import React, { useEffect, useState } from "react";
import { connect} from "react-redux";
import * as packagesActions from "../../redux/actions/packagesActions";
import * as cartActions from "../../redux/actions/cartActions";
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import alertify from 'alertifyjs';

function PackageList(props) {

    useEffect(() => {
        props.actions.getPackagesApiRequest();
        /* eslint-disable */
    }, []);

    const [style, setStyle] = useState("packageCard");
    const [totalPrice, setTotalPrice] = useState(0);

    const addToCart = (packages) => {
        props.actions.addToCart({packages})
        setStyle("packageCard-clicked");
        setTotalPrice(totalPrice + packages.amount)
        alertify.success(packages.name + " Added to cart")
        
    }
    // const packageTotalPrice = (totalPrice) => {
    //     props.actions.packageTotalPrice({totalPrice})
    // }

    return (

        <Row className='packageAllBody'>
            <Card className='cardContainer'>
                <Row className='cardBody'>  
                    {props.isLoading ? <span className='loading-text'>Loading<LoadingOutlined /></span>
                        : props.packages.map((packages, index) => (
                            <List.Item key={index} className="list-item"  >
                                <Row className={style} onClick={()=> addToCart(packages)} color="success">
                                    <Col className='cardImageCol' >
                                        <img className='cardImage' src={packages.imagePath} alt="img" />
                                    </Col>
                                    <Col className='cardContent'>
                                        <Row className='package-Name-Price-Row'>
                                            <Col className='package-Name-Price'>
                                                {packages.name}
                                            </Col>
                                            <Col className='package-Name-Price'>
                                                {packages.amount}{packages.currency}
                                            </Col>

                                        </Row>
                                        <Row>
                                            {packages.details.map((detail) => (
                                                <Col key={detail} className='detailListCol'>
                                                    <ul>
                                                        <li>
                                                            {detail}
                                                        </li>
                                                    </ul>

                                                </Col>
                                            ))}
                                        </Row>
                                        <Row>
                                            {packages.tags.map((tag) => (
                                                <Col key={tag} className='tagListCol'>
                                                    <ul>
                                                        <li className='liTagList'>
                                                            {tag}
                                                        </li>
                                                    </ul>
                                                </Col>
                                            ))}
                                        </Row>
                                    </Col>
                                </Row>
                            </List.Item>

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
    };
};
function mapDispatchToProps(dispatch) {
    return {
        actions: {
            addToCart:bindActionCreators(cartActions.addToCart, dispatch),
            getPackagesApiRequest:bindActionCreators(packagesActions.getPackagesApiRequest, dispatch),
            // packageTotalPrice:bindActionCreators(cartActions.packageTotalPrice, dispatch),
            
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(PackageList);

