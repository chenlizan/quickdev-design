import _ from "lodash";
import React from "react";
import { GenerateViewPropsType } from "./PropsType";

export interface GenerateViewProps extends GenerateViewPropsType {
  uiProps?: object;
}

export default class GenerateView extends React.PureComponent<GenerateViewProps, any> {
  constructor(props: Readonly<GenerateViewProps>) {
    super(props);
  }

  public findUI(uiKey: string): React.ReactNode {
    return (this as any)[uiKey];
  }

  public updateUI(uiKey: string, props: any): void {
    const { uiMeta } = this.props;
    (function recursive(uiMeta: Array<any>) {
      for (let i = 0, len = uiMeta.length; i < len; i++) {
        if (uiMeta[i].uiKey === uiKey) {
          _.assign(uiMeta[i].props, props);
        } else if (uiMeta[i].props && uiMeta[i].props.children) {
          recursive(uiMeta[i].props.children);
        }
      }
    })([uiMeta]);
    this.setState({ _date: Date.now() });
  }

  private generateReactElement(element: any): JSX.Element {
    const { uiProps = {} } = this.props;
    const { namespace, type, key, uiKey, props } = element;
    if (namespace === "antd") {
      const typeNode = type.split(".");
      _.assign(props, { key: key }, { ref: (node: any) => ((this as any)[uiKey] = node) }, (uiProps as any)[uiKey]);
      return React.createElement(typeNode.length === 1 ? require("antd")[typeNode[0]] : require("antd")[typeNode[0]][typeNode[1]], props, props.children);
    } else if (namespace === "antd-mobile") {
      const typeNode = type.split(".");
      _.assign(props, { "data-nid": key, key: key, ref: (node: any) => ((this as any)[uiKey] = node) }, (uiProps as any)[uiKey]);
      return React.createElement(
        typeNode.length === 1 ? require("antd-mobile")[typeNode[0]] : require("antd-mobile")[typeNode[0]][typeNode[1]],
        props,
        props.children
      );
    } else if (namespace === "quickdev-lib") {
      const typeNode = type.split(".");
      _.assign(props, { key: key }, { ref: (node: any) => ((this as any)[uiKey] = node) }, (uiProps as any)[uiKey]);
      return React.createElement(
        typeNode.length === 1 ? require("quickdev-lib")[typeNode[0]] : require("quickdev-lib")[typeNode[0]][typeNode[1]],
        props,
        props.children
      );
    } else if (namespace === "html") {
      _.assign(props, { key: key }, { ref: (node: any) => ((this as any)[uiKey] = node) });
      return React.createElement(type, props, props.children);
    } else {
      return element;
    }
  }

  private generateComponent(uiMeta: Array<any>): Array<JSX.Element> {
    const element = [];
    for (let i = 0, len = uiMeta.length; i < len; i++) {
      if (uiMeta[i].props && uiMeta[i].props.children) {
        uiMeta[i].props.children = this.generateComponent(uiMeta[i].props.children);
      }
      element.push(this.generateReactElement(uiMeta[i]));
    }
    return element;
  }

  render(): React.ReactNode {
    const { uiMeta } = this.props;
    if (Object.keys(uiMeta).length === 0) return null;
    return this.generateComponent([_.cloneDeep(uiMeta)]);
  }
}
