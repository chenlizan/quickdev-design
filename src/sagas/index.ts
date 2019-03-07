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
