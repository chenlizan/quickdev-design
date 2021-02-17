import React from "react";
import { hot } from "react-hot-loader/root";

class App extends React.Component {
  render() {
    return <div id="app">{this.props.children}</div>;
  }
}

export default hot(App);
