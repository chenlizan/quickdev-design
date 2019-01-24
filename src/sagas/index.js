/**
 * Created by chenlizan on 2018/5/4.
 */

import {all} from 'redux-saga/effects'
import {AttributeChange, ChooseComponent, ChooseNode, DropNode, Open} from './Design';

export default function* rootSaga() {
    yield all([
        AttributeChange(),
        ChooseComponent(),
        ChooseNode(),
        DropNode(),
        Open()
    ])
}
