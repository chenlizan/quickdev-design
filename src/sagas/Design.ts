import {delay} from 'redux-saga';
import {call, put, takeEvery} from 'redux-saga/effects';
import {toolbar_open_file,pre_process_data} from '../action';

function* predata(action) {
    console.log(action)
    try {
        yield delay(2000);
        yield put(pre_process_data(action.payload))
    } catch (e) {
        console.log(e)
    }
}

export function* f1() {
    yield takeEvery('TOOLBAR_OPEN_FILE', predata)
}