/**
 * Created by chenlizan on 2017/6/21.
 */

import {createAction} from 'redux-actions';

//Saga
export const ui_meta_data = createAction('UI_META_DATA');
export const ui_meta_props = createAction('UI_META_PROPS');


//DesignToolBar
export const toolbar_open_file = createAction('TOOLBAR_OPEN_FILE');


//DesignRight
export const choose_component = createAction('CHOOSE_COMPONENT');


//DesignLeft
export const current_choose_node = createAction('CURRENT_CHOOSE_NODE');