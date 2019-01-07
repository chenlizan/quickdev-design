import * as _ from 'lodash';
import * as uuid from 'uuid/v4';
import {call, put, select, takeEvery} from 'redux-saga/effects';
import {ui_meta_data} from '../action/index';

function* loadData(action: any) {
    try {
        yield put(ui_meta_data(action.payload));
    } catch (e) {
        console.log(e);
    }
}

function* process(action: any) {
    try {
        const getUiMeta = (state: { Design: { uiMeta: any; }; }) => state.Design.uiMeta;
        const uiMeta = yield select(getUiMeta);
        let meta = _.assign({}, action.payload)
        meta['key'] = uuid();
        meta['props'] = {};
        uiMeta['children'].push(meta);
        yield put(ui_meta_data(_.cloneDeep(uiMeta)));
    } catch (e) {
        console.log(e);
    }
}

export function* Open() {
    yield takeEvery('TOOLBAR_OPEN_FILE', loadData);
}

export function* Choose() {
    yield takeEvery('RIGHT_CHOOSE_COMPONENT', process);
}