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
        let uiMeta = yield select(getUiMeta);
        uiMeta['children'].push(action.payload);
        yield put(ui_meta_data(JSON.parse(JSON.stringify(uiMeta))));
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