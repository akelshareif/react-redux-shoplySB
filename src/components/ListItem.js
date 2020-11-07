import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader } from 'reactstrap';
import QuantityForm from './QuantityForm';

const ListItem = ({ id, itemData, qty }) => {
    return (
        <Card className="my-2" style={{ width: '300px' }}>
            <Link to={`/products/${id}`}>
                <CardHeader tag="h4">
                    {itemData.name.charAt(0).toUpperCase() + itemData.name.slice(1)} - ${itemData.price}
                </CardHeader>
            </Link>
            <CardBody>
                <QuantityForm id={id} item={itemData} textAlign="text-center" qty={qty} />
            </CardBody>
        </Card>
    );
};

export default ListItem;
