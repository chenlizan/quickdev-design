/**
 * Created by chenlizan on 2018/5/4.
 */

import {all} from 'redux-saga/effects'
import {Choose, Open} from './Design';

export default function* rootSaga() {
    yield all([
        Choose(),
        Open()
    ])
}
