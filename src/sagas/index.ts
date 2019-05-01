import {all} from 'redux-saga/effects'
import {AttributeChange, ChooseComponent, ChooseNode, DropNode, DropBeforeNode, Open} from './Design';

export default function* rootSaga() {
    yield all([
        AttributeChange(),
        ChooseComponent(),
        ChooseNode(),
        DropNode(),
        DropBeforeNode(),
        Open()
    ])
}
