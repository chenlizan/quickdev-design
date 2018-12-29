/**
 * Created by chenlizan on 2018/5/4.
 */

import Login from "./Login";
import Design from "./Design";

export const initState = {
    Login: Login.initState,
    Design: Design.initState
};

export const reducers = {
    Login: Login.reducer,
    Design: Design.reducer
};
