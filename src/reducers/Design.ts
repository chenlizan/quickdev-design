import {handleActions} from "redux-actions";

interface Design {
    uiMeta?: object
}

const initState: Design = {
    uiMeta: {
        "namespace": "html",
        "type": "div",
        "key": "app-root",
        "props": {},
        "children": []
    }
}

const reducer = handleActions<Design>({
        UI_META_DATA: (state, action) => ({
            ...state, uiMeta: action.payload
        }),
        CURRENT_CHOOSE_NODE: (state, action) => ({
            ...state, currentNode: action.payload
        })
    }, initState
);

export default {initState, reducer};