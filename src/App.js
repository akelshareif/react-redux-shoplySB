import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import NavBar from './components/NavBar';
import Inventory from './components/Inventory';
import ItemDetail from './components/ItemDetail';
import Cart from './components/Cart';

const App = () => {
    return (
        <div className="container">
            <NavBar />
            <Switch>
                <Route exact path="/products">
                    <Inventory />
                </Route>
                <Route exact path="/products/:id">
                    <ItemDetail />
                </Route>
                <Route exact path="/cart">
                    <Cart />
                </Route>
                <Redirect to="/products" />
            </Switch>
        </div>
    );
};

export default App;
