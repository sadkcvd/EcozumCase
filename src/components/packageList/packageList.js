import { Card, List, Row, Col, Button } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import './packageList.css'
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPackagesApiRequest } from "../../redux/actions/thunkActions";
import { Link } from 'react-router-dom';
// import * as actionCreators from "../redux/actions/actionCreators";
// import { bindActionCreators } from "redux";
// import * as thunkActions from "../../redux/actions/thunkActions";

function PackageList(props) {

    useEffect(() => {
        props.getPackagesApiRequest();
        /* eslint-disable */
    }, []);



    return (
        <Row className='packageAllBody'>                {/*ANA ROW SAYFA BÜTÜNÜ*/}
            <Card className='cardContainer'>            {/*ANA CARD*/}
                <Row className='cardBody'>
                    {props.isLoading ? <span className='loading-text'>Loading<LoadingOutlined /></span> 
                    : props.packages.map(packages => (
                        <List.Item key={packages.id} className='list-item'>
                            <Row className='packageCard'>       {/*CARD ROW*/}
                                <Col className='cardImageCol' >     {/*RESİM COLUMN*/}
                                    {/* <span className='imgText'>Görsel</span> */}
                                    <img className='cardImage' src={packages.imagePath} alt="img" />
                                </Col>
                                <Col className='cardContent'>   {/*İÇERİK*/}
                                    <Row className='package-Name-Price-Row'> {/*PAKET ADI VE FİYATI : ROW*/}
                                        <Col className='package-Name-Price'>    {/*PAKET ADI*/}
                                            {packages.name}
                                        </Col>
                                        <Col className='package-Name-Price'>    {/*PAKET FİYATI*/}
                                            {packages.amount}{packages.currency}
                                        </Col>
                                    </Row>
                                    <Row>
                                        {packages.details.map((detail) => (
                                            <Col key={detail} className='detailListCol'>        {/*DETAY LİST*/}
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
                                            <Col key={tag} className='tagListCol'>           {/*ETİKET LİST*/}
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
                        <span className='totalprice'>Seçilen Paket Tutarı :</span><span className='price'>631</span>
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
export default connect(mapStateToProps, { getPackagesApiRequest })(PackageList);

