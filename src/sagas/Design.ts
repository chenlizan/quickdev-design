import * as _ from 'lodash';
import * as uuid from 'uuid/v4';
import {call, put, select, takeEvery} from 'redux-saga/effects';
import {current_choose_node, ui_meta_data, ui_meta_props} from '../action/index';

const getDesign = (state: { Design: any; }) => state.Design;


function* loadData(action: any) {
    try {
        yield put(ui_meta_data(action.payload));
    } catch (e) {
        console.log(e);
    }
}

function addTreeNode(uiMeta: Array<any>, key: string, value: object): void {
    if (key === undefined) {
        return uiMeta[0].props.children.push(value);
    }
    for (let i = 0, len = uiMeta.length; i < len; i++) {
        if (uiMeta[i].key === key) {
            uiMeta[i].props.children.push(value);
        } else if (uiMeta[i].props && uiMeta[i].props.children) {
            addTreeNode(uiMeta[i].props.children, key, value);
        }
    }
}

function setTreeNode(uiMeta: Array<any>, key: string, data: any): void {
    for (let i = 0, len = uiMeta.length; i < len; i++) {
        if (uiMeta[i].key === key) {
            Object.keys(data).forEach((key) => {
                uiMeta[i].props[key] = data[key].value;
            });
        } else if (uiMeta[i].props && uiMeta[i].props.children) {
            setTreeNode(uiMeta[i].props.children, key, data);
        }
    }
}

function getTreeNode(uiMeta: Array<any>, key: string, result: Array<any>): void {
    for (let i = 0, len = uiMeta.length; i < len; i++) {
        if (uiMeta[i].key === key) {
            result.push(uiMeta[i]);
        } else if (uiMeta[i].props && uiMeta[i].props.children) {
            getTreeNode(uiMeta[i].props.children, key, result);
        }
    }
}

function* process(action: any) {
    try {
        const Design = yield select(getDesign);
        if (action.type === 'ATTRIBUTE_CHANGE') {
            const meta = _.assign({}, action.payload);
            setTreeNode([Design.uiMeta], Design.currentNode, meta);
            yield put(ui_meta_data(_.cloneDeep(Design.uiMeta)));
        }
        if (action.type === 'CHOOSE_COMPONENT') {
            let meta = _.assign({}, action.payload, {key: uuid()}, {props: {children: []}});
            addTreeNode([Design.uiMeta], Design.currentNode, meta);
            yield put(ui_meta_data(_.cloneDeep(Design.uiMeta)));
        }
        if (action.type === 'CURRENT_CHOOSE_NODE') {
            const result: any[] | never[] = [];
            getTreeNode([Design.uiMeta], Design.currentNode, result);
            yield put(ui_meta_props(result[0]));
        }
        if (action.type === 'DROP_AFTER_DATA') {
            yield put(ui_meta_data(_.cloneDeep(action.payload)));
        }
    } catch (e) {
        console.log(e);
    }
}

export function* Open() {
    yield takeEvery('TOOLBAR_OPEN_FILE', loadData);
}

export function* AttributeChange() {
    yield takeEvery('ATTRIBUTE_CHANGE', process);
}

export function* ChooseComponent() {
    yield takeEvery('CHOOSE_COMPONENT', process);
}

export function* ChooseNode() {
    yield takeEvery('CURRENT_CHOOSE_NODE', process);
}

export function* DropNode() {
    yield takeEvery('DROP_AFTER_DATA', process);
}