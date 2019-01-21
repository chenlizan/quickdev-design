import {handleActions} from "redux-actions";

interface Design {
    currentNode?: any,
    uiCode?: any,
    uiMeta?: object,
    currentProps?: object
}

const initState: Design = {
    currentNode: undefined,
    currentProps: {},
    uiCode: "export default class Index extends GenerateView {}",
    uiMeta: {
        "namespace": "html",
        "type": "div",
        "key": "app-root",
        "props": {
            "children": []
        }
    }
};

const reducer = handleActions<Design>({
        UI_SOURCE_CODE: (state, action) => ({
            ...state, uiCode: action.payload
        }),
        UI_META_DATA: (state, action) => ({
            ...state, uiMeta: action.payload
        }),
        UI_META_PROPS: (state, action) => ({
            ...state, currentProps: action.payload
        }),
        CURRENT_CHOOSE_NODE: (state, action) => ({
            ...state, currentNode: action.payload
        })
    }, initState
);

export default {initState, reducer};