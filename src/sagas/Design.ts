import {delay} from 'redux-saga';
import {call, put, takeEvery} from 'redux-saga/effects';
import {toolbar_open_file, ui_meta_data} from '../action';

function* predata(action: any) {
    console.log(action)
    try {
        yield delay(500);
        yield put(ui_meta_data(action.payload))
    } catch (e) {
        console.log(e)
    }
}

export function* f1() {
    yield takeEvery('TOOLBAR_OPEN_FILE', predata)
}