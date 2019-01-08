/**
 * Created by chenlizan on 2018/5/4.
 */

import {all} from 'redux-saga/effects'
import {ChooseComponent, ChooseNode, Open} from './Design';

export default function* rootSaga() {
    yield all([
        ChooseComponent(),
        ChooseNode(),
        Open()
    ])
}
