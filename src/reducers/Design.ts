import { handleActions } from "redux-actions";

interface Design {
  boostMode?: any;
  chooseNode?: any;
  dropNode?: any;
  uiCode?: any;
  uiMeta?: object;
  currentProps?: object;
  currentView: any;
}

const initState: Design = {
  boostMode: false,
  chooseNode: undefined,
  dropNode: undefined,
  currentProps: {},
  currentView: "view",
  uiCode: "class Index extends GenerateView {\n" + "    static defaultProps = {\n" + "        uiMeta: {},\n" + "        uiProps: {}\n" + "    };\n" + "}",
  uiMeta: {
    namespace: "html",
    type: "div",
    key: "app-root",
    props: {
      children: [],
    },
  },
};

const reducer = handleActions<Design>(
  {
    UI_SOURCE_CODE: (state, action) => ({
      ...state,
      uiCode: action.payload,
    }),
    UI_META_DATA: (state, action) => ({
      ...state,
      uiMeta: action.payload,
    }),
    UI_META_PROPS: (state, action) => ({
      ...state,
      currentProps: action.payload,
    }),
    BOOST_MODE: (state, action) => ({
      ...state,
      boostMode: action.payload,
    }),
    CURRENT_CHOOSE_NODE: (state, action) => ({
      ...state,
      chooseNode: action.payload,
    }),
    CURRENT_DELETE_NODE: (state, action) => ({
      ...state,
      deleteNode: action.payload,
    }),
    CURRENT_VIEW: (state, action) => ({
      ...state,
      currentView: action.payload,
    }),
    DROP_NODE_DATA: (state, action) => ({
      ...state,
      dropNode: action.payload,
    }),
    RESET_STATE: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  initState
);

export default { initState, reducer };
