import * as React from "react";
import GenerateViewSandbox from "./GenerateViewSandbox";

export default class DesignPreview extends React.PureComponent<any, any> {
  render(): React.ReactNode {
    const { uiCode, uiMeta } = this.props;
    return React.createElement(GenerateViewSandbox(uiCode), { uiMeta: uiMeta });
  }
}
