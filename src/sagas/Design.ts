import * as _ from 'lodash';
import * as uuid from 'uuid/v4';
import {call, put, select, takeEvery} from 'redux-saga/effects';
import {ui_meta_data} from '../action/index';

const getDesign = (state: { Design: any; }) => state.Design;


function* loadData(action: any) {
    try {
        yield put(ui_meta_data(action.payload));
    } catch (e) {
        console.log(e);
    }
}

function addTreeNode(uiMeta: any, key: string, value: object) {
    if (!key) {
        return uiMeta[0].children.push(value);
    }
    for (let i = 0, len = uiMeta.length; i < len; i++) {
        if (uiMeta[i].key === key) {
            if (!uiMeta[i].children) {
                uiMeta[i]['children'] = [];
            }
            uiMeta[i].children.push(value);
        } else if (uiMeta[i].children) {
            addTreeNode(uiMeta[i].children, key, value);
        }
    }
}

function* process(action: any) {
    try {
        const Design = yield select(getDesign);
        console.log(Design);
        if (action.type === 'CHOOSE_COMPONENT') {
            let meta = _.assign({}, action.payload);
            meta['key'] = uuid();
            meta['props'] = {};
            // Design.uiMeta['children'].push(meta);
            addTreeNode([Design.uiMeta], Design.currentNode, meta);

            yield put(ui_meta_data(_.cloneDeep(Design.uiMeta)));
        }


    } catch (e) {
        console.log(e);
    }
}

export function* Open() {
    yield takeEvery('TOOLBAR_OPEN_FILE', loadData);
}

export function* ChooseComponent() {
    yield takeEvery('CHOOSE_COMPONENT', process);
}

export function* ChooseNode() {
    yield takeEvery('CURRENT_CHOOSE_NODE', process);
}