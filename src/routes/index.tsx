import * as React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import * as Loadable from 'react-loadable';

const App = Loadable({
    loader: () => import('../App'),
    loading: () => null
});

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
            </Switch>
        </App>
    </HashRouter>
);
