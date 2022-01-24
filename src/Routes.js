import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

const Routes = () => (
    <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/register' component={Register} />
    </Switch>
);

export default Routes;
