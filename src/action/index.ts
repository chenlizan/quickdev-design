import {createAction} from 'redux-actions';

//Saga
export const ui_meta_data = createAction('UI_META_DATA');
export const ui_meta_props = createAction('UI_META_PROPS');
export const ui_source_code = createAction('UI_SOURCE_CODE');


//DesignToolBar
export const open_file = createAction('OPEN_FILE');
export const reset_state = createAction('RESET_STATE');
export const current_view = createAction('CURRENT_VIEW');


//DesignRight
export const choose_component = createAction('CHOOSE_COMPONENT');
export const attribute_change = createAction('ATTRIBUTE_CHANGE');


//DesignLeft
export const current_choose_node = createAction('CURRENT_CHOOSE_NODE');
export const current_delete_node = createAction('CURRENT_DELETE_NODE');
export const current_drop_node = createAction('CURRENT_DROP_NODE');
export const drop_node_data = createAction('DROP_NODE_DATA');
export const drop_before_data = createAction('DROP_BEFORE_DATA');
