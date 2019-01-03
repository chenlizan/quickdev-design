import {delay} from 'redux-saga';
import {call, put, select, takeEvery} from 'redux-saga/effects';
import {ui_meta_data} from '../action/index';

function* loadData(action: any) {
    try {
        yield delay(500);
        yield put(ui_meta_data(action.payload));
    } catch (e) {
        console.log(e);
    }
}

function* process(action: any) {
    try {
        const state = yield select();
        yield put(ui_meta_data(action.payload));
    } catch (e) {
        console.log(e);
    }
}

export function* OpenFile() {
    yield takeEvery('TOOLBAR_OPEN_FILE', loadData);
}

export function* Choose() {
    yield takeEvery('RIGHT_CHOOSE_COMPONENT', process);
}