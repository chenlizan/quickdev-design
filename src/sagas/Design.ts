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
            if (!uiMeta[i].props.children) {
                uiMeta[i].props['children'] = [];
            }
            uiMeta[i].props.children.push(value);
        } else if (_.isArray(uiMeta[i].props.children)) {
            addTreeNode(uiMeta[i].props.children, key, value);
        }
    }
}

function getTreeNode(uiMeta: Array<any>, key: string): any {
    for (let i = 0, len = uiMeta.length; i < len; i++) {
        if (uiMeta[i].key === key) {
            return uiMeta[i];
        } else if (_.isArray(uiMeta[i].props.children) && uiMeta[i].props.children.length !== 0) {
            return getTreeNode(uiMeta[i].props.children, key);
        }
    }
    return {};
}

function setTreeNode(uiMeta: Array<any>, key: string, data: any): void {
    for (let i = 0, len = uiMeta.length; i < len; i++) {
        if (uiMeta[i].key === key) {
            Object.keys(data).forEach((key) => {
                uiMeta[i].props[key] = data[key].value;
            });
        } else if (_.isArray(uiMeta[i].props.children)) {
            setTreeNode(uiMeta[i].props.children, key, data);
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
            let meta = _.assign({}, action.payload);
            meta['key'] = uuid();
            meta['props'] = {children: []};
            addTreeNode([Design.uiMeta], Design.currentNode, meta);
            yield put(ui_meta_data(_.cloneDeep(Design.uiMeta)));
        }
        if (action.type === 'CURRENT_CHOOSE_NODE') {
            yield put(ui_meta_props(getTreeNode([Design.uiMeta], Design.currentNode)));
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