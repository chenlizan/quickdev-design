/**
 * Created by chenlizan on 2017/6/18.
 */

import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Loadable from 'react-loadable';

const App = Loadable({
    loader: () => import('../App'),
    loading: () => null
});

const Login = Loadable({
    loader: () => import('../containers/Login'),
    loading: () => null
});

const TestQuickDev = Loadable({
    loader: () => import('../views/TestQuickDev'),
    loading: () => null
});

const Design = Loadable({
    loader: () => import('../views/Design'),
    loading: () => null
});

export const routes = (
    <HashRouter>
        <App>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/login" component={Login}/>
                <Route path="/test" component={TestQuickDev}/>
                <Route path="/design" component={Design}/>
            </Switch>
        </App>
    </HashRouter>
);
