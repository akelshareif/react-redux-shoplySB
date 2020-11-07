import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Row, Col, Label, Input, Button } from 'reactstrap';

import { addItem, removeItem } from '../actions';
import useFields from '../useFields';

const QuantityForm = ({ id, item, textAlign, qty }) => {
    const dispatch = useDispatch();

    const [formData, handleChange] = useFields({
        quantity: qty || 0,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addItem({ id, item, qty: formData.quantity }));
    };

    const handleDelete = (e) => {
        dispatch(removeItem({ id }));
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Row className="justify-content-center">
                <Col>
                    <Row>
                        <Col className=" mb-1 pr-0">
                            <Label>Qty:</Label>
                        </Col>
                        <Col>
                            <Input
                                type="number"
                                bsSize="sm"
                                name="quantity"
                                min="0"
                                onChange={handleChange}
                                value={formData.quantity}
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className={`justify-content-center ${textAlign}`}>
                <Col>
                    <Button type="submit" color="success" style={{ width: '110px' }}>
                        {qty ? 'Update Qty' : 'Add to Cart'}
                    </Button>
                    <Button
                        className="my-1 ml-1"
                        type="button"
                        color="danger"
                        onClick={handleDelete}
                        style={{ width: '110px' }}
                    >
                        Delete All
                    </Button>
                </Col>
            </Row>
        </Form>
    );
};

export default QuantityForm;
