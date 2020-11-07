import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Card, CardImg, CardText, CardBody, CardTitle, Row, Col } from 'reactstrap';

import QuantityForm from './QuantityForm';

const ItemDetail = () => {
    const { id } = useParams();
    const itemData = useSelector((state) => state.inventory[id]);

    return (
        <Row className="justify-content-center">
            <Card className="m-4" style={{ width: '600px' }}>
                <CardImg tag="img" top src={itemData.image_url} alt={itemData.name} />
                <CardBody>
                    <CardTitle tag="h5">{itemData.name.charAt(0).toUpperCase() + itemData.name.slice(1)}</CardTitle>
                    <CardText>{itemData.description}</CardText>
                    <Row>
                        <Col lg="4" className="align-self-center">
                            <CardText>${itemData.price}</CardText>
                        </Col>
                        <Col lg="8" className="text-right">
                            <QuantityForm id={id} item={itemData} />
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Row>
    );
};

export default ItemDetail;
