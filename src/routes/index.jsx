/**
 * Created by chenlizan on 2017/6/18.
 */

import * as React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Loadable from 'react-loadable';

const App = Loadable({
    loader: () => import('../App'),
    loading: () => null
});

// const TestQuickDev = Loadable({
//     loader: () => import('../views/TestQuickDev'),
//     loading: () => null
// });

const Design = Loadable({
    loader: () => import('../views/Design'),
    loading: () => null
});

const Preview = Loadable({
    loader: () => import('../containers/Design/DesignPreview'),
    loading: () => null
});

export const routes = (
    <HashRouter>
        <App>
            <Switch>
                <Route path="/" exact component={Design}/>
                <Route path="/design" component={Design}/>
                <Route path="/preview" component={Preview}/>
                {/*<Route path="/test" component={TestQuickDev}/>*/}
            </Switch>
        </App>
    </HashRouter>
);
