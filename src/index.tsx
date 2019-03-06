/**
 * Created by chenlizan on 2017/8/12.
 */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {routes} from './routes/index'
import {configureStore} from './store';
import './assets/stylesheets/index.less'; //global style

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        {routes}
    </Provider>,
    document.getElementById('root')
);