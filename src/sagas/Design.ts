import * as _ from 'lodash';
import * as uuid from 'uuid/v4';
import {call, put, select, takeEvery} from 'redux-saga/effects';
import {current_choose_node, drop_node_data, ui_meta_data, ui_meta_props} from '../action';

const omit = require('omit.js').default;
const getDesign = (state: { Design: any; }) => state.Design;

type cb = (item: object, index: number, arr: Array<any>) => void;


function addTreeNode(uiMeta: Array<any>, key: string, value: object): void {
    if (key === undefined) {
        return uiMeta[0].props.children.push(value);
    }
    for (let i = 0, len = uiMeta.length; i < len; i++) {
        if (uiMeta[i].key === key) {
            uiMeta[i].props.children.push(value);
            break;
        } else if (uiMeta[i].props && uiMeta[i].props.children) {
            addTreeNode(uiMeta[i].props.children, key, value);
        }
    }
}

function deleteTreeNode(uiMeta: Array<any>, key: string): void {
    for (let i = 0; i < uiMeta.length; i++) {
        if (uiMeta[i].key === key) {
            uiMeta.splice(i, 1);
            i--;
            break;
        } else if (uiMeta[i].props && uiMeta[i].props.children) {
            deleteTreeNode(uiMeta[i].props.children, key);
        }
    }
}

function setTreeNode(uiMeta: Array<any>, key: string, data: any): void {
    for (let i = 0, len = uiMeta.length; i < len; i++) {
        if (uiMeta[i].key === key) {
            Object.keys(data).forEach((key) => {
                if (data[key].value !== undefined && key === 'uiKey') {
                    uiMeta[i][key] = data[key].value;
                } else if (data[key].value !== undefined) {
                    uiMeta[i].props[key] = data[key].value;
                } else {
                    delete uiMeta[i][key];
                    delete uiMeta[i].props[key];
                }
            });
            break;
        } else if (uiMeta[i].props && uiMeta[i].props.children) {
            setTreeNode(uiMeta[i].props.children, key, data);
        }
    }
}

function getTreeNode(uiMeta: Array<any>, key: string, result: Array<any>): void {
    for (let i = 0, len = uiMeta.length; i < len; i++) {
        if (uiMeta[i].key === key) {
            result.push(uiMeta[i]);
            break;
        } else if (uiMeta[i].props && uiMeta[i].props.children) {
            getTreeNode(uiMeta[i].props.children, key, result);
        }
    }
}

function layoutTreeNode(info: any, uiMeta: Array<any>): Array<any> {
    const dropKey = info.node.props.eventKey;
    const dragKey = info.dragNode.props.eventKey;
    const dropPos = info.node.props.pos.split('-');
    const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);
    const loop = (data: Array<any>, key: string, callback: cb) => {
        data.forEach((item, index, arr) => {
            if (item.key === key) {
                return callback(item, index, arr);
            }
            if (item.props && item.props.children) {
                return loop(item.props.children, key, callback);
            }
        });
    };
    const data = [uiMeta];

    // Find dragObject
    let dragObj: object = {};
    loop(data, dragKey, (item, index, arr) => {
        arr.splice(index, 1);
        dragObj = item;
    });

    if (!info.dropToGap) {
        // Drop on the content
        loop(data, dropKey, (item: any) => {
            item.props.children = item.props.children || [];
            // where to insert 示例添加到尾部，可以是随意位置
            item.props.children.push(dragObj);
        });
    } else if (
        (info.node.props.children || []).length > 0 // Has children
        && info.node.props.expanded // Is expanded
        && dropPosition === 1 // On the bottom gap
    ) {
        loop(data, dropKey, (item: any) => {
            item.props.children = item.props.children || [];
            // where to insert 示例添加到尾部，可以是随意位置
            item.props.children.unshift(dragObj);
        });
    } else {
        let ar: Array<any> = [];
        let i: number = 0;
        loop(data, dropKey, (item, index, arr) => {
            ar = arr;
            i = index;
        });
        if (dropPosition === -1) {
            ar.splice(i, 0, dragObj);
        } else {
            ar.splice(i + 1, 0, dragObj);
        }
    }

    return data[0];
}

function* loadData(action: any) {
    try {
        yield put(ui_meta_data(action.payload));
    } catch (e) {
        console.log(e);
    }
}

function layoutData(uiMeta: Array<any>, data: Array<any>): void {
    for (let i = 0, len = uiMeta.length; i < len; i++) {
        const match = _.find(data, {i: uiMeta[i].key});
        if (match) {
            uiMeta[i].props = _.assign(uiMeta[i].props, {
                x: match.x,
                y: match.y,
                w: match.w,
                h: match.h,
                isDraggable: match.isDraggable === undefined ? true : match.isDraggable,
                isResizable: match.isResizable === undefined ? true : match.isResizable
            });
        } else if (uiMeta[i].props && uiMeta[i].props.children) {
            layoutData(uiMeta[i].props.children, data);
        }
    }
}

function* process(action: any) {
    try {
        const Design = yield select(getDesign);
        if (action.type === 'ATTRIBUTE_CHANGE') {
            const meta = _.assign({}, action.payload);
            setTreeNode([Design.uiMeta], Design.chooseNode, meta);
            yield put(ui_meta_data(_.cloneDeep(Design.uiMeta)));
            yield put(current_choose_node(Design.chooseNode));
        }
        if (action.type === 'CHOOSE_COMPONENT') {
            const {namespace, type} = action.payload;
            const otherProps = omit(action.payload, ['namespace', 'type']);
            let meta = _.assign({}, {namespace: namespace}, {type: type}, {key: uuid()}, {props: {children: [], ...otherProps}});
            addTreeNode([Design.uiMeta], Design.chooseNode, meta);
            yield put(ui_meta_data(_.cloneDeep(Design.uiMeta)));
        }
        if (action.type === 'CURRENT_CHOOSE_NODE') {
            const result: any[] | never[] = [];
            getTreeNode([Design.uiMeta], Design.chooseNode, result);
            yield put(ui_meta_props(result[0]));
        }
        if (action.type === 'CURRENT_DELETE_NODE') {
            deleteTreeNode([Design.uiMeta], Design.deleteNode);
            yield put(ui_meta_data(_.cloneDeep(Design.uiMeta)));
        }
        if (action.type === 'CURRENT_DROP_NODE') {
            const result: any[] | never[] = [];
            getTreeNode([Design.uiMeta], action.payload, result);
            yield put(drop_node_data(result[0]));
        }
        if (action.type === 'DROP_BEFORE_DATA') {
            const uiMeta = yield call(layoutTreeNode, action.payload, Design.uiMeta);
            yield put(ui_meta_data(_.cloneDeep(uiMeta)));
            yield put(drop_node_data(undefined));
        }
        if (action.type === 'UI_LAYOUT_CHANGE') {
            layoutData([Design.uiMeta], action.payload);
            yield put(ui_meta_data(_.cloneDeep(Design.uiMeta)));
        }
    } catch (e) {
        console.log(e);
    }
}

export function* Open() {
    yield takeEvery('OPEN_FILE', loadData);
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

export function* DeleteNode() {
    yield takeEvery('CURRENT_DELETE_NODE', process);
}

export function* DropNode() {
    yield takeEvery('CURRENT_DROP_NODE', process);
}

export function* DropBeforeNode() {
    yield takeEvery('DROP_BEFORE_DATA', process);
}

export function* LayoutChange() {
    yield takeEvery('UI_LAYOUT_CHANGE', process);
}
