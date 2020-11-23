import { all } from "redux-saga/effects";
import {
  AttributeChange,
  ChooseComponent,
  ChooseNode,
  DeleteNode,
  DropNode,
  DropBeforeNode,
  Open,
} from "./Design";

export default function* rootSaga() {
  yield all([
    AttributeChange(),
    ChooseComponent(),
    ChooseNode(),
    DeleteNode(),
    DropNode(),
    DropBeforeNode(),
    Open(),
  ]);
}
