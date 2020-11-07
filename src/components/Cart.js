import React from 'react';
import { Row, Col } from 'reactstrap';
import { useSelector } from 'react-redux';

import ListItem from './ListItem';

const Cart = () => {
    const cartData = useSelector((state) => state.cart);

    const products = Object.entries(cartData).map(([id, item]) => {
        if (item.qty > 0) {
            return (
                <Col key={id} md="4">
                    <ListItem id={id} itemData={item.itemData} qty={item.qty} />
                </Col>
            );
        }
        return null;
    });

    const calculateTotal = () => {
        let total = 0;
        for (let [id, item] of Object.entries(cartData)) {
            if (item.qty > 0) {
                total += item.itemData.price * item.qty;
            }
        }
        return total;
    };

    return (
        <>
            <Row className="justify-content-center">
                <Col>
                    <h1 className="text-center">Cart</h1>
                </Col>
            </Row>
            <Row className="justify-content-center">{products}</Row>
            <hr />
            <div className="text-right">
                <p className="font-weight-bold">
                    Cart Total: <span className="text-success">${calculateTotal()}</span>
                </p>
            </div>
        </>
    );
};

export default Cart;
