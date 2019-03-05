/**
 * Created by chenlizan on 2017/6/18.
 */

import {applyMiddleware, createStore, combineReducers, compose} from 'redux';
import {persistStore, autoRehydrate} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import {initState, reducers} from '../reducers';
import sagas from '../sagas/index';

const sagaMiddleware = createSagaMiddleware();

export const configureStore = (preloadState:any) => {
    const store = createStore(
        combineReducers<any>(reducers),
        preloadState || initState,
        compose(applyMiddleware(sagaMiddleware), autoRehydrate())
    );
    persistStore(store);
    sagaMiddleware.run(sagas);
    return store;
};
