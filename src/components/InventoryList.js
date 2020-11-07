import React from 'react';
import { Row, Col } from 'reactstrap';
import { useSelector } from 'react-redux';

import ListItem from './ListItem';

const InventoryList = () => {
    const items = useSelector((state) => state.inventory);
    return (
        <Row className="justify-content-center">
            {Object.entries(items).map(([id, item]) => {
                return (
                    <Col key={id} md="4">
                        <ListItem id={id} itemData={item} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default InventoryList;
