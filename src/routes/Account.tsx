import * as React from "react";
import { Route } from "react-router-dom";
import * as Loadable from "react-loadable";

const Login = Loadable({
  loader: () => import("../views/Account"),
  loading: () => null,
});

export default <Route path="/account/login" exact component={Login} />;
